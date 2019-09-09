// 应用入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
// import Mint from 'mint-ui'
import {Swipe, Header, Button,  Tabbar, TabItem, SwipeItem, Lazyload, Indicator, Toast } from 'mint-ui'
import moment from 'moment'
import 'mint-ui/lib/style.css'
import NavBar from './components/common/NavBar.vue'
import axios from 'axios'
import store from './store/index'

// 引入全局样式
import './style/common.css';

// 配置公共 url
axios.defaults.baseURL = '';

Vue.config.productionTip = false;

// 真实项目中，不要全部引入，按需引入
// Vue.use(Mint);

Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
// Vue.component(Indicator.name, Indicator);
Vue.use(Toast);
Vue.use(Lazyload);

Vue.component('NavBar', NavBar);

// https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

Vue.prototype.$toast = function (option){
  Toast(option)
}

// 定义全局过滤器
Vue.filter('convertTime', function (value, params) {
  return moment(value).format(params);
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  //加载提示框
  // Indicator.open({
  //   text: '玩命加载中...'
  // });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  // 目前由于接收不到后端的response，所以加载提示框一直显示
  Indicator.close();

  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
