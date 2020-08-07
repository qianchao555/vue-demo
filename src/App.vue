<!--展示模板-->
<template>
  <!--此app为样式类-->
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/> <!--会把子路由相关的内容渲染在这里，在index.js里面看路由信息-->
  </div>
</template>

<script>

export default {
  name: 'App',

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
