import Layout from '#index/views/layout/index.vue';

const route = {
    name: 'research',
    path: '/research',
    component: Layout,
    redirect: { path: '/research/mixins' },
    meta: {
        title: '研究示例',
        icon: 'fas fa-democrat fa-lg fa-fw',
    },
    children: [
        {
            name: 'research-base',
            path: 'base-table',
            component: () => import(/* webpackChunkName: "research" */'#index/views/research/base-table/index.vue'),
            meta: {
                title: '基础表格和表单',
                icon: 'fab fa-wpforms fa-lg fa-fw',
            },
        },
        {
            name: 'research-lazy',
            path: 'lazy-table',
            component: () => import(/* webpackChunkName: "research" */'#index/views/research/lazy-table/index.vue'),
            meta: {
                title: '滚动加载',
                icon: 'fas fa-scroll fa-lg fa-fw',
            },
        },
    ],
};

export default route;
