<template>
    <div id="page1">
      <h1>{{msg}}</h1>
      <h1>{{hello()}}</h1>
      <div v-html="message"></div>
      <label for="r1">修改颜色</label>
      <input type="checkbox" v-model="use" id="r1">
      <div v-bind:class="{'class1':use}">
        v-bind:class指令测试
      </div>

      <div>
        <h1>表达式测试</h1>
        {{5+5}}<br>
        {{ok?'yes':'no'}}
        {{message2.split('').reverse().join('')}}
        <div v-bind:id="'list-'+id">vue教程</div>
      </div>

      <div>
        <h1>指令测试</h1>
        <p v-if="seen">看见你了</p>
        <h1>参数设置</h1>
        <pre><a v-bind:href="url">链接到百度一下</a> </pre>
      </div>
      <div>
        <h1>用户输入，利用v-model实现双向绑定</h1>
        <p>{{message2}}</p>
        <input v-model="message2">

        <h1>按钮的事件我们可以使用 v-on 监听事件，并对用户的输入进行响应</h1>
        <button v-on:click="reverseMessage">反转字符串</button>
      </div>
      <div>
        <h1>过滤器,Vue.js 允许你自定义过滤器，被用作一些常见的文本格式化。由"管道符"指示</h1>
        {{message2|capitalize}}
        <div v-bind:id="rawId | formatId"></div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'page1', // 类似与App.vue里面的el表达式 来绑定div id=page1
  data () {
    return {
      msg: '我是page1.',
      message: '<h1>v-html代码输入html代码</h1>',
      use: false,
      ok: true,
      message2: '钱超',
      id: 1,

      seen: true,
      url: 'http://www.baidu.com'
    }
  },
  methods: {
    hello: function () {
      return 'page1方法！'
    },
    reverseMessage: function () {
      this.message2 = this.message2.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
  .class1{
    background: #444;
    color: #eee;
  }
</style>
