<template>
<div class="sign_b">
    <div class="index"><a href="/">简书</a></div>
  <div class="sign">
    <h4 class="sign_title">
      <a href="/sign/login" :class="{'active':login}" >登录</a>
      <b>.</b>
      <a href="/sign/regist" :class="{'active':regist}" >注册</a>
    </h4>
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name:'sign',
  data(){
    return{
      login:true,
      regist:false
    }
  },
  mounted(){
    if(this.$route.path=='/sign/login'){
      this.login=true;
      this.regist=false;
    }else{
      this.regist=true;
      this.login=false;
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index a{
  color: #ea6f5a;
  font-size: 50px;
  font-weight: 600;
  position: fixed;
  left: 30px;
  top: 30px;
}
  .sign{
    width: 300px;
    background: #fff;
    border-radius: 3px;
    padding: 50px 50px 30px 50px;
    margin: 100px auto;
    text-align: center;
  }
  .sign .sign_title{
    padding: 10px;
    margin-bottom: 50px;
  }
  .sign .sign_title a.active{
    border-bottom: 2px solid red;
    color: red;
  }
  .sign .sign_title a{
    color: #969696;
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    padding: 10px;
  }
  .sign_title a:hover{
    border-bottom: 2px solid red;
    color: red;
  }
  .sign .sign_title b{
    color: #969696;
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    padding: 10px;
    width: auto;
    height: auto;

  }
</style>
