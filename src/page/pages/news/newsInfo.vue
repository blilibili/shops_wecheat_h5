<template>
    <div class="news-info-box">
      <div class="title-img">
        <img src="https://f10.baidu.com/it/u=3699489413,3855986846&fm=72" alt="">
      </div>
      <div class="content">
        <div class="title-words">
          爱喝酒说明身体好
        </div>
        <div class="news-content">
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newsInfo"
    }
</script>

<style scoped lang="scss">
  .news-info-box{
    .title-img{
      img{
        width: 100%;
      }
    }
    .content{
      padding: 10px 20px;
      .title-words{
        font-size: 14px;
        font-weight: bold;
      }
      .news-content{
        font-size: 12px;
        text-align: justify;
        line-height: 1.66666;
        margin-top: 10px;
      }
    }
  }
</style>
