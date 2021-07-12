import Layout from '#index/views/layout/index.vue';

const route = {
    name: 'security',
    path: '/security',
    component: Layout,
    redirect: { path: '/security/account' },
    meta: {
        title: '系统安全',
        icon: 'fas fa-user-shield fa-lg fa-fw',
    },
    children: [
        {
            name: 'account',
            path: 'account',
            component: () => import(/* webpackChunkName: "security" */'#index/views/security/account/index.vue'),
            meta: {
                title: '账户列表',
                icon: 'fas fa-users fa-lg fa-fw',
            },
        },
        {
            name: 'role',
            path: 'role',
            component: () => import(/* webpackChunkName: "security" */'#index/views/security/role/index.vue'),
            meta: {
                title: '角色管理',
                icon: 'fas fa-user-tag fa-lg fa-fw',
            },
        },
    ],
};

export default route;
