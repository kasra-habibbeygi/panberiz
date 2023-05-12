import RequestHandler from '@/config/axios';

// Manager
export const Createtag = async data => {
    return RequestHandler.call({ url: '/managers/tags/add-tag/', method: 'post', data }).then(res => res.data);
};

export const GetTagsList = async () => {
    return RequestHandler.call({ url: '/managers/tags/', method: 'get' }).then(res => res.data);
};

// User
export const GetUserTagsList = async () => {
    return RequestHandler.call({ url: '/managers/tags/', method: 'get' }).then(res => res.data);
};

// Admin
export const GetAdminTagsList = async () => {
    return RequestHandler.call({ url: '/users/tags', method: 'get' }).then(res => res.data);
};
