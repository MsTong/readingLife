<template>
  <div class="index">
    <header>
        <a href="/home" class="index_title">简书</a>
      <div class="left_top l_f">
        <a href="/home" class=“index_link”>首页</a>
        <a href="">下载App</a>
        <div class="search" >
           <input type="text" placeholder="搜索" @focus="showSearch" @blur="hideSearch"/>
           <div class="search_list" v-show="isShowSearch">
             <span class="jiantou"></span>
             <div class="clearfloat" >
               <span class="hot_search">热门搜索</span>
               <a href="" class="change">换一批</a>
             </div>
             <ul class="search_list_select">
               <li>区块链</li>
               <li>三十六骑</li>
               <li>一纸vr</li>
               <li>三生三世</li>
               <li>简书会员</li>
               <li>小程序</li>
               <li>茶点微小说</li>
               <li>后背留给我</li>
               <li>高考</li>
               <li>擦亮你的眼</li>
             </ul>
           </div>
        </div>
      </div>
      <div class="right_top r_f">
        <a href="" class="Aa">Aa</a>
        <a href="/sign/login" class="login">登录</a>
        <a href="/sign/regist" class="regist">注册</a>
        <a href="" class="w_artical">写文章</a>
      </div>
    </header>
    <div class="content">
   <router-view/>
   </div>
    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShowSearch:0
    }
  },
  methods:{
    showSearch(){
      this.isShowSearch=1;
    },
    hideSearch(){
      this.isShowSearch=0;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 100%;
  height: 100%;
  background: #fff;
}
header{
  width: 100%;
  height: 56px;
  border-bottom:1px solid #ccc;
   text-align: center;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 10000;
   background: #fff;
}
.index_title{
  font-size: 28px;
  font-weight: 700;
  margin: 0 15px;
  line-height: 56px;
  color: #ea6f5a;
  float: left;
}
 .l_f{
   width: 30%;
   height: 58px;
   line-height: 58px;
   position: absolute;
   left: 10%;
 }
 .l_f a{
   color: #ea6f5a;
   display: inline-block;
   margin-right: 10%;
 }
 
.index_link{
  width:18%;
  height: 100%;
  font-size:16px; 
  margin: 0 10%;
}
.search{
  display: inline-block;
  position: relative;
}
.search input{
  border: none;
  outline: none;
  margin: 8px 0px;
  height: 38px;
  line-height: 38px;
  background: #eee;
  border-radius: 19px;
  padding-left: 19px;
  font-size: 14px;
}
.search_list{
  width: 250px;
  height: 189px;
  background-color: #fff;
  box-shadow: 3px 3px transparent;
  border: 1px solid #eee;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 56px; 
  padding: 15px;
}
.jiantou{
    position: absolute;
    left:30px;
    top: -18px;
    width: 0;
    height: 0;
    border-width: 9px;
    border-style: solid;
    border-color:  transparent  transparent #eee  transparent ;

  }
  .jiantou:after{
    content: '';
    position: absolute;
    top: -7px;
    left: -8px;
   border-width: 8px;
    border-style: solid;
    border-color:  transparent  transparent #fff  transparent ;
  }
  .hot_search{
    float: left;
    font-size:14px;
    color: #969696;
    text-align: left;
  }
  a.change{
    float: right;
    font-size:14px;
    color: #969696;
    text-align: right;
    margin: 0;
  }
  .search_list_select li{
    float: left;
    border: 1px solid #969696;
    border-radius: 3px;
    white-space: nowrap;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #969696;
    margin-bottom: 15px;
    margin-right: 15px;
  }
  .clearfloat:after{
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    visibility: inherit;
    clear: both;
  }
 .r_f{
   float: right;
 }
 .r_f a{
   display: inline-block;
   margin: 8px 15px;
   height: 38px;
   line-height: 38px;
   border: 1px solid transparent;
   font-size: 16px;
   text-align: center;
 }
 a.Aa{
   color: #969696;
   width: 30px;
   margin: 0;
 }
 .login{
   color: #969696;
   width: 40px;
 }
 a.regist{
   width: 80px;
   border-radius: 20px;
   border: 1px solid #ea6f5a;
   margin: 8px 5px;
   color: #ea6f5a;
 }
 .w_artical{
   width: 76px;
   background-color:#ea6f5a;
   border-radius: 20px;
   margin: 8px 15px;
   color: #fff;
   padding: 0 12px;
 }
</style>
