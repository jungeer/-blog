<template lang="html">
  <div class="log">
    <section class="login-box info">
      <h2>个人信息</h2>
      你好， 管理员。
    </section>
    <section :class="['login-box', loginClass ? 'login' : '']">
      <h2>登录</h2>
      <div class="login-row"><span>用户名:</span><input type="text" placeholder="请输入用户名" v-model="username"></div>
      <div class="login-row"><span>密&nbsp;码:</span><input type="password" placeholder="请输入密码" v-model="password"></div>
      <div class="login-row"><div class="login-btn" @click="login">登录</div></div>
      <div class="login-row"><span class="small-info">还没注册?</span><span class="register" @click="showRegister">马上注册</span></div>
      <div class="login-row tip-box"><span class="tip" :text="tip"> {{ tip }} </span></div>
    </section>
    <section :class="['login-box', registerClass ? 'register-box' : '']">
      <h2>注册</h2>
      <div class="login-row"><span>用户名:</span><input type="text" name="username" placeholder="请输入用户名" v-model="username"></div>
      <div class="login-row"><span>&nbsp;密码:</span><input type="password" placeholder="请输入密码" v-model="password"></div>
      <div class="login-row"><span>&nbsp;确认:</span><input type="password" placeholder="请确认密码" v-model="repassword"></div>
      <div class="login-row"><div class="register-btn" @click="register">注册</div></div>
      <div class="login-row"><span class="small-info">已有账号?</span><span class="login-in" @click="showLogin">马上登录</span></div>
      <div class="login-row tip-box"><span class="tip" :text="tip">{{ tip }}</span></div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginClass: false,
      registerClass: true,
      username: '',
      password: '',
      repassword: '',
      tip: ''
    }
  },
  methods: {
    showRegister () {
      this.loginClass = true
      this.registerClass = false
      this.username = ''
      this.password = ''
      this.repassword = ''
    },
    showLogin () {
      this.loginClass = false
      this.registerClass = true
      this.username = ''
      this.password = ''
    },
    login () {
      console.log('login')
      if (this.username === '' || this.password === '') {
        this.tip = '不能为空'
        return
      }

      axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res) => {
        this.tip = res.data
      })
    },
    register () {
      // console.log(this.username)
      // http://127.0.0.1:3000/api/user/register

      if (this.username === '' || this.password === '' || this.repassword === '') {
        this.tip = '不能为空'
        return
      }
      if (this.password !== this.repassword) {
        this.tip = '密码不一致'
        return
      }

      axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/api/user/register',
        // headers: {'Content-Type': 'application/json'},
        data: {
          username: this.username,
          password: this.password,
          repassword: this.repassword
        }
      }).then((res) => {
        console.log(res.data)
        this.tip = res.data
      })
    }
  }
}
</script>

<style lang="css">
  .log {
    width: 440px;
    background-color: #fff;
    border: 1px solid red;
  }
  .info {
    display: none;
  }
  .register-box {
    display: none;
  }
  .login {
    display: none;
  }
  .login-box {
  width: 100%;
  height: 250px;
  text-align: center;
  }
  .login-row {
    width: 250px;
    margin: 0 auto;
    margin-top: 9px;
  }
  .login-row span {
    display: inline-block;
    width: 55px;
  }
  .login-row input {
    width: 150px;
    margin-left: 5px;
    border-radius: 2px;
  }
  .login-row .small-info,
  .login-row .login-in,
  .login-row .register {
    display: inline-block;
    width: 120px;
  }
  .login-row .login-in,
  .login-row .register {
    cursor: pointer;
  }
  .login-box h2 {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E6E7E9;
  }

  .sign-up {
    display: none;
  }
  .login-in,
  .register {
    color: green;
  }
  .login-btn,
  .register-btn {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #E6E7E9;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    opacity: .9;
  }
  .login-btn:hover,
  .register-btn:hover {
    opacity: 1;
    font-weight: bold;
  }
  .login-box .tip {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: red;
  }
</style>
