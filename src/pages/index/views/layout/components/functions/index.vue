<template>
    <div id="functions" :class="$style.main">
        <!-- 通知 -->
        <notification :effect="tooltip.effect" :placement="tooltip.placement" />

        <!-- 用户功能 -->
        <user />
    </div>
</template>

<script>
import Notification from './notification.vue';
import User from './user.vue';

export default {
    components: {
        Notification,
        User,
    },
    data() {
        return {
            tooltip: {
                effect: 'dark',
                placement: 'bottom',
            },
        };
    },
};
</script>

<style lang="less" module>
.main {
    > * + * {
        margin-left: 30px;
    }
}
</style>
