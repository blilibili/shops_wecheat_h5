<template>
    <div>
      <mt-header title="医疗美容商城">
        <mt-button v-if="nickname == ''" size="small" slot="right" type="default" @click="loginHandler">登录</mt-button>
        <mt-button v-else size="small" slot="right" type="default">{{nickname}}</mt-button>
      </mt-header>

      <div class="container-box">
        <div style="margin: 20px 0;font-size: 22px;">新品推荐</div>
        <div class="img-controller">
          <img src="@/assets/01.jpg" alt="">
          <img src="@/assets/02.jpg" alt="">
          <img src="@/assets/03.jpg" alt="">
        </div>
      </div>

      <div class="container-box">
        <div style="margin: 20px 0;font-size: 22px;">为你推荐</div>
        <div class="img-controller">
          <img src="@/assets/01.jpg" alt="">
          <img src="@/assets/02.jpg" alt="">
          <img src="@/assets/03.jpg" alt="">
        </div>
      </div>

      <div class="plus-button">
        <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
                           direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
                           style="left:30px;">
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
          <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        </mt-palette-button>
      </div>
    </div>
</template>

<script>
    import {GetUrlParam} from '@/util/util'
    import {requestGetUserInfo} from '@/api/getUserInfo'
    import { Indicator } from 'mint-ui';
    import store from '@/store/store'
    export default {
        name: "home",
        data(){
          return {
            code:'',
            nickname: ''
          }
        },

        mounted(){
          if(window.localStorage.getItem('nickname') == '' || window.localStorage.getItem('nickname') == undefined){
            this.getMyCode();
            if(GetUrlParam('code')){
              Indicator.open({
                text: '加载中...',
                spinnerType: 'snake'
              });
              let data = {
                code: this.code
              };
              console.log(1);
              requestGetUserInfo(data , this).then((res) => {
                console.log(res.data);
                Indicator.close();

                window.localStorage.setItem('nickname' , res.data.data.nickname);
                this.nickname = res.data.data.nickname;
                //store.dispatch('setUserNickname' , res.data.data.nickname);
              })
            }else{
              this.loginHandler()
            }
          }else{
            this.nickname = window.localStorage.getItem('nickname')
          }
        },
        methods:{
          loginHandler(){
            let redirect = 'o1967s9517.iok.la'
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx291b9c4a172880af&redirect_uri=http%3A%2F%2F'+ redirect +'%2F%23%2Fhome&response_type=code&scope=snsapi_userinfo&state=wsy#wechat_redirect';
          },
          getMyCode(){
            this.code = GetUrlParam('code');
          }
        }
    }
</script>

<style scoped lang="scss">
    .container-box{
      text-align: center;
      .img-controller{
        display: flex;
        justify-content: space-between;
        img{
          width: 100px;
          height: 100px;
        }
      }
    }
  .plus-button{
    position: fixed;
    right: 3em;
    bottom: 5em;
  }
</style>
