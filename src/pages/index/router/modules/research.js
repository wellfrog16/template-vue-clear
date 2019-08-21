import Layout from '#index/views/layout/Index.vue';

const route = {
    path: '/research',
    component: Layout,
    redirect: { path: '/research/mixins' },
    meta: {
        title: '研究示例',
        icon: 'menu-fix-icon fas fa-democrat fa-lg fa-fw',
    },
    children: [
        {
            path: 'mixins',
            component: () => import('#index/views/research/Mixins.vue'),
            meta: {
                title: '组件继承',
                icon: 'el-icon-goods',
            },
        },
    ],
};

export default route;
