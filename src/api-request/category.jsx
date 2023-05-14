import RequestHandler from '@/config/axios';

// Manager
export const CreateCategory = async data => {
    return RequestHandler.call({ url: '/managers/categories/add-category/', method: 'post', data }).then(res => res.data);
};

export const GetCategoriesList = async () => {
    return RequestHandler.call({ url: '/managers/categories/', method: 'get' }).then(res => res.data);
};

// User
export const GetUserCategoriesList = async () => {
    return RequestHandler.call({ url: '/users/categories/', method: 'get' }).then(res => res.data);
};

// Admin
export const GetAdminCategoriesList = async () => {
    return RequestHandler.call({ url: 'managers/categories/', method: 'get' }).then(res => res.data);
};

// Delete
export const DeleteCategory = async (id) => {
    return RequestHandler.call({ url: `managers/categories/delete-category/${id}/`, method: 'delete' }).then(res => res.data);
};