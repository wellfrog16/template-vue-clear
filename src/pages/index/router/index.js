import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Index.vue';
// import Root from '../../../components/Root.vue';
import Login from '../views/login/Index.vue';

Vue.use(Router);

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>',
// });

// const icon = 'menu-fix-icon fas fa-pager fa-lg fa-fw';

// 静态路由，不参与权限验证
const staticRoutes = [
    {
        path: '',
        redirect: { name: '登入界面' },
        meta: {
            hidden: true,
        },
    },
    {
        path: '/login',
        name: '登入界面',
        component: Login,
        meta: {
            hidden: true,
        },
    },
    {
        path: '/401',
        name: '401',
        component: () => import('../views/error/401.vue'),
        meta: {
            hidden: true,
        },
    },
];

const asyncRoutes = [
    {
        path: '/home',
        name: '主页',
        component: Layout,
        redirect: { path: '/home/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-home fa-lg fa-fw',
        },
        children: [
            {
                path: 'index',
                name: '主页详细',
                component: () => import('../views/home/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/document',
        name: '说明文档',
        component: Layout,
        redirect: { path: '/document/index' },
        meta: {
            icon: 'el-icon-document',
        },
        children: [
            {
                path: 'index',
                name: '说明文档首页',
                component: () => import('../views/document/Index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/ui',
        name: '组件',
        component: Layout,
        redirect: { path: '/ui/form' },
        meta: {
            icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
        },
        children: [
            {
                name: '基础表格和表单',
                path: 'form',
                component: () => import('../views/ui/Form.vue'),
                meta: {
                    icon: 'menu-fix-icon fab fa-wpforms fa-lg fa-fw',
                },
            },
        ],
    },
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => !m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position;
};

// todo 按模块写入单独的文件引用
const router = new Router({
    // mode: 'history',
    scrollBehavior,
    routes: staticRoutes,
});

export {
    staticRoutes,
    asyncRoutes,
};

export default router;
