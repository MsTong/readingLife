<template>
  <div class="sign">
     <div class="">
        <ul>
          <li class="seven_hot" v-for="(item,index) in item_right" :key="index"><a href=""><img src="../assets/r_1.png" alt=""></a></li>
          <li class="download_app"><a href=""><img src="" alt=""></a></li>
        </ul>
     </div>
    <div class="select_author">
      <p class="recommend_author"><span>推荐作者</span><a href="">换一批</a></p>
      <ul class="author_list">
        <li v-for="(item,index) in authors" :key="index" class="clearfloat">
          <a href="" class="author_box">
            <img src="../assets/dxt.png" alt="">
          </a>
          <div class="pro_author">
            <p><a href="">{{item.name}}</a></p>
            <p>写了{{item.number}} 字. {{item.lover}}k喜欢</p>
          </div>
          <a href="" class="focus">+关注</a>
        </li>
      </ul>
    </div>
    <button class="allAuthors">查看全部></button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      item_right:['../assets/r_1.png','../assets/r_2.png','../assets/r_3.png','../assets.r_4.png','../assets/r_5.png'],
      authors:[
        {
          name:'简书大学堂',
          imgUrl:'',
          number:236.7,
          lover:12
        },
        {
          name:'简书大学堂',
          imgUrl:'',
          number:236.7,
          lover:12
        },
        {
          name:'简书大学堂',
          imgUrl:'',
          number:236.7,
          lover:12
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .seven_hot a img{
    width: 100%;
    height: 50px;
    border-radius: 4px;
    margin-bottom: 12px;
  }
  .download_app{
    width: 100%;
    height: 80px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    margin-bottom: 12px;

  }
  .recommend_author{
    margin: 10px 0;
    font-size: 15px;
    color: #969696;
  }
  .recommend_author a{
    color: #969696;
    float: right;
    
  }
  .recommend_author a:hover{
    color: #666666;
  }
  .author_list li{
    margin-bottom: 20px;
  }
  .author_list>li>a.author_box{
    display: block;
    width: 100%;
  }
  .author_list li a img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    float: left;
  }
  .pro_author{
    float: left;
    padding: 5px 10px;
  }
  .pro_author p{ 
    font-size: 12px;
    color: #969696;

  }
  .pro_author p a{
    font-size: 14px;
    color: black;
  }
  .focus{
    float: right;
    color: #42c02e;
    font-size: 13px;
    padding-top: 5px;
  }
  .allAuthors{
    width: 100%;
    height: 40px;
    background: rgb(235, 232, 232);
    color: #969696;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
</style>
