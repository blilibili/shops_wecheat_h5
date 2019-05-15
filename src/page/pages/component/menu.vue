<template>
  <div class="service-page">
    <van-search placeholder="请输入搜索关键词" v-model="searchName" />

    <div class="select-tree">
      <div class="left-menu">
        <div class="menu" @click="activeItem(item , index)" v-for="(item , index) in typeList" :class="index == activeIndex ? 'active': ''">{{item.label}}</div>
      </div>
      <div class="right-content">
        <div class="title">
          {{typeList[activeIndex].label}}
        </div>
        <div class="product-list" v-for="(item , index) in productList">
          <div class="product">
            <div class="img">
              <img :src="item.picImg" alt="">
            </div>
            <div class="desc">
              {{item.proName}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "menu",
        data(){
          return {
            activeIndex: 0,
            typeList:[
              {
                label: '热门推荐',
                itemId: 1
              },
              {
                label: '健康生活',
                itemId: 2
              }
            ],
            productList:[
              {
                picImg: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3166931255/O1CN01hr1n3v1L8paZVgC8R_!!3166931255.jpg_430x430q90.jpg',
                proName: '善存药片',
                type: '保健'
              }
            ]
          }
        },
        methods:{
          activeItem(row , index){
            this.activeIndex = index
          }
        }
    }
</script>

<style scoped>

</style>
