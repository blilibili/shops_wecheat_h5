<template>
  <div class="cart-page">
    <div class="bg-color"></div>
    <div v-if="cartLen" style="position: relative;z-index: 2;">
      <div class="cart-title">
        <div style="font-weight: bold;">购物车</div>
        <div>共74件宝贝</div>
      </div>
      <div class="card-section" :style="index != 0?'margin-top:10px;':''" v-for="(item , index) in cartList">
        <div class="pro-title">
          <div style="display: flex;align-items: center;">
            <span class="shops-icon"><img src="../../../assets/shops.png" alt=""></span>
            {{item.seller_name}}
          </div>
        </div>
        <div class="pro-content" v-if="im.product" v-for="(im , idx) in item.cart" @click="goToProductInfo(im.product.product_id)" >
          <div class="img-controller">
            <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3166931255/O1CN01hr1n3v1L8paZVgC8R_!!3166931255.jpg_430x430q90.jpg" alt="">
          </div>
          <div class="desc-controller">
            <div class="name">
              <div>商品名称</div>
              <div>{{im.product.product_name}}</div>
            </div>
            <div class="desc">
              <div>商品数量</div>
              <div>x{{im.product_number}}</div>
            </div>
            <div class="desc">
              <div>价格</div>
              <div>¥ {{im.product.product_price}}</div>
            </div>
          </div>
        </div>

        <div class="pro-footer" v-if="item.product">
          共{{item.product.length}}件商品 合计: ¥ {{item.product_amount}}
        </div>

        <van-goods-action>
          <van-goods-action-big-btn
            primary
            text="结算"
            @click="goToCal"
          />
        </van-goods-action>
      </div>
    </div>

    <div style="height: 100vh;display:flex;align-items: center;justify-content: center;" v-else>购物车是空的哦</div>
  </div>
</template>

<script>
    import {requestGetCartList} from '@/api/cart/getCartList'
    export default {
        name: "index",
        data(){
          return {
            cartLen:1,
            cartList:[
              {
                seller_name: '阿里大药房',
                cart: [
                  {
                    product:{
                      product_id: 1,
                      product_name: '善存药片',
                      product_price: 19.9,
                      product_amount: 19.9
                    },
                    product_number: 1,
                  }
                ]
              }
            ],
            imageURL:'../../../assets/01.jpg'
          }
        },
        mounted() {
          // requestGetCartList({} , this).then((res) => {
          //   this.cartList = res.data.data;
          //   this.cartLen = res.data.data.length;
          // })
        },
        methods:{
          goToCal(){
            this.$router.replace('/service/confirm/1')
          },
          goToProductInfo(productId){
            this.$router.push('/service/info/' + productId)
          }
        }
    }
</script>

<style scoped lang="scss">
  .bg-color{
    position: absolute;
    background-color: rgb(235,112,45);
    width: 100%;
    height: 27%;
    z-index: 1;
  }
  .cart-page{
    height: 100vh;
    overflow: auto;
    background-color: rgb(239,239,239);
    .cart-title{
      width: 90%;
      margin: 10px auto;
      color: white;
    }
  }
  .card-section{
    width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: 13px;
    .pro-title{
      padding: 0 0 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .pro-content{
      display: flex;
      justify-content: space-between;
      .img-controller{
        width: 45%;
        background: #4f4f4f;
        height: 180px;
        img{
          opacity: .9;
          width: 100%;
          height: 100%;
        }
      }
      .desc-controller{
        width: 50%;
        .name{
          display: flex;
          justify-content: space-between;
        }
        .desc{
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .pro-footer{
      width: 100%;
      text-align: right;
    }
  }


  .shops-icon{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }

</style>
