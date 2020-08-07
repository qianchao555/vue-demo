<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="counter+=1">增加1</button>
    <p>按钮被点击了{{counter}}</p>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="say('what')">Say what</button>
<!--    VueModel局部组件-->
<!--    <VueModel></VueModel>-->
<!--    Runoob全局组件-->
    <Runoob qc1="my name is qc1"></Runoob>
    <div>
      <input v-model="parentMsg"><br>
      <Runoob v-bind:qc2="parentMsg"></Runoob>
      <br><br><br>

      <p>{{total}}</p>
      <SubComponent v-on:increment="incrementTotal"></SubComponent>
      <br><br><br>


      <p>页面载入时，input元素自动获取焦点：</p>
      <input v-focus>
    </div>
  </div>

</template>


<script>
  import VueModel from './VueModel'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'QC Vue Demo!!',
        counter: 0,
        parentMsg:'我是qc2',
        total:0,
      }
    },
    methods: {
      greet: function (event) {
        alert('hello' + this.name + '!')
      },
      say: function (message) {
        alert(message)
      },
      incrementTotal:function () {
        this.total+=2;

      }
    },
    components: {
      //局部注册组件
     VueModel
    },
    directives:{
      focus:{
        inserted(element){
          element.focus()
        }
      }
    }
  }

</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
