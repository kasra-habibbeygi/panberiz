import RequestHandler from '@/config/axios';

// User
export const AddNewFavorits = async data => {
    return RequestHandler.call({ url: '/users/favorites-create/', method: 'post', data }).then(res => res.data);
};

export const GetFavoritsList = async () => {
    return RequestHandler.call({ url: '/users/favorites/', method: 'get' }).then(res => res.data);
};
