<template>
  <div class="address-card">
    <div class="address-img">
      <img src="../../assets/address.png" alt="">
    </div>
    <div class="address-info">
      <div class="name">
        <div style="font-size: 14px;font-weight: bold;">{{$props.addressObj.name}}</div>
        <div class="info-word" style="margin-left: 20px;">{{$props.addressObj.phone}}</div>
      </div>
      <div class="default-word">{{$props.addressObj.address}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "address",
        props:{
          addressObj:{
            type: Object,
            require: true
          }
        }
    }
</script>

<style scoped lang="scss">
  .address-card{
    padding: 10px;
    background-color: white;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .address-img{
      img{
        width: 30px;
        height: 30px;
      }
    }
    .address-info{
      .name{
        display: flex;
        align-items: center;
      }
    }
  }
</style>
