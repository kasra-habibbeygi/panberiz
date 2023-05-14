import RequestHandler from '../../config/axios';

export const GetUserMediaList = async (id, lang) => {
    return RequestHandler.call({ url: `/users/media/${id}/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetMyMediaList = async () => {
    return RequestHandler.call({ url: '/managers/my-media/', method: 'get' }).then(res => res.data);
};
