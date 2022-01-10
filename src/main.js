import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)


Vue.config.productionTip = false

import storeConfigs from './store'
const store = new Vuex.Store(storeConfigs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
