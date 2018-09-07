// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// webpack.base.conf.js 中 设置别名 styles 代表 src/assets/styles目录 让页面在每个终端显示的内容一致
import 'styles/reset.css'

// 解决移动端1像素边框问题
import 'styles/border.css'

// 解决移动端点击延迟300ms问题，需要引入依赖
import fastClick from 'fastclick'

import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
