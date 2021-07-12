import { utils } from '@/utils/rivers';
import accountApi from '@/api/system/account';
import apiStore from '#index/store/common/apiStore';

const extraState = {
    accessToken: '',
    refreshToken: '',
    accountId: 0,
    accountName: '', // 账户名称
    roles: [], // 账户角色
    routes: [], // 账户路由
};
const store = apiStore(accountApi);
const extraStore = {
    state: {
        ...extraState,
    },
    actions: {
    },
};

utils.deepMerge(store, extraStore);

export default store;
