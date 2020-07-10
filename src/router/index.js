import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '../components/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // 将HelloWorld组件发布为路由
      component: HelloWorld
    },
    {
      path: '/',
      name: 'page1',
      // 将page1组件发布为路由
      component: Page1
    }
  ]
})
