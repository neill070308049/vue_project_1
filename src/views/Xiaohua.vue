<template>
    <div>
        <h1>我是第{{id}}个笑话</h1>
        123
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0
            }
        },
        created() {
            this.id = (this.$route.params.id);
        },
    }
</script>

<style lang="scss" scoped>

</style>