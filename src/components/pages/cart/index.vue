<template>
  <div class="cart-page">
    <div v-if="cartLen">
      <div style="width: 100%;height: 10px;"></div>
      <div class="card-section" :style="index != 0?'margin-top:10px;':''" v-for="(item , index) in cartList">
        <div class="pro-title">
          <div style="display: flex;align-items: center;">
            <span class="shops-icon"><img src="../../../assets/shops.png" alt=""></span>
            {{item.seller_name}}
          </div>
        </div>
        <div class="pro-content" v-for="(im , idx) in item.cart">
          <div class="img-controller">
            <img src="../../../assets/01.jpg" alt="">
          </div>
          <div class="desc-controller" v-if="im.product">
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
            cartLen:0,
            cartList:[],
            imageURL:'../../../assets/01.jpg'
          }
        },
        mounted() {
          requestGetCartList({} , this).then((res) => {
            console.log(res.data)
            this.cartList = res.data.data;
            this.cartLen = res.data.data.length;
          })
        }
    }
</script>

<style scoped lang="scss">
  .cart-page{
    height: 100vh;
    overflow: auto;
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
