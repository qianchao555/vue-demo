<template>
  <div id="vueModel">
    <Runoob></Runoob>



    <p>textarea 元素：</p>
    <p style="white-space: pre">{{message2}}</p>
    <textarea v-model="message2" placeholder="多行文本输入.."></textarea>

    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox" >{{checked}}</label><br>
    <span>选择的值为：{{checked}}</span>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob12" v-model="checkedNames">
    <label for="runoob">Runoob</label>

    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>

    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>

    <p>select列表：</p>
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">
      选择的网站是：{{selected}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueModel',
    data () {
      return {
        message: 'qc',
        message2: 'qc2',
        checked : false,
        checkedNames: [],
        selected:''
      }
    }
  }
</script>

<style scoped>

</style>
