<template>
  <div>
    <h1>我是根组件</h1>
    <router-link :to="{'name': 'xiaohua', 'params': {id: 45}}">去看笑话</router-link>
    <button v-for="i in 60" :key="i" @click="go(i)">去看{{i}}号笑话</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      methods: {
        go(n){
          this.$router.push({
            name:'xiaohua',
            params: {
              id: n
            }
          })
        }
      },       
  }
</script>

<style lang="scss" scoped>

</style>