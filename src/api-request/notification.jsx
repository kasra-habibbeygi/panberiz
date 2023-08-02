import RequestHandler from '../config/axios';

export const GetNotificationList = async pageSize => {
    return RequestHandler.call({ url: `/users/notifications/?page_size=${pageSize}`, method: 'get' }).then(res => res.data.results);
};

export const EditNotificationList = async pk => {
    return RequestHandler.call({ url: `/users/notifications/${pk}/`, method: 'put' });
};
