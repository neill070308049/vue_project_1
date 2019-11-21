<template>
    <div>
        <h2>河池市发展和改革委员会</h2>
        <h3>首页</h3>
        <router-link :to="{'name':'shenpishixiang','params':{id: 45}}">去看45号审批事项</router-link>
        <button @click="go(60)">去看60号审批事项</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            go(n){
                this.$router.push({
                    'name':'shenpishixiang',
                    'params':{
                        id: n
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>