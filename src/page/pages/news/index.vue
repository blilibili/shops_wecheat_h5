<template>
    <div class="goods-page">
      <van-search placeholder="请输入搜索关键词" v-model="searchName" />

      <div>
        <van-tabs>
          <van-tab title="热点">
            <div class="article-box">
              <div class="img">
                <img src="../../../assets/01.jpg" alt="">
              </div>
              <div class="content">
                <div class="title">
                  孩子被打不敢还手，还说自己很勇敢！为什么这些孩子可怜
                </div>
                <div class="type">
                  <div>
                    <span>育儿</span>
                    <span>一小时前</span>
                  </div>
                  <div>
                    <span>阅读274</span>
                    <span>赞1</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="article-box">
              <div class="img">
                <img src="../../../assets/01.jpg" alt="">
              </div>
              <div class="content">
                <div class="title">
                  孩子被打不敢还手，还说自己很勇敢！为什么这些孩子可怜
                </div>
                <div class="type">
                  <div>
                    <span>育儿</span>
                    <span>一小时前</span>
                  </div>
                  <div class="bottom">
                    <span>阅读274</span>
                    <span>赞1</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
            <div class="article-box">
              <div class="img">
                <img src="../../../assets/01.jpg" alt="">
              </div>
              <div class="content">
                <div class="title">
                  孩子被打不敢还手，还说自己很勇敢！为什么这些孩子可怜
                </div>
                <div class="type">
                  <div>
                    <span>育儿</span>
                    <span>一小时前</span>
                  </div>
                  <div class="bottom">
                    <span>阅读274</span>
                    <span>赞1</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </van-tab>
          <van-tab title="话题">
            话题
          </van-tab>
          <van-tab title="生活">
            生活
          </van-tab>
          <van-tab title="男性">
            男性
          </van-tab>
          <van-tab title="两性">
            两性
          </van-tab>
          <van-tab title="辟谣">
            辟谣
          </van-tab>
          <van-tab title="减肥">
            减肥
          </van-tab>
          <van-tab title="女性">
            女性
          </van-tab>
        </van-tabs>
      </div>
    </div>
</template>

<script>
    import {requestGetProductList} from '@/api/product/getProductList'
    export default {
        name: "index",
        data(){
          return {
            searchName:'',
            searchForm:{
              page:1,
              limit:10
            },
            goodsList:{}
          }
        },
        mounted(){
          // this.getProductList();
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
  .article-box{
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    .img{
      width: 20%;
      img{
        width: 100%;
      }
    }
    .content{
      width: 75%;
      margin-left: 5%;
      position: relative;
      .title{
        font-size: 14px;
      }
      .type{
        font-size: 12px;
        color: rgb(190,190,190);
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
  }
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
