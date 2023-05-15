import RequestHandler from '@/config/axios';

export const GetCertificationList = async () => {
    return RequestHandler.call({ url: '/users/certification/', method: 'get' }).then(res => res.data);
};
