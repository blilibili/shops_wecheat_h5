<template>
    <div class="goods-page">
      <div style="width: 100%;height: 10px;"></div>
      <div class="goods-controller" @click="goToGoodsInfo(item.product_id)" :style="index != 0?'margin-top:10px;':''" v-for="(item , index) in goodsList.data">
        <div class="goods-img">
          <img src="../../../assets/01.jpg" alt="">
        </div>
        <div class="goods-desc">
          <div class="title">{{item.product_name}}</div>
          <div class="desc">
            <div style="color: rgb(232,0,0);">¥{{item.product_price}}</div>
            <div>
              {{item.seller.seller_name}}
              <span style="margin-left: 10px;">销量: {{item.sales}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {requestGetProductList} from '@/api/product/getProductList'
    export default {
        name: "index",
        data(){
          return {
            searchForm:{
              page:1,
              limit:10
            },
            goodsList:{}
          }
        },
        mounted(){
          this.getProductList();
        },
        methods:{
          getProductList(){
            requestGetProductList(this.searchForm , this).then((res) => {
              this.goodsList = res.data.data
            })
          },
          goToGoodsInfo(goodsId){
            this.$router.push('/product/info?proId=' + goodsId)
          }
        }
    }
</script>

<style scoped lang="scss">
  .goods-page{
    height: 100vh;
    overflow: auto;
  }
  .goods-controller{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    .goods-img{
      background-color: #4f4f4f;
      width: 9rem;
      height: 105px;
      img{
        opacity: .9;
        width: 100%;
        height: 100%;
      }
    }
    .goods-desc{
      width: 11rem;
      .desc{
        margin-top: 1.6rem;
        font-size: 14px;
      }
    }
  }
</style>
