<template>
  <div class="contains" @click="hide_error">
    <div class="section" v-show="show_login">
      <div style="color: green">登录界面</div>
    <div v-show="showMessage" class="error_tip"><p>{{message}}</p></div>
    <div class="section_main"><label>用户名：</label><input type="text" v-model.trim="username"></div>
    <div class="section_main"><label>密码：  </label><input type="text" v-model.trim="password"></div>
    <input type="button" @click.stop="login" value="登陆">
    <input type="button" @click="showRegister" value="注册">
  </div>
    <div class="section" v-show="show_register">
      <div style="color: green">注册界面</div>
    <div v-show="showMessage" class="error_tip"><p>{{message}}</p></div>
    <div class="section_main"><label>用户名：</label><input type="text" v-model.trim="registerUsername"></div>
    <div class="section_main"><label>密码：  </label><input type="text" v-model.trim="registerPassword"></div>
    <div class="section_main"><label>昵称：  </label><input type="text" v-model.trim="registername"></div>
    <input type="button" @click.stop="register" value="注册">
    <input type="button" @click="showLogin" value="登陆">
  </div>
  </div>
</template>
<style type="text/css">
html,body{width: 100%;height: 100%;}
*{margin:0;padding:0;}
  .section{width: 300px;margin:auto;padding: 30px 50px;}
  .section_main{width: 300px;}
  .contains{width: 100%;height: 100%;}
  label{display:inline-block;width: 70px;height: 30px;line-height: 30px;}
  input{margin-top: 10px;}
  input[type='text']{width: 200px;height: 30px;border:1px solid #efefef;line-height: 30px;}
  input[type='button']{height: 40px;width:200px;display: block;background: green;border:0;margin-left:84px;cursor: pointer;}
  .error_tip{margin-top: 10px;}
  .error_tip>p{border: 1px solid red;width: 150px;height: 30px;margin: auto;}
</style>
<script type="text/javascript">
  import { setCookie,getCookie } from '../assets/cookie.js';
  export default{
    data(){
      return {
        show_login:true,
        show_register:false,
        username:'',
        password:'',
        registerUsername:'',
        registerPassword:'',
        registername:'',
        showMessage:false,
        exe:'/^[A-Za-z0-9]+$/ig',
        message:'',
        error:{
          error1:'请输入用户名或密码',
          error2:"密码少于6位",
          error3:"字符不规范",
          error4:"用户名不存在",
          error5:"密码输入错误"
        },
        success:{
          success1:"登录成功",
          success2:"注册成功"
        }
      }
    },
   mounted(){
      if(!!getCookie('username')){
        this.$router.push('/main')
      }
    },
    methods:{
      login(){
        if (!!this.username&&!!this.password) {
          var  data = {'username':this.username,'password':this.password}
          this.$http.post('http://www.guoaihua.com:3000/users/login',data).then((res)=>{
            if(res.data == -1){
              this.message=this.error.error4;
              this.showMessage = true
            }else if(res.data == 0){
              this.message=this.error.error5;
              this.showMessage = true
            }else{
              this.message = this.success.success1
              this.showMessage= true
              setCookie('username',this.username,10)
              setTimeout(function(){
                this.$router.push({path:'/home'})
              }.bind(this),1000)
            }
          })
        }else{
          this.showMessage=true;
          this.message=this.error.error1;
        }
      },
      register(){
        if (!!this.registerUsername&&!!this.registerPassword) {
          if (this.registerPassword.length<6) {
            this.showMessage=true;
            this.message=this.error.error2;
          }else{
          let data = {'username':this.registerUsername,'password':this.registerPassword,'nickname':this.registername}
          this.$http.post('http://www.guoaihua.com:3000/users/regist',data).then((res)=>{
            console.log((res))
            if(res.data == "1"){
              this.message = this.success.success2;
              setTimeout(function(){
                this.$router.push({path:'/home'})
              }.bind(this),1000)
            }
          })
        }
        }else{
          this.showMessage=true;
          this.message=this.error.error1;
        }
      },
      showLogin(){
        this.show_register=false;
        this.show_login=true;
      },
      showRegister(){
        this.show_register=true;
        this.show_login=false;
      },
      hide_error(){
        if (!!this.showMessage) {
          this.showMessage=false;
        }
      }
    }
  }
</script>
