import Vue from 'vue';
import ElementUI from 'element-ui';
import store from './store';
import router from './router';
import App from './App.vue';

// 路由权限
import './helper/router';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

Vue.config.productionTip = false;

// 插件
Vue.use(ElementUI, { size: 'small', zIndex: 2000 });

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
