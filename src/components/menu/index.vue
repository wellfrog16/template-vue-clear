<template>
    <el-menu router
             :class="$style.main"
             :collapse="collapse"
             :background-color="backgroundColor"
             :text-color="textColor"
             :active-text-color="activeTextColor"
             :default-openeds="defaultOpeneds"
             :default-active="defaultActive"
    >
        <template v-for="(item, index) in data">

            <!-- 无子菜单 -->
            <template v-if="!isHiddenItem(item) && (!item.children || isHiddenChildren(item))">
                <menu-item :item="item" :key="index" />
            </template>

            <!-- 有子菜单 -->
            <template v-if="!isHiddenItem(item) && (item.children && !isHiddenChildren(item))">
                <submenu-item :item="item" :key="index" :popper-class="popperClass" />
            </template>
        </template>
    </el-menu>
</template>

<script>
import MenuItem from './menu-item.vue';
import SubmenuItem from './submenu-item.vue';
import * as helper from './helper';

// todo: 三级菜单通用组件化
export default {
    components: { MenuItem, SubmenuItem },
    props: {
        data: { type: Array, default: () => [] },
        collapse: { type: Boolean, default: false },
        'default-openeds': { type: Array, default: () => [] },
        'default-active': { type: String, default: '' },
        'background-color': { type: String, default: '#fff' },
        'text-color': { type: String, default: '#303133' },
        'active-text-color': { type: String, default: '#409eff' },
        'popper-class': { type: String, default: '' },
    },
    methods: {
        isHiddenItem: item => helper.isHiddenItem(item),
        isHiddenChildren: item => helper.isHiddenChildren(item),
    },
};
</script>

<style lang="less" module>
.main, .popper-class {
    :global {
        .h-icon {
            vertical-align: middle;
            margin-right: 5px;
            width: 24px;
            text-align: center;
            font-size: 18px;
            line-height: 1;
            color: #d0ddec; // 对齐textColor
        }

        .el-submenu__title, .el-menu-item {
            span {
                position: relative;
                top: 1px;
            }
        }
    }
}
</style>
