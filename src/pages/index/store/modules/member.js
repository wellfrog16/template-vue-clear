import { helper } from '@/helper/lakes';
import { auth, storage, utils } from '@/utils/rivers';
import api from '@/api/mock/member';

export default {
    namespaced: true,
    state: {
        token: '',
        roles: [],
    },
    mutations: {
        setState: (state, payload) => utils.deepMerge(state, payload),
        logout() {
            this.commit('member/setState', { token: '', roles: [] });
        },
    },
    getters: {
    },
    // todo 登陆信息保存至localStorage封装
    actions: {
        // login({ commit }, userInfo) {
        //     return new Promise((resolve, reject) => {
        //         api.login(userInfo).then((res) => {
        //             const { data } = res;
        //             if (res.success) {
        //                 commit('setState', { token: data.token });
        //                 auth.set(data.token);
        //                 storage.set('username', userInfo.username);
        //             }
        //             resolve(res.success);
        //         }).catch((error) => {
        //             reject(error);
        //         });
        //     });
        // },
        login({ commit }, userInfo) {
            return new Promise((resolve) => {
                commit('setState', { token: '1' });
                auth.set('1');
                storage.set('username', userInfo.username);
                resolve(true);
            });
        },
        // info({ commit }) {
        //     return new Promise((resolve, reject) => {
        //         api.info().then((res) => {
        //             if (res.roles && res.roles.length > 0) {
        //                 commit('setState', { roles: res.roles });
        //                 resolve(res);
        //             } else {
        //                 reject(new Error('角色信息为空'));
        //             }
        //         }).catch(err => reject(err));
        //     });
        // },
        info({ commit }) {
            return new Promise((resolve) => {
                const res = { roles: ['editor', 'admin'] };
                commit('setState', { roles: res.roles });
                resolve(res);
            });
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                api.logout().then(() => {
                    commit('setState', { token: '', roles: [] });
                    auth.remove();
                    helper.site().destory();
                    resolve();
                }).catch(err => reject(err));
            });
        },
    },
};
