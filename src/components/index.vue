<template>
    <div>
      <router-view/>

      <div class="menu-controller">
        <mt-tabbar v-model="selected">
          <mt-tab-item id="home">
            <img slot="icon" src="../assets/logo.png">
            首页
          </mt-tab-item>
          <mt-tab-item id="product">
            <img slot="icon" src="../assets/logo.png">
            商品
          </mt-tab-item>
          <mt-tab-item id="功能2">
            <img slot="icon" src="../assets/logo.png">
            功能2
          </mt-tab-item>
          <mt-tab-item id="my">
            <img slot="icon" src="../assets/logo.png">
            我的
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            selected:'home'
          }
        },
        watch:{
          'selected'(){
            this.$router.replace('/' + this.selected)
          }
        }
    }
</script>

<style scoped>
  .menu-controller{
    position: fixed;
    width: 100%;
    z-index: 1000;
    bottom: 0;
  }
</style>
