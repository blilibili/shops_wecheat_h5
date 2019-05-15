<template>
  <div class="product-card">
    <div class="seller-name">
      <div class="icon-label">
        <img :src="$props.productObj.logo" alt="">
      </div>
      <div>{{$props.productObj.seller}}</div>
    </div>
    <div class="product-content">
      <div class="product-img">
        <img :src="$props.productObj.productImg" alt="">
      </div>
      <div class="product-info">
        <div style="font-size: 14px;font-weight: bold;">商品名称: {{$props.productObj.proName}}</div>
        <div class="default-word">商品价格: ¥ {{$props.productObj.price}}</div>
        <div class="info-word">商品描述: {{$props.productObj.desc}}</div>
        <div class="default-word count">购买数量: x{{$props.productObj.amount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "card",
        props:{
          productObj:{
            type: Object,
            require: true
          }
        },

        methods:{},
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
  .product-card{
    padding: 10px;
    background-color: white;
    width: 90%;
    margin: 0 auto;
    border-radius: 16px;
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
      justify-content: space-between;
      position: relative;
      .product-img{
        width: 30%;
        background-color: #4f4f4f;
        img{
          opacity: .9;
          width: 100%;
        }
      }
      .product-info{
        width: 66%;
        .count{
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
</style>
