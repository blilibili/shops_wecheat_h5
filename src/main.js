// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
// mint-ui
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// rem 布局css
// import '@/assets/css/media.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// 拦截器
axios.interceptors.request.use((config) => {
  console.log(config)
  // 判断是否是获取userInfo接口
  if(config.url.indexOf('wechatlogin') == -1){
    config['headers']['Authorization'] = window.localStorage.getItem('token') || '';
  }
  return config
} , (error) => {
  console.log(error)
  return Promise.reject(error)
});


axios.interceptors.response.use(
  response => {  //成功请求到数据
    return response
  },
  error => {  //响应错误处理
    console.log(error);
    // 检测是否有401
    if(error.toString().indexOf('401') != -1){
      window.localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error)
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
