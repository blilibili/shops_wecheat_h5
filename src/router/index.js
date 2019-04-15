import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

import Home from '@/components/pages/home/home'
import ProductIndex from '@/components/pages/product/index'
import MyIndex from '@/components/pages/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/home',
      children:[
        {
          path:'home',
          component: Home
        },
        {
          path:'product',
          component: ProductIndex
        },
        {
          path:'my',
          component: MyIndex
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
