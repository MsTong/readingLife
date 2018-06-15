<template>
  <div class="msg">
    <div v-for="value in msgDetails" :key="value.id" class="msg_list">
      <h4><a href="/details" class="title_link">{{value.title}}</a></h4>
      <img src="../assets/msg1.png" alt="" class="msg_img">
      <p class="msg_title">{{value.msg}}</p>
      <p class="min_msg">
        <a href="">{{value.author}}</a>
        <a href="">{{value.review}}</a>
        <span href="">{{value.lover}}</span>
        <span href="">{{value.reward}}</span>
      </p>
    </div>
    <button class="read_more">阅读更多</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msgDetails:[
        {
          title:'最美诗歌音频｜你可以在这世间发发呆',
          msg:'三原则：图原创，文原创，诗原创。 这世间的早上 只有一个七点 你挤在飞奔的地下铁 朝阳，却已升上远山 这世间的傍晚 只有一个七点 你堵在车流滚滚...',
          author:'秋水饮马',
          review:120,
          praise:126,
          reward:1,
          id:1,
          url:'',
          imgUrl:''

        },
        {
          title:'最美诗歌音频｜你可以在这世间发发呆',
          msg:'三原则：图原创，文原创，诗原创。 这世间的早上 只有一个七点 你挤在飞奔的地下铁 朝阳，却已升上远山 这世间的傍晚 只有一个七点 你堵在车流滚滚...',
          author:'秋水饮马',
          review:120,
          praise:126,
          reward:1,
          id:2,
          url:'',
          imgUrl:''
        },
        {
          title:'最美诗歌音频｜你可以在这世间发发呆',
          msg:'三原则：图原创，文原创，诗原创。 这世间的早上 只有一个七点 你挤在飞奔的地下铁 朝阳，却已升上远山 这世间的傍晚 只有一个七点 你堵在车流滚滚...',
          author:'秋水饮马',
          review:120,
          praise:126,
          reward:1,
          id:3,
          url:'',
          imgUrl:''
        },
        {
          title:'最美诗歌音频｜你可以在这世间发发呆',
          msg:'三原则：图原创，文原创，诗原创。 这世间的早上 只有一个七点 你挤在飞奔的地下铁 朝阳，却已升上远山 这世间的傍晚 只有一个七点 你堵在车流滚滚...',
          author:'秋水饮马',
          review:120,
          praise:126,
          reward:1,
          id:4,
          url:'',
          imgUrl:''
        },
        {
          title:'最美诗歌音频｜你可以在这世间发发呆',
          msg:'三原则：图原创，文原创，诗原创。 这世间的早上 只有一个七点 你挤在飞奔的地下铁 朝阳，却已升上远山 这世间的傍晚 只有一个七点 你堵在车流滚滚...',
          author:'秋水饮马',
          review:120,
          lover:126,
          reward:1,
          id:5,
          url:'',
          imgUrl:''
        }
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msg{
    color: #969696;
}
.msg_list{
  padding: 25px 0;
  padding-right: 130px;
  border-bottom: 1px solid #969696; 
  position: relative;
}
.msg .msg_list h4 a{
  color: black;
  font-size: 18px;
  font-weight: 700px;

}
.msg .msg_list h4 a:hover{
  text-decoration:underline;
}
.msg_title{
  font-size: 14px;
  padding: 10px 0;
}
.min_msg{
    font-size: 12px;
}
.min_msg a{
  display: inline-block;
  margin-right: 10px;
  color: #969696;
}
.min_msg span{
  margin-right: 10px;
}
.msg_img{
  width: 120px;
  height: 100px;
  position: absolute;
  right: 0;
  top:50% ;
  margin-top: -50px;
  border-radius: 3px;
}
.read_more{
  width: 100%;
  height: 40px;
  margin: 25px 0;
  border-radius: 20px;
  background: #969696;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
</style>
