<template>
    <div style="height: 100vh;overflow: auto;" class="my-page">
      <div>
<!--        <van-nav-bar-->
<!--          title="我的"-->
<!--        />-->
      </div>

      <div class="ava-box">
        <div class="ava">
          <div class="ava-img">
            <img :src="myAva" alt="" style="width: 50px;height: 50px;">
          </div>
          <div class="name">
            {{nickname}}
          </div>
        </div>
      </div>

      <div class="menu-box">
        <div class="collection">
          <div class="number">0</div>
          <div>收藏</div>
        </div>
        <div class="history">
          <div class="number">1</div>
          <div>浏览历史</div>
        </div>
        <div class="red-packet">
          <div class="number">3</div>
          <div>红包卡券</div>
        </div>
        <div class="cart">
          <div class="number">4</div>
          <div>购物车</div>
        </div>
      </div>

      <div class="card-box">
        <div class="title">
          <div class="left">我的订单</div>
          <div class="right">全部订单 > </div>
        </div>
        <div class="content">
          <van-row type="flex" justify="center">
            <van-col span="6" style="text-align: center;">
              <div>
                <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
              </div>
              <div class="label">待付款</div>
            </van-col>
            <van-col span="6" style="text-align: center;">
              <div>
                <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
              </div>
              <div class="label">处理中</div>
            </van-col>
            <van-col span="6" style="text-align: center;">
              <div>
                <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
              </div>
              <div class="label">待出行</div>
            </van-col>
            <van-col span="6" style="text-align: center;">
              <div>
                <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
              </div>
              <div class="label">待评价</div>
            </van-col>
            <van-col span="6" style="text-align: center;">
              <div>
                <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
              </div>
              <div class="label">退款售后</div>
            </van-col>
          </van-row>
        </div>
      </div>


      <div class="nav-controller" style="margin-top: 10px;">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>我的预约</div>
        </div>
        <div class="right">
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

      <div class="nav-controller" style="margin-top: 10px;">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>我的分享</div>
        </div>
        <div class="right">
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

      <div class="nav-controller" style="margin-top: 10px;">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>我的评价</div>
        </div>
        <div class="right">
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

      <div class="nav-controller">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>意见反馈</div>
        </div>
        <div class="right">
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

      <div class="nav-controller">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>联系客户</div>
        </div>
        <div class="right">
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

      <div class="nav-controller" style="margin-bottom: 60px;">
        <div class="left">
          <div>
            <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
          </div>
          <div>邀请好友</div>
        </div>
        <div class="right">
          <span>得奖励</span>
          <img src="../../../assets/left-arrow.png" alt="">
        </div>
      </div>

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          头像:-->
<!--        </div>-->
<!--        <div>-->
<!--          <img :src="myAva" alt="" style="width: 50px;height: 50px;">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          中文名:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{nickname}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          英文名:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{name_en}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          性别:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{sex == 0 ? '男' : '女'}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--&lt;!&ndash;      <div class="row-controller">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="block">&ndash;&gt;-->
<!--&lt;!&ndash;          年龄:&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div>&ndash;&gt;-->
<!--&lt;!&ndash;          {{years}}&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          手机号码:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{phone}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          邮箱:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{email}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller">-->
<!--        <div class="block">-->
<!--          生日:-->
<!--        </div>-->
<!--        <div>-->
<!--          {{birth}}-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller" @click="goToMyAddress">-->
<!--        <div class="block">-->
<!--          我的收货地址-->
<!--        </div>-->
<!--        <div>-->
<!--          <img src="../../../assets/right-arrow.png" style="height: 20px;width: 20px;" alt="">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="line"></div>-->

<!--      <div class="row-controller" @click="goToMyOrder">-->
<!--        <div class="block">-->
<!--          我的订单-->
<!--        </div>-->
<!--        <div>-->
<!--          <img src="../../../assets/right-arrow.png" style="height: 20px;width: 20px;" alt="">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div style="margin-top: 20px;width: 100%;text-align: center;padding-bottom: 60px;">-->
<!--        <van-button hairline type="default" @click="goToUpdateInfo">去完善信息</van-button>-->
<!--      </div>-->

    </div>
</template>

<script>
    import {requestGetMemberInfo} from '@/api/users/getMemberInfo'
    export default {
        name: "index",
        data(){
          return {
            nickname:window.localStorage.getItem('nickname') || '',
            name_en:'',
            myAva:'http://94.191.74.232/uploads/img/user/20190412/d942e76b9ee2e2782a377c7c502341cb.jpg',
            sex:0,
            years:25,
            phone:'13580396632',
            email:'',
            wechat:'',
            birth:''
          }
        },
        mounted() {
          this.initData();
        },
        methods:{
          initData(){
            this.nickname = window.localStorage.getItem('nickname') || ''
            // requestGetMemberInfo({} , this).then((res) => {
            //   this.name_en = res.data.data.name_en
            //   this.sex = res.data.data.sex
            //   this.email = res.data.data.email
            //   this.birth = res.data.data.birthday
            // })
          },
          goToUpdateInfo(){
            this.$router.push('/customerinfo')
          },
          goToMyAddress(){
            this.$router.push('/address/list');
          },
          goToMyOrder(){
            this.$router.push('/order/list');
          }
        }
    }
</script>

<style scoped lang="scss">
.row-controller{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.my-page{
  background-color: rgb(254,249,244);
}
  .ava-box{
    width: 100%;
    height: 300px;
    background-color: #4f4f4f;
    display: flex;
    align-items: center;
    justify-content: center;
    .ava{
      text-align: center;
      .ava-img{
        img{
          border-radius: 25px;
        }
      }
      .name{
        margin-top: 20px;
      }
    }
  }
  .menu-box{
    width: 95%;
    margin: 10px auto 0 auto;
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    .collection , .history , .red-packet ,.cart{
      text-align: center;
      .number{
        font-weight: bold;
      }
    }
  }

  .card-box{
    width: 90%;
    margin: 10px auto 0 auto;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    .title{
      display: flex;
      justify-content: space-between;
      .left{
        font-size: 13px;
        font-weight: bold;
      }
      .right{
        font-size: 12px;
        color: rgb(181,181,181);
      }
    }
    .content{
      margin-top: 20px;
      .label{
        font-size: 13px;
      }
    }
  }

  .nav-controller{
    font-size: 13px;
    padding: 10px 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
    }
    .right{
      img{
        width: 10px;
        height: 10px;
      }
    }
  }
</style>
