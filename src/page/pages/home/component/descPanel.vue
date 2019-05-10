<template>
  <div class="command-panel">
    <div class="title" :style="{backgroundColor: getPanelColor}">
      <div class="label">{{getTitle}}</div>
      <div class="info">{{getInfo}}</div>
    </div>
    <div class="content">
      <div v-for="(item , index) in getDescArr" @click="clickCommonHandler(item.emitName , item)">
        <div>
          <img style="width: 50px;height: 50px;" :src="item.src" alt="">
        </div>
        <div>{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "descPanel",
        props:{
          descArr:{
            type: Array,
            default: []
          },
          title:{
            type: String,
            default: '新人福利'
          },
          info:{
            type: String,
            default: ''
          },
          panelColor:{
            type: String,
            default: '#fff'
          }
        },
        computed:{
          getDescArr(){
            return this.$props.descArr
          },
          getTitle(){
            return this.$props.title
          },
          getInfo(){
            return this.$props.info
          },
          getPanelColor(){
            return this.$props.panelColor
          }
        },
        methods:{
          clickCommonHandler(emitName , row){
            this.$emit(emitName , row)
          }
        }
    }
</script>

<style scoped lang="scss">
  .command-panel{
    width: 95%;
    margin: 0 auto;
    .title{
      color: white;
      font-size: 13px;
      display: flex;
      background-color: rgb(255,103,102);
      padding: 10px;
      font-weight: bold;
      .info{
        margin-left: 50px;
        color: rgb(104,104,104);
      }
    }
    .content{
      display: flex;
      justify-content: space-around;
      border: 1px solid lightgray;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      div{
        padding: 10px 0;
      }
    }
  }
</style>
