import RequestHandler from '@/config/axios';

// Manager
export const Createtag = async data => {
    return RequestHandler.call({ url: '/managers/tags/add-tag/', method: 'post', data }).then(res => res.data);
};

export const GetTagsList = async lang => {
    return RequestHandler.call({ url: `/managers/tags/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// User
export const GetUserTagsList = async lang => {
    return RequestHandler.call({ url: `/users/tags/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// Admin
export const GetAdminTagsList = async lang => {
    return RequestHandler.call({ url: `/admins/media/tags/?lang=${lang}`, method: 'get' }).then(res => res.data);
};
