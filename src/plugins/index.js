import Vue from 'vue';
import ElementUI from 'element-ui';
import InfiniteLoading from 'vue-infinite-loading'; // 滚动加载

import Icon from './icon'; // 数字动画

Vue.use(ElementUI, { size: 'medium', zIndex: 2000 });
Vue.use(InfiniteLoading);
Vue.use(Icon);
