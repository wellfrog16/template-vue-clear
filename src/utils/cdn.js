// cdn 资源加载后导出，方便import时了解对应的资源
// 非必要的方式
// 目前发现某些情况下eslint会报错，如 import { $, echarts } from '@/utils/cdn'

const {
    $,
    moment,
    axios,
    _,
    ClipboardJS,
    NProgress,
    CryptoJS,
    Cookies,
} = window;

export {
    $, // jquery
    $ as jquery, // jquery
    moment, // moment日期
    axios, // http请求库
    _, // lodash函数库
    ClipboardJS, // 复制
    ClipboardJS as Clipboard, // 复制
    NProgress, // 进度条
    CryptoJS, // 加密
    Cookies, // cookie
};
