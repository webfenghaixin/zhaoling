// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式

// 引入标题库
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

Vue.use(vueSwiper)  //使用插件

// 地图组件
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4'
});

import axios from "axios";
//配置跨域访问选项
//axios.defaults.withCredentials=true;
//将axios配置vue实例属性
Vue.prototype.axios=axios;

Vue.config.productionTip = false

// 组件跳转时，页面回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
