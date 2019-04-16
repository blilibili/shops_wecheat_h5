<template>
    <div class="cart-root">
      <div style="width: 95%;margin: 0 auto;" v-for="(item , index) in cartList">
        <div>{{item.seller_name}}</div>
        <div v-for="(im , idx) in item.cart">
          <van-card
            :num="im.product_number"
            :price="im.product.product_price"
            desc="这是一个商品"
            :title="im.product.product_name"
            thumb="../../../assets/01.jpg"
          />
        </div>
      </div>
    </div>
</template>

<script>
    import {requestGetCartList} from '@/api/cart/getCartList'
    export default {
        name: "index",
        data(){
          return {
            cartList:[],
            imageURL:'../../../assets/01.jpg'
          }
        },
        mounted() {
          requestGetCartList({} , this).then((res) => {
            this.cartList = res.data.data;
          })
        }
    }
</script>

<style scoped>
  .cart-root{
    background-color: white;
    height: 100vh;
  }
</style>
