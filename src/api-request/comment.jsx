import RequestHandler from '@/config/axios';

export const AddnewComment = async data => {
    return RequestHandler.call({ url: '/users/add-comment-point/', method: 'post', data }).then(res => res.data);
};

export const AddCommentScore = async data => {
    return RequestHandler.call({ url: '/users/add-media-score/', method: 'post', data }).then(res => res.data);
};
