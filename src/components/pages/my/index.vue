<template>
    <div style="height: 100vh;overflow: auto;">
      <div>
        <van-nav-bar
          title="我的"
        />
      </div>

      <div class="row-controller">
        <div class="block">
          头像:
        </div>
        <div>
          <img :src="myAva" alt="" style="width: 50px;height: 50px;">
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller">
        <div class="block">
          中文名:
        </div>
        <div>
          {{nickname}}
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller">
        <div class="block">
          英文名:
        </div>
        <div>
          {{nickEnName}}
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller">
        <div class="block">
          性别:
        </div>
        <div>
          {{sex == 0 ? '男' : '女'}}
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller">
        <div class="block">
          年龄:
        </div>
        <div>
          {{years}}
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller">
        <div class="block">
          手机号码:
        </div>
        <div>
          {{phone}}
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller" @click="goToMyAddress">
        <div class="block">
          我的收货地址
        </div>
        <div>
          <img src="../../../assets/right-arrow.png" style="height: 20px;width: 20px;" alt="">
        </div>
      </div>

      <div class="line"></div>

      <div class="row-controller" @click="goToMyOrder">
        <div class="block">
          我的订单
        </div>
        <div>
          <img src="../../../assets/right-arrow.png" style="height: 20px;width: 20px;" alt="">
        </div>
      </div>

      <div style="margin-top: 20px;width: 100%;text-align: center;padding-bottom: 60px;">
        <van-button hairline type="default" @click="goToUpdateInfo">去完善信息</van-button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            nickname:window.localStorage.getItem('nickname') || '',
            nickEnName:'',
            myAva:'http://94.191.74.232/uploads/img/user/20190412/d942e76b9ee2e2782a377c7c502341cb.jpg',
            sex:0,
            years:25,
            phone:'13580396632'
          }
        },
        mounted() {
          this.initData();
        },
        methods:{
          initData(){
            this.nickname = window.localStorage.getItem('nickname') || ''
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
  background-color: white;
}
</style>
