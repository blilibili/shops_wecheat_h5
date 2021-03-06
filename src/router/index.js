import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'

import Home from '@/page/pages/home/home'
import NewsIndex from '@/page/pages/news/index'
import Service from '@/page/pages/service/index'
import MyIndex from '@/page/pages/my/index'
import CustomerInfoForm from '@/page/pages/my/component/customerInfoForm'
import SetBirth from '@/page/pages/my/component/setBirth'
import NoNavIndex from '@/page/noNavIndex'
import AddressList from '@/page/pages/my/address/list'
import ProductInfo from '@/page/pages/news/info'
import MyOrderList from '@/page/pages/order/index'
import ConfirmProduct from '@/page/pages/service/page/confirm'
import proInfo from '@/page/pages/service/page/info'
import orderConfirm from '@/page/pages/service/page/confirm'
import newsInfo from '@/page/pages/news/newsInfo'
import CartList from '@/page/pages/component/cart'

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
          path:'news',
          component: NewsIndex
        },
        {
          path:'service',
          component: Service
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
        },
        {
          path:'product/confirm',
          component: ConfirmProduct
        },
        {
          path:'order/list',
          component: MyOrderList
        },
        {
          path:'service/info/:id',
          component: proInfo
        },
        {
          path: 'service/confirm/:id',
          component: ConfirmProduct
        },
        {
          path: 'news/info/:id',
          component: newsInfo
        },
        {
          path: 'cart/list',
          component: CartList
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
