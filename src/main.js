import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import elementui from 'element-ui';
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI);
Vue.use(elementui);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
