<template>
    <el-menu-item
        v-bind="itemProps"
        @click="link"
    >
        <h-icon :class="item.meta && item.meta.icon" />
        <span slot="title">{{ item.meta && item.meta.title }}</span>
    </el-menu-item>
</template>

<script>
export default {
    props: {
        item: { type: Object, default: () => {}, required: true },
    },
    computed: {
        itemProps() {
            const props = {
                key: this.item.path,
            };
            // 无index则不会触发el-menu的router
            if (!this.isLink) { props.index = this.item.path; }

            return props;
        },
        isLink() {
            return this.item.meta && this.item.meta.type === 'link';
        },
    },
    methods: {
        link() {
            this.isLink && window.open(this.item.meta.url);
        },
    },
};
</script>
