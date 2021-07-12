import Layout from '#index/views/layout/index.vue';

const route = {
    name: 'myhome',
    path: '/home',
    component: Layout,
    redirect: { path: '/home/index' },
    meta: {
        icon: 'fas fa-home fa-lg fa-fw',
        title: '首页',
    },
    children: [
        {
            name: 'home',
            path: 'index',
            component: () => import('#index/views/home/index.vue'),
            meta: {
                hidden: true,
                title: '首页详细',
            },
        },
    ],
};

export default route;
