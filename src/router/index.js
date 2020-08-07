import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Router1 from '../components/Router1'
import VueModel from '../components/VueModel'


Vue.use(Router)
Vue.component('Runoob', {
  props: ['qc1', 'qc2'],
  template: '<h2>全局注冊組件,父组件中传来的值是：{{qc1}}{{qc2}}</h2><br>'
})


Vue.component('SubComponent', {
  template: '<button v-on:click="increment">{{counter}}</button>',
  data () {
    return {
      counter: 0,
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Router1',
      // 将HelloWorld组件发布为路由
      component: Router1,
      children: [ //test1中的二级路由
        {
          path: '/foo',
          name: 'foo',
          component: VueModel}
      ]

    },

  ],
})
