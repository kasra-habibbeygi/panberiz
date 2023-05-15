import RequestHandler from '@/config/axios';

// manager
export const GetManagerChart1Info = async () => {
    return RequestHandler.call({ url: '/managers/chart1/data-show-media/result/', method: 'get' }).then(res => res.data);
};

export const GetManagerChart3Info = async () => {
    return RequestHandler.call({ url: '/managers/chart3/visit/result/', method: 'get' }).then(res => res.data);
};

// admin
export const GetAdminChart1Info = async mediaID => {
    return RequestHandler.call({ url: `/admins/chart1/data-show-media/result/${mediaID}/`, method: 'get' }).then(res => res.data);
};

export const GetAdminChart2Info = async () => {
    return RequestHandler.call({ url: '/admins/chart2/visit/result/', method: 'get' }).then(res => res.data);
};

export const GetAdminChart3Info = async () => {
    return RequestHandler.call({ url: '/admins/chart3/visit/result/', method: 'get' }).then(res => res.data);
};
