import RequestHandler from '../config/axios';

export const GetUserInformation = async () => {
    return RequestHandler.call({ url: '/users/user-info/', method: 'get' }).then(res => res.data);
};
