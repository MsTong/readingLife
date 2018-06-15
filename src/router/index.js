import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Login from '@/components/login'
import Regist from '@/components/regist'
import Index from '@/components/index'
import Content from '@/components/content'
import Details from '@/components/details/detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Index,
      redirect:'/home',
      children:[
        {
          path:'home',
          component:Content
        },
        { 
          path:'details',
          component:Details
        }
      ]
    },
    {
      path:'/sign',
      component:Sign,
      redirect:'/sign/login',
      children:[
        {
          path:'login',
          component:Login
          },
        {
          path:'regist',
          component:Regist
        }
      ]
    }
  ]
})
