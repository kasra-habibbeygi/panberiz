import RequestHandler from '@/config/axios';

export const AddNewCommentPoint = async data => {
    return RequestHandler.call({ url: '/users/add-comment-point/', method: 'post', data }).then(res => res.data);
};

export const AddNewComment = async data => {
    return RequestHandler.call({ url: '/users/add-comment/', method: 'post', data }).then(res => res.data);
};
