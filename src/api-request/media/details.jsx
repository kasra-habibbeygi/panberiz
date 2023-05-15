import RequestHandler from '../../config/axios';

export const GetMediaDetails = async (id, lang) => {
    return RequestHandler.call({ url: `/users/media/info/${id}/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const AddUserVideoViwe = async data => {
    return RequestHandler.call({ url: '/users/chart1/data-show-media/save/', method: 'post', data }).then(res => res.data);
};
