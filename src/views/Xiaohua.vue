<template>
    <div>
        <h1>我是第{{id}}个笑话</h1>
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
            console.log(this.$route.params.id);
            this.id = (this.$route.params.id);
        },
    }
</script>

<style lang="scss" scoped>

</style>