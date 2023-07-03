import RequestHandler from '../../config/axios';

export const GetUserMediaList = async (id, lang) => {
    return RequestHandler.call({ url: `/users/media/${id}/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetMyMediaList = async () => {
    return RequestHandler.call({ url: '/admins/media/', method: 'get' }).then(res => res.data);
};

export const GetAllMedia = async lang => {
    return RequestHandler.call({ url: `/managers/media/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const GetAllDeactiveMedia = async lang => {
    return RequestHandler.call({ url: `/managers/media-deactive/?lang=${lang}`, method: 'get' }).then(res => res.data);
};

export const UpdateMedia = async (id, data) => {
    return RequestHandler.call({ url: `/managers/media/update-media/${id}/`, method: 'put', data }).then(res => res.data);
};

export const DeleteMedia = async id => {
    return RequestHandler.call({ url: `/managers/media/delete-media/${id}/`, method: 'delete' }).then(res => res.data);
};

export const GetAdminVideos = async () => {
    return RequestHandler.call({ url: '/admins/media-for-agent/', method: 'get' }).then(res => res.data);
};

export const PostAcceptVideo = async data => {
    return RequestHandler.call({ url: '/admins/my-video-add/', method: 'post', data }).then(res => res.data);
};
