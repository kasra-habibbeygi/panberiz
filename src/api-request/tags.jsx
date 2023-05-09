import RequestHandler from '@/config/axios';

export const AddTags = async () => {
    return RequestHandler.call({ url: '/managers/comments/', method: 'get' }).then(res => res.data);
};
