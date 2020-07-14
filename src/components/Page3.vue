<template>
  <!--    计算属性，监控属性-->
  <div id="Page3">
    <p>原始字符串：{{message}}</p>
    <p>计算后反转字符串:{{reversedMessage}}</p>
    <p>method代替computed:{{reversedMessage2()}}</p>
    <p>{{site}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Page3',
    data () {
      return {
        message: 'qianchao',
        name:'google',
        url:'http://www.google.com',
      }
    },
    computed: {
      site: {
        get: function () {
          return this.name + '' + this.url
        },
        set: function (newValue) {
          var names = newValue.split('')
          this.name = names[0]
          this.url = names[names.length - 1]
        }
      },
      reversedMessage: function () {
        //提供的函数将用作属性reversedMessage的getter  this.reversedMessage依赖与
        //this.message,  message发生改变时reversedMessage也会更新
        return this.message.split('').reverse().join('')
        //this指向当前Vue对象的实例
      }
    },
    methods: {
      reversedMessage2: function () {
        // computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。
        // 而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
        return this.message.split('').reverse().join('')
      }
    }
  }
  // this.site='http://www.baidu.com';
  document.write('name:'+this.name);
  document.write('<br>')
  document.write('url:'+this.url);
</script>

<style scoped>

</style>
