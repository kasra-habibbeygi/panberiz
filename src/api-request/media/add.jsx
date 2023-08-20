import RequestHandler from '../../config/axios';

export const AddNewmedia = async (data, role) => {
    if (role === 'AgentAcademy') {
        return RequestHandler.call({ url: '/admins/media/add-media/', method: 'post', data }).then(res => res.data);
    }

    return RequestHandler.call({ url: '/managers/media/add-media/', method: 'post', data }).then(res => res.data);
};

export const EditMedia = async (id, data, role) => {
    if (role === 'AgentAcademy') {
        return RequestHandler.call({ url: `/admins/media/update-media/${id}/`, method: 'put', data }).then(res => res.data);
    }

    return RequestHandler.call({ url: `/managers/media/update-media/${id}/`, method: 'put', data }).then(res => res.data);
};
