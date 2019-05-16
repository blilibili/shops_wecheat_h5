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
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好<br/>
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好<br/>
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好<br/>
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好<br/>
          爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好爱喝酒说明身体好<br/>

        </div>
      </div>

      <div class="comment-box">
        <div class="title">热门评论</div>
        <div class="content">
          <div class="words">
            <div class="ava">
              <img :src="myAva" alt="" style="width: 50px;height: 50px;">
              <div class="name">
                <div>
                  daniel.li
                </div>
                <div class="time info-word">
                  2019-05-16
                </div>
                <div>
                  厉害厉害
                </div>
              </div>
            </div>
            <div>
              点赞
            </div>
          </div>

          <div class="words" style="margin-top: 5px;">
            <div class="ava">
              <img :src="myAva" alt="" style="width: 50px;height: 50px;">
              <div class="name">
                <div>
                  daniel.li
                </div>
                <div class="time info-word">
                  2019-05-16
                </div>
                <div>
                  不得了
                </div>
              </div>
            </div>
            <div>
              点赞
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newsInfo",
        data(){
          return {
            myAva:'http://94.191.74.232/uploads/img/user/20190412/d942e76b9ee2e2782a377c7c502341cb.jpg',
          }
        }
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
    .comment-box{
      margin-top: 20px;
      .title{
        font-size: 14px;
        padding: 20px;
      }
      .content{
        .words{
          display: flex;
          justify-content: space-between;
          min-height: 60px;
          border-bottom: 1px solid lightgrey;
          .ava{
            display: flex;
            div{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
</style>
