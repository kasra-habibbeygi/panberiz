import RequestHandler from '../config/axios';

export const GetVerifyCode = async codemeli => {
    return RequestHandler.call({ url: '/users/check-user/', method: 'post', data: { codemeli } }).then(res => res.data);
};

export const GetToken = async data => {
    return RequestHandler.call({ url: 'users/check-verify-code/', method: 'post', data }).then(res => res.data);
};
