<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import router from './router'
  export default {
    name: 'App',
    created() {
      // window.localStorage.clear()
      router.beforeEach((to, from, next) => {
        this.$store.dispatch('Users/setCurrentRouter'  , to.path)
        next()
        // 这样当从一个普通页面A进入待监听组件时，在待监听组件中按返回键时能正常进入A
      })
    }
  }
</script>

<style>
.default-word{
  font-size: 14px;
}
.info-word{
  color: rgb(163,163,163);
  font-size: 12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  /*background-color: #f9f9f9;*/
  /*height: 100vh;*/
}
html , body{
  margin: 0;
  padding: 0;
}
.line{
  height: 1px;
  background-color: rgb(153,153,153);
  width: 100%;
}
.float-bottom-btn{
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 100px;
}
  .bg-label{
    padding: 5px;
    background-color: #969799;
    color: white;
  }
</style>
