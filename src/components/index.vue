<template>
    <div>
      <router-view/>

      <div class="menu-controller">

        <van-tabbar
          v-model="active"
          active-color="#07c160"
        >
          <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
          <van-tabbar-item icon="hot-sale-o" to="/product">商品</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            active:0,
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
