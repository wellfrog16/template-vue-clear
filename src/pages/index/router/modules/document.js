import Layout from '#index/views/layout/index.vue';

const route = {
    name: 'mydocument',
    path: '/document',
    component: Layout,
    redirect: { path: '/document/index' },
    meta: {
        title: '说明文档',
        icon: 'el-icon-document',
    },
    children: [
        {
            name: 'document',
            path: 'index',
            component: () => import('#index/views/document/index.vue'),
            meta: {
                title: '说明文档首页',
                hidden: true,
            },
        },
    ],
};

export default route;
