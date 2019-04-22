<template>
    <div class="form-box">
      <div>
        <van-field v-model="formData.mobile" placeholder="请输入手机号" />
      </div>
    </div>
</template>

<script>
    import {requestSetPhone} from '@/api/users/setPhone'
    export default {
        name: "bindMobile",
        data(){
          return {
            formData:{
              mobile:'',
              code:'123456'
            }
          }
        },
        methods:{
          submitMobile(){
            requestSetPhone(this.formData , this).then((res) => {
              console.log(res.data);
            })
          }
        }
    }
</script>

<style scoped lang="scss">
  .form-box{
    background-color: white;
  }
</style>
