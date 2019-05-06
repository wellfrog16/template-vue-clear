import instance from '@/helper/axios';

const axios = instance({
    url: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8',
    notification: false,
});

const base = '/admin';

const login = params => axios.post(`${base}/login`, params).then(res => res);
const logout = params => axios.get(`${base}/logout`, params).then(res => res);
const info = params => axios.get(`${base}/member`, { params }).then(res => res.data);

export default {
    login,
    logout,
    info,
};
