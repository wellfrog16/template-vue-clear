import { storage, filterTree } from '@frog-res/h-utils/lib/es5';
import { helper } from '@/helper/lakes';
import safeApi from '@/api/system/safe';
import accountApi from '@/api/system/account';
// import { _ } from '@/utils/cdn';
import { STORAGE_SITE } from '@/helper/constant';
import baseStore from '#index/store/common/baseStore';
import { asyncRoutes } from '#index/router';

const defaultState = {
    id: 0,
    username: '',
    email: '',
    jsonRoles: [],
    routes: [],
    fullRoutes: [],
};

const store = {
    namespaced: true,
    state: {
        ...defaultState,
    },
    mutations: {
        ...baseStore().mutations,
    },
    actions: {
        // 登陆
        async login({ dispatch }, account) {
            // 先清理数据残留
            dispatch('clear');

            const res = await safeApi.login(account);
            storage.set(STORAGE_SITE, res, { encrypt: true });
            return true;
        },

        // 登出
        async logout({ dispatch }) {
            try {
                await safeApi.logout();
                return true;
            } finally {
                dispatch('clear');
            }
        },

        // 清除vuex和localStorage中的登录信息
        clear({ commit }) {
            helper.getSite().destroy();
            commit('setState', { ...defaultState });
        },

        // 从token恢复
        async recover({ commit, rootGetters }) {
            // 查询当前账户信息，查询失败则说明当前token过期或不存在
            const account = await accountApi.detail();
            console.log(account);
            // const { detail } = account;

            // // 存储账户信息到vuex
            commit('setState', { ...account });

            let myRoutes = [];
            if (rootGetters.isAdmin) { // 角色保护admin直接全量返回异步路由
                myRoutes = asyncRoutes;
            } else {
                myRoutes = filterTree(asyncRoutes, item => account.routes.indexOf(item.name) !== -1);
            }

            commit('setState', { fullRoutes: myRoutes }); // 把自己的完整树形路由存入store，用于目录展示

            // // 加载管理后台的setting
            // const { injectStore } = useSetting();
            // await injectStore();

            // 返回自己权限的路由
            return myRoutes;
        },
    },
};

export default store;
