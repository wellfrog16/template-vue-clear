<template>
    <div>
        <i class="fas fa-server fa-lg fa-fw" />
        {{ serverName }}
    </div>
</template>

<script>
export default {
    data() {
        const site = this.$helper.getSite();

        return {
            serverName: site.server.name,
        };
    },
};
</script>
