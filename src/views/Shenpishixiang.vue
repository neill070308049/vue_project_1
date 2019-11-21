<template>
    <div>
        <h3>第{{id}}号审批事项</h3>
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
           this.id = this.$route.params.id
        },
    }
</script>

<style lang="scss" scoped>

</style>