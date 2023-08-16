import RequestHandler from '@/config/axios';

export const GetCommentsList = async (id, page) => {
    return RequestHandler.call({ url: `users/comments/${id}/?page=${page}`, method: 'get' }).then(res => res.data);
};
