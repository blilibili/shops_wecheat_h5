<template>
    <div class="home-page">

      <div class="container-box">

        <van-search placeholder="请输入搜索关键词" v-model="searchName" />

        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" style="width:100%;" />
          </van-swipe-item>
        </van-swipe>

        <div class="desc-box">
          <div class="left">
            <div>eMedinet 香港一站式医疗服务平台</div>
            <div style="display: flex;justify-content: space-around;margin-top: 10px;">
              <div class="bg-label">专业</div>
              <div class="bg-label">可靠</div>
              <div class="bg-label">高效</div>
            </div>
          </div>
          <div class="right">
            <div>十万用户</div>
            <div style="margin-top: 5px;">信息之选</div>
          </div>
        </div>

        <div class="line"></div>


        <div class="menu-button-list">
          <div class="top">
            <van-row type="flex" justify="center">
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>优越体验</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>基因筛查</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>香港专科</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>疫苗注射</div>
              </van-col>
            </van-row>
          </div>

          <div class="bottom">
            <van-row type="flex" justify="center">
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>医学美容</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>优生优育</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>美颜护理</div>
              </van-col>
              <van-col span="6">
                <div>
                  <img style="width: 50px;height: 50px;" src="../../../assets/test-ui.png" alt="">
                </div>
                <div>营养保健</div>
              </van-col>
            </van-row>
          </div>
        </div>

        <div class="news-panel">
          <van-notice-bar :scrollable="false" color="black">
            <span style="font-size: 14px;font-weight: bold;">今日头条</span>
            <span style="padding: 5px;background-color: rgb(153,153,153);">疫苗</span>
            <span>海南一家医院被曝光海南一家医院被曝光</span>
          </van-notice-bar>
        </div>


        <div class="poster-box">
          <img src="http://img2.dwstatic.com/www/1905/421241554221/1557299312156.jpg" style="width: 100%;" alt="">
        </div>

        <descPanel
          title="新人福利"
          info="测试"
          :descArr="descArr"
          panelColor="#FF6766"
        />

        <descPanel
          style="margin-top: 10px;"
          title="优越体验套餐"
          info=""
          :descArr="descArr"
          panelColor="#673301"
        />

        <descPanel
          style="margin-top: 10px;"
          title="找香港医生"
          info=""
          :descArr="descArr"
          panelColor="#993401"
          @control1="test1"
        />

        <div class="home-footer">
          <div class="top">香港医网通 eMedinet</div>
          <div class="bottom">一站式香港本土医疗平台</div>
        </div>
      </div>

<!--      <div class="container-box">-->
<!--        <div style="margin: 20px 0;font-size: 22px;">为你推荐</div>-->
<!--        <div class="img-controller">-->
<!--          <div style="background-color: #4f4f4f;">-->
<!--            <img style="opacity: 0.9;" src="@/assets/01.jpg" alt="" @click="goToProductInfo('1')">-->
<!--          </div>-->
<!--          <div style="background-color: #4f4f4f;">-->
<!--            <img style="opacity: 0.9;" src="@/assets/02.jpg" alt="" @click="goToProductInfo('2')">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="plus-button">-->

<!--      </div>-->

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
    import descPanel from './component/descPanel'
    import {requestSetPhone} from '@/api/users/setPhone'
    export default {
        name: "home",
        data(){
          return {
            descArr:[
              {
                src: '../../../../../assets/test-ui/png',
                desc: '价格/描述',
                emitName: 'control1'
              },
              {
                src: '@/assets/test-ui/png',
                desc: '价格/描述',
                emitName: 'control2'
              },
              {
                src: '@/assets/test-ui/png',
                desc: '价格/描述',
                emitName: 'control3'
              }
            ],
            code:'',
            nickname: '',
            isShowBindMobile: false,
            formData:{
              mobile:'',
              code:'123456'
            },
            searchName:'',
            images:['https://img.yzcdn.cn/2.jpg' , 'https://img.yzcdn.cn/2.jpg']
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
          test1(row){
            console.log(row)
          },
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
          bindMobile,
          descPanel
        }
    }
</script>

<style scoped lang="scss">
    .home-page{
      height: 100vh;
    }
    .container-box{
      text-align: center;
      padding-bottom: 50px;
      .desc-box{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        padding-bottom: 20px;
        align-items: center;
      }
      .menu-button-list{
        font-size: 13px;
        .bottom{
          margin-top: 10px;
        }
      }

      .news-panel{
        margin-top: 20px;
      }

      .poster-box{
        margin-top: 5px;
      }

      .home-footer{
        padding: 10px 0;
        text-align: center;
        background-color: black;
        text-align: center;
        color: white;
        .top{
          font-weight: bold;
        }
        .bottom{
          margin-top: 10px;
        }
      }

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
