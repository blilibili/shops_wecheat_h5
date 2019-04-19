<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // window.localStorage.clear()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f9f9f9;
  /*height: 100vh;*/
}
html , body{
  margin: 0;
  padding: 0;
}
.line{
  height: 1px;
  background-color: #f9f9f9;
  width: 100%;
}
.float-bottom-btn{
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 100px;
}
</style>
