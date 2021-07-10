// import instance from '@/helper/axios';
// import { server } from '@/config';

// const axios = instance({ baseURL: server.api });
// const silence = instance({ baseURL: config.server.easyMock, notification: false });

// offline
const login = () => new Promise(resolve => {
    resolve({
        token: {
            access_token: 'Bearer-123456',
            refresh_token: 'Bearer-987654',
        },
    });
});

const logput = () => new Promise(resolve => {
    resolve({});
});

export default {
    login,
    logput,
};
