import RequestHandler from '@/config/axios';

export const AddNewCommentPoint = async data => {
    return RequestHandler.call({ url: '/users/add-comment-point/', method: 'post', data }).then(res => res.data);
};

export const AddNewComment = async data => {
    return RequestHandler.call({ url: '/users/add-comment/', method: 'post', data }).then(res => res.data);
};

export const GetAllComments = async (role, page) => {
    if (role === 'AgentAcademy') {
        return RequestHandler.call({ url: `admins/media/comments/?page=${page}`, method: 'get' }).then(res => res.data);
    }

    return RequestHandler.call({ url: `managers/comments/?page=${page}`, method: 'get' }).then(res => res.data);
};

export const UpdateCommentStatus = async (data, role) => {
    if (role === 'AgentAcademy') {
        return RequestHandler.call({ url: 'admins/media/comment-update/', method: 'put', data }).then(res => res.data);
    }
    return RequestHandler.call({ url: 'managers/media/comment-update/', method: 'put', data }).then(res => res.data);
};
