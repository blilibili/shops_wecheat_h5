<template>
    <div>
      <router-view/>

      <div class="menu-controller">

        <van-tabbar
          v-model="active"
          active-color="#07c160"
          :safe-area-inset-bottom="true"
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
        methods:{
          matchMenuIcon(href){
            switch (href) {
              case "/home":
                this.active = 0;
                break;
              case "/product":
                this.active = 1;
                break;
              case "/cart":
                this.active = 2;
                break;
              case "/my":
                this.active = 3;
                break;
            }
          }
        },
        mounted(){
          // 匹配导航栏图标
          if(this.$store.state.Users.router == ''){
            let hrefArr = window.location.href.split('/')
            let href = hrefArr[hrefArr.length - 1]
            this.matchMenuIcon("/" + href)
          }else{
            this.matchMenuIcon(this.$store.state.Users.router)
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
