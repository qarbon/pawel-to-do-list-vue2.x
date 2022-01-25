import callApi from '@/api'
import GlobalComponents from '@/globalComponents'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'


Vue.config.productionTip = false

Vue.prototype.$callApi = callApi;

Vue.use(GlobalComponents);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
