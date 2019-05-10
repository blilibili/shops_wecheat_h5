<template>
    <div class="service-page">
      <van-search placeholder="请输入搜索关键词" v-model="searchName" />

      <div class="select-tree">
        <van-tree-select
          :items="items"
          :main-active-index="mainActiveIndex"
          :active-id="activeId"
          @navclick="onNavClick"
          @itemclick="onItemClick"
        />
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            activeId:1,
            mainActiveIndex:1,
            searchName: '',
            items:[
              {
                // 导航名称
                text: '热搜推荐',
                // 该导航下所有的可选项
                children: [
                  {
                    // 名称
                    text: '平板电脑',
                    // id，作为匹配选中状态的标识
                    id: 1,
                    // 禁用选项
                    disabled: true
                  },
                  {
                    text: '手机',
                    id: 2
                  },
                  {
                    text: '耳机',
                    id: 3
                  },
                  {
                    text: '钟表',
                    id: 4
                  }
                ]
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
