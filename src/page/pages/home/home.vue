<template>
    <div class="home-page">
      <van-nav-bar
        left-text="医疗美容商城"
        :right-text="nickname == ''? '登录' : nickname"
      />

      <div class="container-box">
        <div style="margin: 20px 0;font-size: 22px;">新品推荐</div>
        <div class="img-controller">
          <div style="background-color: #4f4f4f;">
            <img style="opacity: 0.9;" src="@/assets/01.jpg" alt="" @click="goToProductInfo('1')">
          </div>
          <div style="background-color: #4f4f4f;">
            <img style="opacity: 0.9;" src="@/assets/02.jpg" alt="" @click="goToProductInfo('2')">
          </div>
        </div>
      </div>

      <div class="container-box">
        <div style="margin: 20px 0;font-size: 22px;">为你推荐</div>
        <div class="img-controller">
          <div style="background-color: #4f4f4f;">
            <img style="opacity: 0.9;" src="@/assets/01.jpg" alt="" @click="goToProductInfo('1')">
          </div>
          <div style="background-color: #4f4f4f;">
            <img style="opacity: 0.9;" src="@/assets/02.jpg" alt="" @click="goToProductInfo('2')">
          </div>
        </div>
      </div>

      <div class="plus-button">

      </div>

      <van-dialog
        v-model="isShowBindMobile"
        title="绑定手机"
        show-cancel-button
        @confirm="submitMobile"
      >
        <div>
          <van-field v-model="formData.mobile" placeholder="请输入手机号" />
        </div>
      </van-dialog>
    </div>
</template>

<script>
    import {GetUrlParam} from '@/util/util'
    import {requestGetUserInfo} from '@/api/users/getUserInfo'
    import { Toast } from 'vant';
    import store from '@/store/store'
    import bindMobile from './bindMobile'
    import {requestSetPhone} from '@/api/users/setPhone'
    export default {
        name: "home",
        data(){
          return {
            code:'',
            nickname: '',
            isShowBindMobile: false,
            formData:{
              mobile:'',
              code:'123456'
            }
          }
        },

        mounted(){
          if(window.localStorage.getItem('nickname') == '' || window.localStorage.getItem('nickname') == undefined){
            this.getMyCode();
            if(GetUrlParam('code')){
              Toast.loading({
                mask: true,
                message: '加载中...',
                duration:0
              });
              let data = {
                code: this.code
              };

              requestGetUserInfo(data , this).then((res) => {

                Toast.clear();
                window.localStorage.setItem('nickname' , res.data.data.nickname);
                window.localStorage.setItem('token' , 'Bearer ' + res.data.data.token);
                this.nickname = res.data.data.nickname;
                if(res.data.data.mobile == null){
                  this.isShowBindMobile = true;
                  window.localStorage.setItem('isBindPhone' , '0');
                }else{
                  window.localStorage.setItem('isBindPhone' , '1');
                }
                window.location.href = '/';
                //store.dispatch('setUserNickname' , res.data.data.nickname);
              })
            }else{
              this.loginHandler()
            }
          }else{
            if(window.localStorage.getItem('isBindPhone') == '0'){
              this.isShowBindMobile = true;
            }
            this.nickname = window.localStorage.getItem('nickname')
          }
        },
        methods:{
          loginHandler(){
            let redirect = 'weishao.natapp1.cc';
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx291b9c4a172880af&redirect_uri=http%3A%2F%2F'+ redirect +'%2F%23%2Fhome&response_type=code&scope=snsapi_userinfo&state=wsy#wechat_redirect';
          },
          getMyCode(){
            this.code = GetUrlParam('code');
          },
          submitMobile(){
            requestSetPhone(this.formData , this).then((res) => {
              if(res.data.state == 200){
                window.localStorage.setItem('isBindPhone' , '1');
              }else{
                Toast(res.data.msg);
              }
            })
          },
          goToProductInfo(proId){
            this.$router.push('/product/info?proId=' + proId)
          }
        },
        components:{
          bindMobile
        }
    }
</script>

<style scoped lang="scss">
    .home-page{
      height: 100vh;
    }
    .container-box{
      text-align: center;
      .img-controller{
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        div{
          &:not(:first-child){
            margin-left: 10px;
          }
          width: 100px;
          height: 100px;
          img{
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  .plus-button{
    position: fixed;
    right: 3em;
    bottom: 5em;
  }
</style>
