## Vue.js学习文档

### 启动项目渲染页面过程

index.html->main.js->app.vue->index.js->helloworld.vue

1. 项目的运行入口index.html

    为什么index.html是项目的入口以及为什么index.html加载后会继续加载main.js、App.vue、index.js，以及他们之间的关系是如何联系起来的呢，这块的配置文件位于build文件夹下，包括webpack.dev.conf.js等。通过项目的配置文件，可以加载运行我们的index.html文件以及自动关联vue相关的模块。

   首先我们来看一下index.html中的内容	

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>y</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

2. 在body体中有一个div标签，其**id为app,这个id将会连接到src/main.js内容**，接着我们看一下main.js中的主要的代码。

```js
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

3.  在main.js中，**新建了一个vue实例，并使用el：#app链接到index.html中的app，并使用template引入组件<app>和路由相关的内容。**也就是说**通过main.js我们关联到App.vue组件**。接着，我们继续看一下App.vue组件中的内容。

```vue
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

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
```

​	4. 看一下App.vue中的内容，是一个标准的App.vue模板的形式，包含了<template>、<script>、<style>三部分，从template标签中可以看到，使用img标签加载了vue的图像，也就是运行vue项目后看到的图像，那么图像下面的内容是从哪里渲染出来的呢？

​	<template>标签下，除了<img>标签外，还有<router-view>标签，<router-view>标签将会把路由相关内容渲染在这个地方。接下来，我们看一下路由的内容有哪些，在哪里出现的。其实，这个文件位于src/router/index.js中，我们看一下**index.js**中的代码

```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

5. 在index.js的代码中，建立了路由相关的内容，也就会渲染到app.vue下面的<router-view>中。在index.js中，将helloworld组件发布为路由，换句说，index.js在这里就是将helloword发布为路由，以在图片下面进行展示helloword内容，接下来我们再看看components/helloword中的内容是啥(由于里面的内容比较多，这里我们只截取了template中的内容)。

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
```

在helloworld.vue的template中，我们可以看到界面上渲染的一些连接等内容。到此，这个页面的加载渲染过程结束了。



