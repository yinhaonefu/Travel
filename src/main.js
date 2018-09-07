// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 让页面在每个终端显示的内容一致
import './assets/styles/reset.css'

// 解决移动端1像素边框问题
import './assets/styles/border.css'

// 解决移动端点击延迟300ms问题，需要引入依赖
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
