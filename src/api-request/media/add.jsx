import RequestHandler from '../../config/axios';

export const AddNewmedia = async data => {
    return RequestHandler.call({ url: '/managers/media/add-media/', method: 'post', data }).then(res => res.data);
};
