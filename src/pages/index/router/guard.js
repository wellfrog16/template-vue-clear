import { helper } from '@/helper/lakes';
import { NProgress } from '@/utils/cdn';
import store from '#index/store';
import createRouter from '#index/router';
// import createRouter, { asyncRoutes } from '#index/router';

NProgress.configure({ showSpinner: false });

const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start();

    // 白名单，不需要登陆的路由数组
    const whiteList = ['/login', '/401'];
    const site = helper.getSite();

    if (whiteList.includes(to.path)) { // 白名单直接放行
        next();
    } else if (site.token) { // 有token，已经登陆
        const { id: accountId } = store.state.security.safe;

        if (accountId === 0) { // 没有账户信息（页面刷新vuex信息丢失）
            store.dispatch('security/safe/recover').then(routes => {
                // routes.forEach(item => router.addRoute(item));
                router.addRoutes(routes);
                next(to);
            }).catch(() => {
                next({ path: '/login', query: { from: to.path } });
            });
        } else {
            next();
        }
    } else { // 无token，转到登陆页面
        next({ path: '/login', query: { from: to.path } });
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
