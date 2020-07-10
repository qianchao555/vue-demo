<template>
    <div class="page1">
      <h1>{{msg}}</h1>
      <h1>{{hello()}}</h1>
    </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: '我是page1.'
    }
  },
  methods: {
    hello: function () {
      return ' - 学的不仅是技术，更是梦想！'
    }
  }
}
</script>

<style scoped>

</style>
