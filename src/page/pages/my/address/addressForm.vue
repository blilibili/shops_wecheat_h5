<template>
    <div>
      <van-cell-group>
        <van-field
          v-model="addressForm.name"
          required
          clearable
          label="收货人"
          placeholder="请输入收货人"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.mobile"
          required
          clearable
          label="电话"
          placeholder="请输入电话"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.province"
          required
          clearable
          label="省份"
          placeholder="请输入省份"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.city"
          required
          clearable
          label="市"
          placeholder="请输入市"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.area"
          clearable
          label="区"
          placeholder="请输入区"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.detail"
          required
          clearable
          label="地址"
          placeholder="请输入地址"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="addressForm.zip_code"
          clearable
          label="邮编"
          placeholder="请输入邮编"
          @click-right-icon="$toast('question')"
        />

      </van-cell-group>

      <div class="float-bottom-btn">
        <van-button hairline type="default" @click="submitCustomerInfo">提交信息</van-button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "addressForm",
        props:['addressModel'],
        data(){
          return {
            addressForm:{
              name:'',
              mobile:'',
              province:'',
              city:'',
              area:'',
              detail:'',
              zip_code:''
            },
            areaList:''
          }
        },
        mounted(){
          this.addressForm = this.$props.addressModel
        },
        methods:{
          submitCustomerInfo(){
            this.$emit('setAddressInfo' , this.addressForm)
          }
        }
    }
</script>

<style scoped>

</style>
