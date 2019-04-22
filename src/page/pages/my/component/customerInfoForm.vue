<template>
    <div>
      <van-cell-group v-show="!queryButtonStatus">
        <van-field
          v-model="submitForm.name_cn"
          required
          clearable
          label="昵称"
          right-icon="question-o"
          placeholder="请输入昵称"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="submitForm.name_en"
          label="英文名"
          placeholder="请输入英文名"
        />

        <van-field
          v-model="submitForm.sex == 0 ? '男' : '女'"
          label="性别"
          placeholder="请选择性别"
          @click="showThisController('showSetSexButton')"
        />

        <van-field
          v-model="submitForm.birthday"
          label="生日"
          placeholder="请选择生日"
          @click="showThisController('showSetBirthButton')"
          required
        />

        <van-field
          v-model="submitForm.id_number"
          label="身份证"
          placeholder="请输入身份证"
          required
        />

        <van-field
          v-model="submitForm.pass_number"
          label="通行证"
          placeholder="请输入通行证"
        />

        <van-field
          v-model="submitForm.email"
          label="邮箱"
          placeholder="请输入邮箱"
        />


        <van-field
          v-model="submitForm.wechat"
          label="微信号"
          placeholder="请输入微信号"
        />

        <van-field
          v-model="submitForm.address"
          label="地址"
          placeholder="请输入地址"
        />


      </van-cell-group>

      <div class="float-bottom-btn">
        <van-button hairline type="default" @click="submitCustomerInfo">提交信息</van-button>
      </div>


      <div v-if="showSetBirthButton" style="position: fixed;top: 0;left: 0;z-index: 100;width: 100%;">
        <van-datetime-picker
          v-model="birthController"
          type="date"
          @confirm="setBirthHandler"
          @cancel="cancelHandler"
        />
      </div>

      <div v-if="showSetSexButton">
        <van-picker :columns="sexCol" value-key="label"  @cancel="cancelSexHandler" @confirm="setSexHandler" show-toolbar />
      </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {formatDateTime} from '@/util/util'
    import {requestSetUserInfo} from '@/api/users/setUserInfo'
    import {requestGetMemberInfo} from '@/api/users/getMemberInfo'
    export default {
        name: "customerInfoForm",
        data(){
          return {
            birthController: new Date(),
            submitForm:{
              name_cn:'',
              name_en:'',
              sex:0,
              birthday:'',
              id_number:'',
              pass_number:'',
              email:'',
              wechat:'',
              address:''
            },
            showSetBirthButton:false,
            showSetSexButton:false,
            sexCol:[
              {
                label:'男',
                value:0
              },
              {
                label:'女',
                value:1
              }
            ]
          }
        },
        computed:{
          queryButtonStatus(){
            return this.showSetBirthButton || this.showSetSexButton
          }
        },
        mounted(){
          requestGetMemberInfo({} , this).then((res) => {
            Object.keys(this.submitForm).forEach((v , k) => {
              if(v == 'birthday'){
                this.submitForm[v] = formatDateTime(res.data.data[v] , 'day')
              }else{
                this.submitForm[v] = res.data.data[v]
              }
            })
          })
        },
        methods:{
          showThisController(controllerName){
            this[controllerName] = true
          },
          setBirthHandler(){
            let times = new Date(this.birthController).getTime()
            this.submitForm.birthday = formatDateTime(times , 'day')
            this.showSetBirthButton = false
          },
          setSexHandler(val){
            this.submitForm.sex = val.value
            this.showSetSexButton = false
          },
          cancelSexHandler(){
            this.showSetSexButton = false
          },
          cancelHandler(){
            this.showSetBirthButton = false
          },
          submitCustomerInfo(){
            requestSetUserInfo(this.submitForm , this).then((res) => {
              if(res.data.state == 200){
                Toast(res.data.msg);
                this.$router.replace('/my');
              }else{
                Toast(res.data.msg);
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
