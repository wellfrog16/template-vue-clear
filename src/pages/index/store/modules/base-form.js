import { config, cstore } from '@/helper/lakes';

export default {
    namespaced: true,
    state: {
        list: [], // 数据列表
        filters: { ...config.page }, // 查询条件
        total: 0, // 数据总数
        loading: false, // loading层
        activeIndex: -1, // 当前编辑的行
        editVisible: false, // 编辑组件显示控制
        multipleSelection: [], // 批量选中的行数据
        overdue: false, // 数据是否过期，是则立刻刷新重新拉取
    },
    mutations: {
        setState: (state, payload) => cstore.mutations.setState(state, payload),
    },
    getters: {
        // 选中行的guid
        multipleSelectionGuid(state) {
            return state.multipleSelection.map(item => item.guid).join(',');
        },

        // 当前编辑行
        activeRow: state => state.list[state.activeIndex] || {},
    },
    actions: {
    },
};
