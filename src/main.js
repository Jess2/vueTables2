// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ClientTable } from "vue-tables-2";

Vue.config.productionTip = false
let options = {};
let useVuex = false;
let theme = "bootstrap4";
let template = "default";
Vue.use(ClientTable, options, useVuex, theme, template);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
