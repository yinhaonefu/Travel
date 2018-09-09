import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

// 单页面应用，不会再次发起请求，js会感知到url的变化，根据不同的url显示不同的组件
