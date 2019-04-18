<template>
    <div>商品详情页</div>
</template>

<script>
    import {requestGetProductInfoById} from '@/api/product/getProductInfoById'
    export default {
        name: "info",
        mounted() {
          let proId = this.$route.query.proId
          requestGetProductInfoById({id:proId} , this).then((res) => {
            console.log(res.data);
          })
        }
    }
</script>

<style scoped>

</style>
