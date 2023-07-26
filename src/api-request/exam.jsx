import RequestHandler from '../config/axios';

export const SubmitNewExam = async data => {
    return RequestHandler.call({ url: 'users/compelete-answers/', method: 'post', data }).then(res => res.data);
};
