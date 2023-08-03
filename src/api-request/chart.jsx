import RequestHandler from '@/config/axios';

export const GetManagerChart1Info = async () => {
    return RequestHandler.call({ url: '/managers/chart1/data-show-media/result/', method: 'get' }).then(res => res.data);
};

export const GetManagerChart2Info = async lang => {
    return RequestHandler.call({ url: `/managers/chart2/visit/result/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetManagerChart3Info = async lang => {
    return RequestHandler.call({ url: `/managers/chart3/visit/result/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetAdminChart1Info = async () => {
    return RequestHandler.call({ url: '/admins/chart1/data-show-media/result/', method: 'get' }).then(res => res.data);
};

export const GetAdminChart2Info = async lang => {
    return RequestHandler.call({ url: `/admins/chart2/visit/result/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetAdminChart3Info = async lang => {
    return RequestHandler.call({ url: `/admins/chart3/visit/result/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// new chart 3
export const GetAdminCategory = async lang => {
    return RequestHandler.call({ url: `/managers/chart3/visit/result/categories/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetAgentCategory = async lang => {
    return RequestHandler.call({ url: `/admins/chart3/visit/result/categories/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetAdminVideo = async (lang, id, page) => {
    return RequestHandler.call({ url: `/managers/chart3/visit/result/medias/${id}/?lang=${lang}&page=${page}`, method: 'get' }).then(
        res => res.data
    );
};

export const GetAgentVideo = async (lang, id, page) => {
    return RequestHandler.call({ url: `/admins/chart3/visit/result/medias/${id}/?lang=${lang}&page=${page}`, method: 'get' }).then(
        res => res.data
    );
};

export const GetAdminUsers = async (lang, id, page) => {
    return RequestHandler.call({ url: `/managers/chart3/visit/result/users/${id}/?lang=${lang}&page=${page}`, method: 'get' }).then(
        res => res.data
    );
};

export const GetAgentUser = async (lang, id, page) => {
    return RequestHandler.call({ url: `/admins/chart3/visit/result/users/${id}/?lang=${lang}&page=${page}`, method: 'get' }).then(
        res => res.data
    );
};

// search
export const UserSearch = async (lang, inputValue) => {
    return RequestHandler.call({ url: `/users/search-user/${inputValue}/`, method: 'get' }).then(res => res.data);
};
