import RequestHandler from '../../config/axios';

export const GetMediaDetails = async id => {
    return RequestHandler.call({ url: `/users/media/detail/${id}/`, method: 'get' }).then(res => res.data);
};
