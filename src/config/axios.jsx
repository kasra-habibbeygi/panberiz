/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

class RequestHandler extends EventTarget {
    accessTokenKeyName = 'pmlmToken';

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
                ? `Bearer ${JSON.parse(localStorage.getItem(this.accessTokenKeyName)).access}`
                : '';
        }
    }

    async #authorizationHandler() {
        if (localStorage.getItem(this.accessTokenKeyName)) {
            const accessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));
            const accessTokenMaxExpiredTimestamp = accessToken
                ? new Date(accessToken.accessTokenExpireAt).getTime() - 10000
                : Date.now() - 10000;

            if (accessTokenMaxExpiredTimestamp <= Date.now()) {
                const { data } = await axios.put(`${this.#baseUrl}/users/token/refresh/`, { refresh: accessToken.refresh });

                localStorage.setItem(
                    this.accessTokenKeyName,
                    JSON.stringify({
                        access: data.results.access,
                        refresh: data.results.refresh,
                        accessTokenExpireAt: Date.now() + 1200000
                    })
                );
            }

            const newAccessToken = JSON.parse(localStorage.getItem(this.accessTokenKeyName));

            if (new Date(newAccessToken.accessTokenExpireAt).getTime() > Date.now()) {
                this.#authorizationHeader = `Bearer ${newAccessToken.access}`;
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
                        console.log(error);
                        if (error.response.status === 401) {
                            localStorage.removeItem(this.accessTokenKeyName);
                            window.location.href = '/login';
                        }

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
