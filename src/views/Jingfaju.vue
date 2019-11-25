<template>
    <div>
        <h2>经发局组件</h2>
    </div>
</template>

<script>
    // import axios from 'axios';
    import http from '../../src/http/http.js'
    export default {
        created() {
            // axios.get('http://www.aiqianduan.com:4499/news').then(data => {
            //     console.log(data.data);
            // })
            http.get('getNews', (data) => {
                console.log(data.data)
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>