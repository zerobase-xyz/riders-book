import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => {
    return h(App)
  }
}).$mount('#app')
