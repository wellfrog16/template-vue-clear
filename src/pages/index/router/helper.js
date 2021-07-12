// 路由数组同级是否有至少一个hidden不为true
export const isShowChildren = children => children.some(item => !(item.meta && item.meta.hidden));

/**
 * 转换成el-tree用的树
 *
 * @param {Array} routes 路由数组
 * @param {string} [bathPath=''] 路径拼接时，基础路径
 * @returns
 * @memberof Permission
 */
export const transformToTree = (routes, bathPath = '', defaultTitle = '未定义') => routes.map(item => {
    const data = {
        name: item.name || Symbol('undefined'),
        path: !bathPath ? item.path : `${bathPath}/${item.path}`,
        label: (item.meta && item.meta.title) || defaultTitle,
        icon: item.meta?.icon || '',
    };

    if (item.children && item.children.length > 0 && isShowChildren(item.children)) {
        data.children = transformToTree(item.children, data.path);
    }

    return data;
});
