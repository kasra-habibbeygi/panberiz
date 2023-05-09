/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

class RequestHandler extends EventTarget {
    accessTokenKeyName = 'accessToken';

    #baseUrl = '';
    #authorizationHeader = '';
    #axiosInstance = null;
    #isQueueProcessing = false;
    #queue = [];

    constructor() {
        super();

        this.#initiateAxiosInstance();
        this.#initiateAuthorizationHeader();

        this.addEventListener('handleRequestsQueue', this.#queueRequestsHandler, false);
    }

    #initiateAxiosInstance() {
        this.#baseUrl = process.env.URL;

        this.#axiosInstance = axios.create({
            baseURL: this.#baseUrl
        });
    }

    clearHeader() {
        this.#authorizationHeader = '';
    }

    #initiateAuthorizationHeader() {
        if (typeof window !== 'undefined') {
            this.#authorizationHeader = localStorage.getItem(this.accessTokenKeyName)
                ? `Bearer ${JSON.parse(localStorage.getItem(this.accessTokenKeyName)).token}`
                : '';
        }
    }

    async #authorizationHandler() {
        if (localStorage.getItem(this.accessTokenKeyName)) {
            const accessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));

            const accessTokenMaxExpiredTimestamp = accessToken ? new Date(accessToken.expiredAt).getTime() - 10000 : Date.now() - 10000;

            if (accessTokenMaxExpiredTimestamp <= Date.now()) {
                const { data } = await axios.put(`${this.#baseUrl}/users/token/refresh/`, { token: accessToken.token });

                localStorage.setItem(
                    this.accessTokenKeyName,
                    JSON.stringify({
                        token: data.result.token,
                        expiredAt: data.result.expiredAt
                    })
                );
            }

            const newAccessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));

            if (new Date(newAccessToken.expiredAt).getTime() > Date.now()) {
                this.#authorizationHeader = `Bearer ${newAccessToken.token}`;
            }
        }
    }

    async #queueRequestsHandler() {
        this.#isQueueProcessing = true;

        while (this.#queue.length > 0) {
            try {
                await this.#authorizationHandler();
            } catch (error) {
                localStorage.removeItem(this.accessTokenKeyName);
                localStorage.removeItem(this.refreshTokenKeyName);
                window.location.href = '/login';
            }

            const currentIndex = this.#queue.length - 1;
            const request = this.#queue[currentIndex];

            const result = this.#axiosInstance(request.url, {
                method: request.method,
                data: request.data,
                headers: {
                    Authorization: this.#authorizationHeader
                }
            });

            this.dispatchEvent(
                new CustomEvent(`request:${currentIndex}`, {
                    detail: result
                })
            );

            this.#queue.pop();
        }

        this.#isQueueProcessing = false;
    }

    async call({ url, method, data = {} }) {
        return new Promise((resolve, reject) => {
            const currentlenght = this.#queue.push({ url, method, data });

            if (!this.#isQueueProcessing) {
                this.dispatchEvent(new CustomEvent('handleRequestsQueue'));
            }

            if (Object.keys(data).length > 0) {
                for (const key of Object.keys(data)) {
                    if (data[key] === '') {
                        delete data[key];
                    }
                }
            }

            this.addEventListener(
                `request:${currentlenght - 1}`,
                async event => {
                    try {
                        const result = await event.detail;
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                },
                {
                    once: true
                }
            );
        });
    }
}

export default new RequestHandler();
