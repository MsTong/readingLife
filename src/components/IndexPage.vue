<template>
  <div class="index">
     我是首页
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 200px;
    border: 1px solid black;
    margin: 100px auto;
  }
  .imgLogin img{
    width: 50%;
    height: 100px;
    margin: 10px auto;
  }
  .login p{
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin: 10px 0;

  }
  .login p input{
    width: 100%;
    border: none;
    height: 100%;
    text-align: center;
    font-size: 16px;
    color: black;
  }
  .login p.qr_login input{
    background: orange;
    font-size: 16px;
    height: 100%;
    color: #fff;
    cursor: pointer;
  }
</style>
