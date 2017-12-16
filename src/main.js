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

// TODO Add test for this function
// TODO What if token will be not correct JWT token?
function parseJwt (token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

// TODO What is parsedToken will be not correct JWT token?
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('JWT') != null) {
    var parsedToken = parseJwt(localStorage.getItem('JWT'))
    var expirationDate = new Date(parsedToken['exp'] * 1000)
    if (new Date().getTime() > expirationDate.getTime()) {
      localStorage.removeItem('JWT')
      next('/')
    }
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
