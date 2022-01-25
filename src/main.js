import callApi from '@/api'
import GlobalComponents from '@/globalComponents'

import { VueMaskDirective } from 'v-mask'
import Vue from 'vue'
import vSelect from 'vue-select'


import App from './App.vue'

import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.prototype.$callApi = callApi

Vue.use(GlobalComponents)

Vue.component('v-select', vSelect)

Vue.directive('mask', VueMaskDirective)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
