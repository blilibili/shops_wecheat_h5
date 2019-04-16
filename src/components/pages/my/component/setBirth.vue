<template>
    <div>
      <van-datetime-picker
        v-model="birth"
        type="date"
        @confirm="setBirthHandler"
      />
    </div>
</template>

<script>
    export default {
        name: "setBirth",
        data(){
          return {
            birth:''
          }
        },
        methods:{
          setBirthHandler(){

          }
        }
    }
</script>

<style scoped>

</style>
