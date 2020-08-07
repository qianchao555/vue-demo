<template>
  <div id="router1">
    <p>hello router1!</p>
    <div v-for="site in info">
      {{site.name}}
    </div>


    <router-link to="/foo">go to Foo</router-link>
    <router-link to="/bar">go to bar</router-link>
    <!--      路由出口，路由匹配到的组件将渲染在这里-->
    <router-view></router-view>

  </div>
</template>


<script type="text/javascript">
  import axios from 'axios'

  export default {
    name: 'Router1',
    data () {
      return {
        info: null,
      }
    },
    mounted () {
      axios
        .get('https://www.runoob.com/try/ajax/json_demo.json')
        .then(response => (this.info = response.data.sites))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
  }
</script>

<style scoped>

</style>
