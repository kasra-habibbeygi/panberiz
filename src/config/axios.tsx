import axios from 'axios';
const instance = axios.create({
    baseURL: process.env.URL
});

instance.interceptors.request.use(async config => {
    if (config.data) {
        for (const key of Object.keys(config.data)) {
            if (config.data[key] === '') {
                delete config.data[key];
            }
        }
    }

    return config;
});

export default instance;
