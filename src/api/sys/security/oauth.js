import instance from '@/helper/axios';
import config from '@/config';

const axios = instance({ baseURL: config.server.easyMock });
const silence = instance({ baseURL: config.server.easyMock, notification: false });

const base = '/oauth';

const list = params => axios.get(base, { params });
const detail = params => axios.get(base, { params });
const insert = params => axios.post(base, params);
const update = params => axios.put(base, params);
const remove = params => axios.delete(base, { params });

const token = params => silence.post(`${base}/token`, params);
const destroy = accessToken => silence.delete(`${base}/token/${accessToken}`);

export default {
    list,
    detail,
    insert,
    update,
    remove,
    token,
    destroy,
};
