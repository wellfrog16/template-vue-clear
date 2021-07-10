import Layout from '#index/views/layout/Index.vue';
// import Root from '../../../components/Root.vue';

const route = {
    name: 'myhome',
    path: '/home',
    component: Layout,
    redirect: { path: '/home/index' },
    meta: {
        icon: 'menu-fix-icon fas fa-home fa-lg fa-fw',
        title: '首页',
    },
    children: [
        {
            name: 'home',
            path: 'index',
            component: () => import('#index/views/home/Index.vue'),
            meta: {
                hidden: true,
                title: '首页详细',
            },
        },
    ],
};

export default route;
