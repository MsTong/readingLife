<template>
  <div class="box">
    <form action="javascript:;">
      <div class="l_t_r_b first">
        <input
          type="text"
          placeholder="你的昵称"
          class="name"
          v-model="name"
          @focus="clearTip('tip_name')"
        />
      </div>
      <div class="l_t_r_b ">
        <input
          type="text"
          placeholder="手机号"
          class="ph_number"
          v-model="ph_number"
          @focus="clearTip('tip_number')"
          @keyup="getCode"
        />
      </div>
      <div class="l_t_r_b get_code" v-show="show_code">
        <input
          type="text"
          placeholder="验证码"
          class="code"
          v-model="code"
        />
        <a class="getcode" :class="{getcode_o1:isGetCode}" ref="getcode">获取验证码</a>
      </div>
      <div class="l_t_r_b last">
        <input
          type="text"
          placeholder="设置密码"
          class="password"
          v-model="password"
          @focus="clearTip('tip_password')"
        />
      </div>
      <div><input type="button" class="regist" value="注册" @click="cl_regist"></div>
    </form>
    <p class="regist_msg">点击 “注册” 即表示您同意并愿意遵守简书</p>
    <p class="regist_msg"><a href="">用户协议</a>和 <a href="">隐私政策</a></p>
    <div class="tip_name tip_msg" v-show="tip_name"><span class="jiantou"></span><p>请输入昵称</p></div>
    <div class="tip_number tip_msg" v-show="tip_number"><span class="jiantou"></span><p>请输入正确号码</p></div>
    <div class="tip_code tip_msg" v-show="tip_code"><span class="jiantou"></span><p>请输入验证码</p></div>
    <div class="tip_password tip_msg" v-show="tip_password"><span class="jiantou"></span><p>密码不得少于6个字符</p></div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      msg: "",
      name: "",
      tip_name: 0,
      ph_number: "",
      tip_number: 0,
      password: "",
      tip_password: false,
      show_code: 0,
      code: "",
      tip_code: false,
      isGetCode: false
    };
  },
  methods: {
    cl_regist() {
      if (!this.name) {
        this.tip_name = true;
      } else if (!this.ph_number) {
        this.tip_number = 1;
      } else if (!this.password) {
        this.tip_password = 1;
      } else if (!this.code) {
        this.tip_code = 1;
      } else {
        console.log(this)
        this.$http
          .post("http://192.168.1.116:3000/api/littlelife/login", {
            username: this.name,
            password: this.password,
            phone: this.ph_number
          })
          .then(function(data) {
            console.log(data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    clearTip(a) {
      this[a] = false;
    },
    getCode() {
      if (this.ph_number) {
        this.show_code = 1;
        if (
          this.ph_number.match(
            /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
          )
        ) {
          // this.$refs.getcode.style.opacity=1;
          // this.$refs.getcode.style.cursor = 'pointer';
          this.isGetCode = 1;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  position: relative;
}

.l_t_r_b {
  width: 298px;
  height: 58px;
  border: 1px solid #c8c8c8;
  border-bottom: none;
  background-color: hsla(0, 0%, 71%, 0.1);
}

.l_t_r_b.first {
  border-radius: 4px 4px 0 0;
}

.l_t_r_b.last {
  border-bottom: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
}

.box .l_t_r_b input {
  padding: 4px 12px 4px 35px;
  border: none;
  background: none;
  width: 251px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
}

.l_f span {
  margin-left: 5px;
}

.l_r a {
  color: #969696;
}

.l_r a:hover {
  color: #000;
}

.regist {
  width: 100%;
  height: 42px;
  background-color: #42c02e;
  border: none;
  border-radius: 21px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin: 20px 0;
  outline: none;
  cursor: pointer;
}

.regist_msg {
  font-size: 12px;
  color: #969696;
}

.regist_msg a {
  color: #3194d0;
}

/*提示*/
.tip_msg p {
  white-space: nowrap;
}
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
.jiantou {
  position: absolute;
  left: -12px;
  top: 9px;
  width: 0;
  height: 0;
  border-width: 6px;
  border-style: solid;
  border-color: transparent red transparent transparent;
}
.jiantou:after {
  content: "";
  position: absolute;
  top: -8px;
  left: 1px;
  border-top: 8px solid transparent;
  border-right: 8px solid #ffffff;
  border-bottom: 8px solid transparent;
}
.get_code {
  position: relative;
}

.tip_name {
  top: 16px;
}

.tip_number {
  top: 74px;
}
.tip_code {
  top: 132px;
}
.tip_password {
  top: 182px;
}

.getcode {
  display: block;
  height: 36px;
  width: 100px;
  line-height: 36px;
  border-radius: 20px;
  background-color: #42c02e;
  color: #fff;
  font-size: 14px;
  position: absolute;
  right: 7px;
  top: 9px;
  opacity: 0.5;
}
.getcode_o1 {
  opacity: 1;
  cursor: pointer;
}
</style>

