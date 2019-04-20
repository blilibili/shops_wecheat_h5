<template>
    <div class="address-list-page">
      <div v-if="!isShowAddressForm">
        <div v-if="addressList.total != 0">
          <van-collapse v-model="actives">
            <van-collapse-item :title="item.province + '-' + item.city + '-' + item.area" :name="index" v-for="(item , index) in addressList.data">
              <div class="address-label">
                <div>收货人:</div>
                <div>{{item.name}}</div>
              </div>
              <div class="address-label">
                <div>手机号:</div>
                <div>{{item.mobile}}</div>
              </div>
              <div class="address-label">
                <div>省份:</div>
                <div>{{item.province}}</div>
              </div>
              <div class="address-label">
                <div>市:</div>
                <div>{{item.city}}</div>
              </div>
              <div class="address-label">
                <div>区:</div>
                <div>{{item.area}}</div>
              </div>
              <div class="address-label">
                <div>邮编:</div>
                <div>{{item.zip_code}}</div>
              </div>

              <div class="address-label">
                <div>操作:</div>
                <div>
                  <van-button hairline size="small" type="default" @click="setMyDefaultAddress(item.address_id)">设置为默认地址</van-button>
                  <van-button hairline size="small" type="default" @click="updateMyAddress(item.address_id)">修改地址</van-button>
                  <van-button hairline size="small" type="default" @click="delMyAddress(item.address_id)">删除地址</van-button>
                </div>
              </div>

            </van-collapse-item>
          </van-collapse>

          <div style="text-align: center;padding: 20px 0;">
            <van-button hairline type="default" @click="goToUpdateAddress">新增地址</van-button>
          </div>

        </div>

        <div v-else style="text-align: center;">
          <div style="padding: 20px 0;text-align: center;">
            没有收货地址, 请去绑定地址
          </div>

          <van-button hairline type="default" @click="goToUpdateAddress">完善地址</van-button>
        </div>
      </div>
      <div v-else>
        <AddressForm :addressModel="addressObj" @setAddressInfo="setAddressCallback" />
      </div>
    </div>
</template>

<script>
    import {requestGetAddressList} from '@/api/users/getAddressList'
    import {requestSetUserAddress} from '@/api/users/setUserAddress'
    import {requestSetDefaultAddress} from '@/api/users/setDefaultAddress'
    import {requestGetAddressInfoById} from '@/api/users/getAddressInfoById'
    import {requestGetDelDressInfoById} from '@/api/users/delAddressInfoById'
    import { Toast } from 'vant';
    import AddressForm from './addressForm'
    import {postCallBack} from '@/util/util'
    export default {
        name: "list",
        data(){
          return {
            addressObj:{},
            actives:['1'],
            addressList:[],
            queryData:{
              page:1,
              limit:10
            },
            isShowAddressForm:false
          }
        },
        mounted() {
          this.getAddressList();
        },
        methods:{
          setMyDefaultAddress(id){
            let postData = {
              address_id: id
            }
            requestSetDefaultAddress(postData , this).then((res) => {
              postCallBack(res.data , this)
            })
          },
          delMyAddress(id){
            let data = {
              address_id: id
            }
            requestGetDelDressInfoById(data , this).then((res) => {
              if(res.data.state == 200){
                Toast(res.data.msg);
                this.getAddressList();
                this.isShowAddressForm = false;
              }else{
                Toast(res.data.msg);
              }
            })
          },
          updateMyAddress(id){
            let data = {
              address_id: id
            }
            requestGetAddressInfoById(data , this).then((res) => {
              this.addressObj = res.data.data
              this.isShowAddressForm = true
            })
          },
          getAddressList(){
            requestGetAddressList(this.queryData , this).then((res) => {
              this.addressList = res.data.data;
            })
          },
          goToUpdateAddress(){
            this.isShowAddressForm = true
          },
          setAddressCallback(msg){
            requestSetUserAddress(msg , this).then((res) => {
              if(res.data.state == 200){
                Toast(res.data.msg);
                this.getAddressList();
                this.isShowAddressForm = false;
              }else{
                Toast(res.data.msg);
              }
            })
          },
          addNewAddress(){

          }
        },
        components:{
          AddressForm
        },
        destroyed() {
          this.isShowAddressForm = false
        }
    }
</script>

<style scoped lang="scss">
  .address-list-page{
    height: 100vh;
    overflow: auto;
  }
  .row-controller{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: white;
  }
  .address-label{
    display: flex;
    justify-content: space-between;
    line-height: 2.33333;
  }
</style>
