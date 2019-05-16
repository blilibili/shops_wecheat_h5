<template>
    <div class="pro-info-page">
      <div class="product-box">
        <div class="pro-title">
          <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3166931255/O1CN01hr1n3v1L8paZVgC8R_!!3166931255.jpg_430x430q90.jpg" alt="">
        </div>
        <div class="price">
          ¥ {{price}}
        </div>
        <div class="pro-name">
          善存 517吃货节
        </div>
        <div class="address-info info-word">
          <div>满69元包邮(1kg内)</div>
          <div>月销量 3823件</div>
          <div>广东广州</div>
        </div>
      </div>

      <div class="coupon-box">
        <div class="coupon">
          <div>
            <span class="info-word">优惠</span>
            <span>店铺优惠券</span>
            <span>领取优惠券</span>
          </div>
          <div class="right">
            <div>领取</div>
            <div class="arrow">
              <img src="../../../../assets/left-arrow.png" alt="">
            </div>
          </div>
        </div>

        <div class="coupon" style="margin-top: 20px">
          <div>
            <span class="info-word">促销</span>
            <span>积分</span>
            <span>购买可得9积分</span>
          </div>
          <div class="right">
            <div></div>
            <div class="arrow">
              <img src="../../../../assets/left-arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>


      <div class="coupon-box">
        <div class="coupon">
          <div>
            <span>香港医网通</span>
          </div>
          <div class="right">
            <div></div>
            <div class="arrow">

            </div>
          </div>
        </div>

        <div class="coupon" style="margin-top: 20px">
          <div>
            <span class="info-word">服务</span>
            <span>假一赔十</span>
            <span>极速退款</span>
          </div>
          <div class="right">
            <div></div>
            <div class="arrow">
              <img src="../../../../assets/left-arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="coupon-box">
        <div class="coupon">
          <div class="info-word">
            <span>选择</span>
          </div>
          <div class="right">
            <div>配送至: 上城区</div>
            <div class="arrow">

            </div>
          </div>
        </div>

        <div class="coupon" style="margin-top: 20px">
          <div>
            <span class="info-word">参数</span>
            <span>不适宜人群...</span>
          </div>
          <div class="right">
            <div></div>
            <div class="arrow">
              <img src="../../../../assets/left-arrow.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="evaluation-box">
        <div class="title">
          <div class="info-word">商品评价(1000)</div>
          <div class="right">
            <div class="info-word">查看全部</div>
            <div class="arrow">
              <img src="../../../../assets/left-arrow.png" alt="">
            </div>
          </div>
        </div>

        <div class="eva-content">
          跟吃糖果那样，酸酸的。因为本仙女很懒，不想没意见商品都一样一样的去写好评，所以特地谢了这样的一个评论
        </div>
        <div class="footer-date info-word">
          2019-05-01
        </div>
      </div>

      <div class="product-content">
        <div class="img-box">
          <img src="https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3166931255/O1CN01hr1n3v1L8paZVgC8R_!!3166931255.jpg_430x430q90.jpg" alt="">
        </div>
      </div>

      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat-o"
          text="客服"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="cart-o"
          text="购物车"
          @click="myCart"
        />
        <van-goods-action-big-btn
          text="加入购物车"
          @click="addInCart"
        />
        <van-goods-action-big-btn
          primary
          text="立即购买"
          @click="onSubmitOrder"
        />
      </van-goods-action>

      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        @add-cart="onAddCartClicked"
      >
        <template slot="sku-actions" slot-scope="props">
          <div style="width: 100%;">
            <van-button type="warning" style="width: 100%;" @click="addIntoCartHandler">确定</van-button>
          </div>
        </template>
      </van-sku>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "info",
        data(){
          return {
            price: 19.9,
            quota:0,
            sku: {
              // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
              // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
              tree: [
                // {
                //   k: '颜色', // skuKeyName：规格类目名称
                //   v: [
                //     {
                //       id: '30349', // skuValueId：规格值 id
                //       name: '红色', // skuValueName：规格值名称
                //       imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                //     },
                //     {
                //       id: '1215',
                //       name: '蓝色',
                //       imgUrl: 'https://img.yzcdn.cn/2.jpg'
                //     }
                //   ],
                //   k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                // }
              ],
              // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
              list: [
                {
                  id: 2259, // skuId，下单时后端需要
                  price: 19.9 * 100, // 价格（单位分）
                  s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                  s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                  s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                  stock_num: 110 // 当前 sku 组合对应的库存
                }
              ],
              price: '1.00', // 默认价格（单位元）
              stock_num: 227, // 商品总库存
              collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
              none_sku: false, // 是否无规格商品
              // messages: [
              //   {
              //     // 商品留言
              //     datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
              //     multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
              //     name: '留言', // 留言名称
              //     type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
              //     required: '1' // 是否必填 '1' 表示必填
              //   }
              // ],
              hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
              // 商品标题
              title: '善存药片',
              // 默认商品 sku 缩略图
              picture: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3166931255/O1CN01hr1n3v1L8paZVgC8R_!!3166931255.jpg_430x430q90.jpg'
            },
            goodsId:'1',
            showBase:false,
          }
        },
        methods:{
          addIntoCartHandler(){
            Toast('已添加到购物车~');
            this.showBase = false
          },
          onClickMiniBtn(){},
          myCart(){
            this.$router.replace('/cart/list')
          },
          addInCart(){
            this.showBase = true
          },
          onSubmitOrder(){
            this.$router.replace('/service/confirm/1')
          },
          onAddCartClicked(){

          }
        }
    }
</script>

<style scoped lang="scss">
  .pro-info-page{
    background-color: rgb(239,239,239);
    padding-bottom: 60px;
    .product-content{
      margin-top: 10px;
      background-color: white;
      .img-box{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .evaluation-box{
      background-color: white;
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 12px;
      .title{
        display: flex;
        justify-content: space-between;
        .right{
          align-items: center;
          display: flex;
          .arrow{
            margin-left: 5px;
            height: 10px;
            img{
              width: 10px;
              height: 10px;
            }
          }
        }
      }
      .eva-content{
        margin-top: 10px;
        text-align: justify;
      }
      .footer-date{
        margin-top: 10px;
      }
    }
    .product-box{
      background-color: white;
      padding-bottom: 10px;
      .pro-title{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .price{
        color: rgb(253,6,58);
        font-weight: bold;
        padding: 10px 0 0 20px;
      }
      .pro-name{
        padding: 10px 0 0 20px;
      }
      .address-info{
        font-size: 12px;
        display: flex;
        padding: 0 20px 0 20px;
        justify-content: space-between;
      }
    }

    .coupon-box{
      background-color: white;
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 12px;
      .coupon{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
          align-items: center;
          display: flex;
          .arrow{
            margin-left: 5px;
            height: 10px;
            img{
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
  }
</style>
