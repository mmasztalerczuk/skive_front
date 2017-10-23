import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'

import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import GSignInButton from 'vue-google-signin-button'
import VueResource from 'vue-resource'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(GSignInButton)
Vue.use(VueResource)
Vue.component('icon', Icon)

Vue.http.interceptors.push(function (request, next) {
  let token = localStorage.getItem('JWT')
  if (token != null) {
    request.headers.set('Authorization', 'Bearer ' + token)
    request.headers.set('Accept', 'application/json')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
