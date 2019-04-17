import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

import Home from '@/components/pages/home/home'
import ProductIndex from '@/components/pages/product/index'
import Cart from '@/components/pages/cart/index'
import MyIndex from '@/components/pages/my/index'
import CustomerInfoForm from '@/components/pages/my/component/customerInfoForm'
import SetBirth from '@/components/pages/my/component/setBirth'

import NoNavIndex from '@/components/noNavIndex'
import AddressList from '@/components/pages/my/address/list'

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
          path:'cart',
          component: Cart
        },
        {
          path:'my',
          component: MyIndex
        },
        {
          path: 'customerinfo',
          component: CustomerInfoForm
        },
        {
          path: 'setbirth',
          component: SetBirth
        }
      ]
    },
    {
      path: '/',
      name: 'NoNavIndex',
      component: NoNavIndex,
      redirect:'/home',
      children:[
        {
          path: 'address/list',
          component: AddressList
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
