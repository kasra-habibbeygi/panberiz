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

// Delete
export const DeleteTag = async id => {
    return RequestHandler.call({ url: `/managers/tags/delete-tag/${id}/`, method: 'delete' }).then(res => res.data);
};

// specific tags
export const SpecificTags = async (id, lang) => {
    return RequestHandler.call({ url: `/users/media/tags/${id}/?lang=${lang}`, method: 'get' }).then(res => res.data);
};
