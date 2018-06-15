<template>
  <div class="content clearfloat">
    <div class="content_left">
      <div class="classify ">
        <ul class="classify_list clearfloat">
          <li><a href="">读书</a></li>
          <li><a href="">社会热点</a></li>
          <li><a href="">自然科普</a></li>
          <li><a href="">简书电影</a></li>
          <li><a href="">旅行.在路上</a></li>
          <li><a href="">历史</a></li>
          <li><a href="">@IT.互联网</a></li>
          <li class="more_topic"><a href="">更多热门专题></a></li>
        </ul>
      </div>
        <Msg></Msg>
    </div>
    <div class="content_right">
      <ContetnRight></ContetnRight>
    </div>
  </div>
</template>

<script>
import Msg from './msg'
import ContetnRight from './contentRight'

export default {
  components:{
    Msg,
    ContetnRight
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding: 100px 12% 30px 12%;
}
.content_left {
  width: 65%;
  float: left;
}
.classify {
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
.classify_list li {
  float: left;
  height: 32px;
  line-height: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 30px;
  padding-right: 10px;
  background: #f7f7f7;
  margin: 0 18px 18px 0;
  font-size: 13px;
}
.classify_list li a {
  color: black;
}
.classify_list li.more_topic {
  border: none;
  background: none;
}
.classify_list li.more_topic a {
  color: #969696;
}
.content_right{
  float: right;
  width: 300px;
  margin-left: 40px;
}
</style>
