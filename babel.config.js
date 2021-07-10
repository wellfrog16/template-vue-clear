module.exports = {
    presets: [
        // '@vue/app',
        '@vue/cli-plugin-babel/preset',
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
    ]
    // 暂时关闭按需加载
    // plugins: [
    //     [
    //         'component',
    //         {
    //             libraryName: 'element-ui',
    //             // style: '~/src/plugins/element-ui/element-#0B4C8F',
    //             styleLibraryName: '~src/plugins/element-ui/element-#0B4C8F',
    //             // styleLibraryName: '../../../abc/theme-chalk', // 取消此处，为了引入完整自定义样式，不知道怎么简单的去按需加载自定义样式
    //         },
    //     ],
    // ],
};
