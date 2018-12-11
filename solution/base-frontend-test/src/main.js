// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import vSelect from 'vue-select'
import moment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
Vue.use(moment)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
