import Vue from 'vue';
import { helper } from '@/helper/lakes';
import { utils } from '@/utils/rivers';
import store from './store';
import router from './router/guard';
import App from './App.vue';

// 过滤器
import '@/utils/filters';

// 自定义指令
import '@/directive';

// 插件
import '@/plugins';

Vue.config.productionTip = false;

Vue.prototype.$helper = helper;
Vue.prototype.$utils = utils;
Vue.prototype.$bus = new Vue(); // 事件总线

window.vueIndex = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
