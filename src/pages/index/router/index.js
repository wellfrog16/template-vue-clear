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
        redirect: { path: '/login' },
        meta: {
            hidden: true,
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登入界面',
            hidden: true,
        },
    },
    {
        path: '/401',
        component: () => import('../views/error/401.vue'),
        meta: {
            title: '401',
            hidden: true,
        },
    },
];

const asyncRoutes = [
    {
        path: '/home',
        component: Layout,
        redirect: { path: '/home/index' },
        meta: {
            icon: 'menu-fix-icon fas fa-home fa-lg fa-fw',
            title: '首页',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/home/Index.vue'),
                meta: {
                    hidden: true,
                    title: '首页详细',
                },
            },
        ],
    },
    {
        path: '/document',
        component: Layout,
        redirect: { path: '/document/index' },
        meta: {
            title: '说明文档',
            icon: 'el-icon-document',
        },
        children: [
            {
                path: 'index',
                component: () => import('../views/document/Index.vue'),
                meta: {
                    title: '说明文档首页',
                    hidden: true,
                },
            },
        ],
    },
    {
        path: '/ui',
        component: Layout,
        redirect: { path: '/ui/form' },
        meta: {
            title: '组件',
            icon: 'menu-fix-icon fas fa-puzzle-piece fa-lg fa-fw',
        },
        children: [
            {
                path: 'form',
                component: () => import('../views/ui/Form.vue'),
                meta: {
                    title: '基础表格和表单',
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
