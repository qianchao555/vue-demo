<template>
<!--  Page2循环之类的功能-->
<div id="Page2">
  <div>
    <h1>Page2 <br>条件与循环</h1>
    <template v-if="ok">
      <h1>条件为真的内容</h1>
    </template>
  </div>
  <div v-if="Math.random()>0.5">
    sorry
  </div>
  <div v-else>Not sorry</div>
  <div>
    <h1>v-if-else测试</h1>
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>
  </div>
  <div>
    <h1>v-for循环测试   v-for 可以绑定数据到数组来渲染一个列表</h1>
    <ol>
      <li v-for="site in sites">
        {{site.name}}
      </li>
    </ol>
  </div>
  <div>
    <h1>v-for 可以通过一个对象的属性来迭代数据</h1>
    <ul>
      <li v-for ="value in object">
        {{value}}
      </li>
    </ul>
  </div>
  <div>
    <h1>v-for 可以通过一个对象的属性来迭代数据,第二个的参数为键名,第三个参数为索引</h1>
    <ul>
      <li v-for ="(value,key,index) in object">
       {{index}}.{{key}}.{{value}}
      </li>
    </ul>
  </div>

  <div>
    <h1>  v-for 也可以循环整数</h1>
    <ul>
      <li v-for ="x in 3">
        {{x}}
      </li>
    </ul>
  </div>

</div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      ok: false,
      type: 'C',
      sites: [
        {name: '钱超1'},
        {name: '钱超2'}
      ],
      object: {
        name: '钱超',
        sex: '男'
      }
    }
  }
}
</script>

<style scoped>

</style>
