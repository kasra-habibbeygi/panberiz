import RequestHandler from '../../config/axios';

export const GetMediaDetails = async (id, lang) => {
    return RequestHandler.call({ url: `/users/media/info/${id}/?lang=${lang}`, method: 'get' }).then(res => res.data);
};
