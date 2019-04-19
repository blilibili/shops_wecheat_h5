<template>
    <div>
      <div class="banner-header">
        <img src="../../../assets/01.jpg" alt="">
      </div>
      <div class="pro-desc">
        <div style="color: rgb(232,0,0);">¥ {{proObj.product_price}}</div>
        <div style="font-weight: bold;">{{proObj.product_name}}</div>
      </div>

      <div class="seller-info">
        发货: {{proObj.seller_address}}<br />
        商品限购: {{proObj.order_limit}}件
      </div>

      <div class="seller-info" v-if="proObj.seller">
        商家名: {{proObj.seller.seller_name}}<br/>
        商品描述: {{proObj.describe}}
      </div>

      <div class="seller-info">
        <div style="margin-bottom: 5px;">购买数量: </div>
        <van-stepper v-model="count" />
      </div>

      <van-goods-action>
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="goToMyCart"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="addInCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="createOrder"
        />
      </van-goods-action>
    </div>
</template>

<script>
    import {requestGetProductInfoById} from '@/api/product/getProductInfoById'
    import {requestCreateProOrder} from '@/api/product/createProOrder'
    import {requestAddToCart} from '@/api/cart/addToCart'
    export default {
        name: "info",
        data(){
          return {
            proObj:{},
            count:1
          }
        },
        mounted() {
          let proId = this.$route.query.proId
          requestGetProductInfoById({id:proId} , this).then((res) => {
            this.proObj = res.data.data
          }).catch((err) => {
            console.log(err)
          })
        },
        methods:{
          createOrder(){
            let data = {
              cart_id:'',
              product_id:this.proObj.product_id,
              amount:this.count
            };
            requestCreateProOrder(data , this).then((res) => {
              if(res.data.state == 200){
                this.$toast(res.data.msg)
                this.$router.replace('/home')
              }else{
                this.$toast(res.data.msg)
              }
            })
          },
          addInCart(){
            let postData = {
              product_id:this.proObj.product_id,
              amount:this.count
            };
            requestAddToCart(postData , this).then((res) => {
              if(res.data.state == 200){
                this.$toast(res.data.msg)
                this.$router.replace('/home')
              }else{
                this.$toast(res.data.msg)
              }
            })
          },
          goToMyCart(){}
        }
    }
</script>

<style scoped lang="scss">
  .banner-header{
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #f9f9f9;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .pro-desc{
    padding: 10px;
    font-size: 13px;
    background-color: white;
  }
  .seller-info{
    padding: 10px;
    font-size: 13px;
    background-color: white;
    margin-top: 10px;
  }
</style>
