import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router';
import './less/main.less';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#apps',
  template: '<App/>',
  components: {App},    //局部组件注册。
  router,
})
