<!--展示模板-->
<template>
  <!--此app为样式类-->
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/> <!--会把路由相关的内容渲染在这里，在index.js里面看路由信息-->

    <div>
      <h1>{{msg}}</h1>
    </div>
    <!--page1为组件-->
    <page1></page1>
  </div>
</template>

<script>
import Page1 from './components/Page1'

export default {
  name: 'App',
  data () {
    return {
      msg: '这个逻辑。'
    }
  },
  components: {Page1}
}
</script>

<!--样式代码-->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
