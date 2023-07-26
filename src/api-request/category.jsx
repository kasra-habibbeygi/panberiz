import RequestHandler from '@/config/axios';

// Manager
export const CreateCategory = async data => {
    return RequestHandler.call({ url: '/managers/categories/add-category/', method: 'post', data }).then(res => res.data);
};

export const GetCategoriesList = async lang => {
    return RequestHandler.call({ url: `/managers/categories/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// User
export const GetUserCategoriesList = async lang => {
    return RequestHandler.call({ url: `/users/categories/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// Admin
export const GetAdminCategoriesList = async lang => {
    return RequestHandler.call({ url: `managers/categories/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

// Delete
export const DeleteCategory = async id => {
    return RequestHandler.call({ url: `managers/categories/delete-category/${id}/`, method: 'delete' }).then(res => res.data);
};
