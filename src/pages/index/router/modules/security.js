import Layout from '#index/views/layout/index.vue';

const route = {
    name: 'security',
    path: '/security',
    component: Layout,
    redirect: { path: '/security/account' },
    meta: {
        title: '账户管理',
        icon: 'menu-fix-icon fas fa-user-shield fa-lg fa-fw',
    },
    children: [
        {
            name: 'account',
            path: 'account',
            component: () => import(/* webpackChunkName: "security" */'#index/views/security/account/index.vue'),
            meta: {
                title: '账户列表',
                icon: 'menu-fix-icon fas fa-users fa-lg fa-fw',
            },
        },
        {
            name: 'directive',
            path: 'directive',
            component: () => import(/* webpackChunkName: "security" */'#index/views/security/directive/index.vue'),
            meta: {
                title: '权限控制',
                icon: 'menu-fix-icon fab fa-ethereum fa-lg fa-fw',
            },
        },
        {
            name: 'role',
            path: 'role',
            component: () => import(/* webpackChunkName: "security" */'#index/views/security/role/index.vue'),
            meta: {
                title: '权限设置',
                icon: 'menu-fix-icon fas fa-user-cog fa-lg fa-fw',
            },
        },
    ],
};

export default route;
