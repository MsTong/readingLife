<template>
  <div class="box">
    <div class="l_t_r_b first">
      <input type="text" placeholder="手机号或邮箱" @focus="clearTip('tip_number')" v-model="ph_number"/>
    </div>
    <div class="l_t_r_b last" >
      <input type="text" placeholder="密码" @focus="clearTip('tip_password')" v-model="password"/>
    </div>
    <div class="f_tips clearfloat">
      <div class="l_f">
        <input type="checkbox" /><span>记住我</span>
      </div>
      <div class="l_r">
        <a href="" class="r_f">登陆遇到问题？</a>
      </div>
    </div>
    <button class="login" @click="cl_login">登陆</button>
    <!-- 提示 -->
    <div class="tip_number tip_msg" v-show="tip_number"><span class="jiantou"></span><p>请输入号手机号或邮箱</p></div>
    <div class="tip_password tip_msg" v-show="tip_password"><span class="jiantou"></span><p>密码不得少于6个字符</p></div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: '',
      show:false,
      ph_number:'',
      password:'',
      tip_number:0,
      tip_password:0
    }
  },

  methods:{
    cl_login() {
        if(!this.ph_number){
          this.tip_number=1;
        }
        else if (!this.password) {
          this.tip_password=1;
        }else{
          this.$router.push({path:'/user'})
        }
      },
      clearTip(a){
        this[a]=false;
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .box{
   width: 100%;
   position: relative;
 }
  .l_t_r_b{
    width: 298px;
    height: 58px;
    border: 1px solid #c8c8c8;
    border-bottom: none;
    background-color: hsla(0,0%,71%,.1);
  }
 .l_t_r_b.first{
   border-radius: 4px 4px 0 0;
 }
 .l_t_r_b.last {
   border-bottom: 1px solid #c8c8c8;
   border-radius: 0 0 4px 4px;
 }
 .box .l_t_r_b input{
   padding: 4px 12px 4px 35px;
   border: none;
   background: none;
   width:251px;
   height:50px;
   line-height: 50px;
   font-size: 14px;
   font-weight: bold;
   outline: none;
 }
 .f_tips{
   margin: 15px 0;
 }
   .l_f{
    float: left;
     font-size: 15px;
     color: #969696;


   }
  .l_f span{
    margin-left: 5px;
  }
  .l_r{
    float: right;
    font-size: 15px;

  }
  .l_r a{
    color: #969696;

  }
 .l_r a:hover{
   color: #000;
 }
  .clearfloat:after{
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    visibility: inherit;
    clear: both;
  }
  .login{
    width: 100%;
    height: 42px;
    background-color: #3194d0;
    border: none;
    border-radius: 21px;
    font-size: 18px;
    color: #fff;
    outline: none;
  }
  /* 提示 */
  .tip_msg {
    border: 1px solid #ea6f5a;
    position: absolute;
    left: 310px;
    /*width: 100px;*/
    padding: 5px 10px;
    color: #333;
    background-color: #fff;
    font-size: 14px;
    border-radius: 5px;
  }
  .tip_msg p {
    white-space:nowrap;
  }
  .jiantou{
    position: absolute;
    left:-12px;
    top: 9px;
    width: 0;
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color: transparent red transparent transparent;

  }
  .jiantou:after{
    content: '';
    position: absolute;
    top: -8px;
    left: 1px;
    border-top: 8px solid transparent;
    border-right: 8px solid #FFFFFF;
    border-bottom: 8px solid transparent;
  }
  .tip_number {
    top: 16px;
  }
  .tip_password {
    top: 74px;
  }
</style>

