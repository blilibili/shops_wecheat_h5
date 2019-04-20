<template>
    <div class="confirm-page">
      <div style="height: 10px;width: 100%;"></div>
      <div class="address-card">
        <div class="address-img">
          <img src="../../../assets/address.png" alt="">
        </div>
        <div class="address-info">
          <div class="name">
            <div style="font-size: 14px;font-weight: bold;">李益钢</div>
            <div class="info-word" style="margin-left: 20px;">13580396632</div>
          </div>
          <div class="default-word">广东省深圳市龙岗区坂田街道南坑村</div>
        </div>
      </div>

      <div class="product-card" style="margin-top: 10px;">
        <div class="seller-name">
          <div class="icon-label">
            <img src="../../../assets/01.jpg" alt="">
          </div>
          <div>{{seller}}</div>
        </div>
        <div class="product-content">
          <div class="product-img">
            <img src="../../../assets/01.jpg" alt="">
          </div>
          <div class="product-info">
            <div style="font-size: 14px;font-weight: bold;">商品名称: {{name}}</div>
            <div class="default-word">商品价格: ¥ {{price}}</div>
            <div class="info-word">商品描述: {{desc}}</div>
            <div class="default-word count">购买数量: x{{amount}}</div>
          </div>
        </div>
      </div>

      <van-submit-bar
        :price="price"
        button-text="提交订单"
        @submit="createOrder"
      />
    </div>
</template>

<script>
    import {requestCreateProOrder} from '@/api/product/createProOrder'
    import {postCallBack} from '@/util/util'
    export default {
        name: "confirm",
        data(){
          return {
            productId:'',
            amount:0,
            price:0,
            name:'',
            desc:'',
            seller:''
          }
        },
        mounted() {
          Object.keys(this.$route.query).forEach((v , k) => {
            if(this.$route.query[v].toString().indexOf('.') != -1){
              this[v] = parseFloat(this.$route.query[v])
            }else{
              this[v] = this.$route.query[v]
            }
          })
          console.log(this.$route.query)
        },
        methods:{
          createOrder(){
            let data = {
              cart_id:'',
              product_id:this.productId,
              amount:this.amount
            };
            requestCreateProOrder(data , this).then((res) => {
              postCallBack(res.data , this , '/order/list')
            })
          },
        }
    }
</script>

<style scoped lang="scss">
  .confirm-page{
    height: 100vh;
    overflow: auto;
  }
  .address-card{
    padding: 10px;
    background-color: white;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .address-img{
      img{
        width: 30px;
        height: 30px;
      }
    }
    .address-info{
      .name{
        display: flex;
        align-items: center;
      }
    }
  }

  .product-card{
    padding: 10px;
    background-color: white;
    width: 90%;
    margin: 0 auto;
    .seller-name{
      display: flex;
      .icon-label{
        margin-right: 10px;
        img{
          width: 20px;
          height: 20px;
        }
      }
    }
    .product-content{
      display: flex;
      justify-content: space-around;
      position: relative;
      .product-img{
        width: 45%;
        background-color: #4f4f4f;
        height: 150px;
        img{
          opacity: .9;
          width: 100%;
          height: 150px;
        }
      }
      .product-info{
        width: 45%;
        .count{
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
</style>
