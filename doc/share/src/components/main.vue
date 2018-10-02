<template>
	<div class="contain">
		<header>
			<span>欢迎{{username}}</span>
		</header>
		<div v-for="item of items">
			<section>
				<!-- v-link="{ name: 'article', params: { id: item.id }}" -->
					<div class="section_left">
					<img src="../images/1.jpg">
					<p>{{item.name}}</p>
				</div>
				 <div class="section_right border">
				 	<div class="section_right_top">
				 	<label>{{item.title}}</label>
				 	<span>{{item.time}}</span>
				 </div>
				 	<a >{{item.article}}</a>
				 	<div class="section_bottom">
				 	<ul>
				 		<li>订阅</li>
				 		<li>点赞</li>
				 		<li>踩</li>
				 		<li>评论</li>
				 	</ul>
				 </div>
				 </div>
			</section>
		</div>
		<section>
			<div class="section_left center"><span>标签：</span></div>
			<div class="section_right"><input type="text" v-model.trim="label"></div>
		</section>
		<section>
			<div class="section_left center">
				<span>内容：</span>
			</div>
			<div class="section_right">
				<textarea v-model="content" placeholder="请输入内容" @keyup="showNumber" />
				<span>{{number}}/1000</span>
			<input type="button" name="button" @click="send" value="提交"/></div>
		</section>
		<div class="slide" v-show="show">
			<img src="../images/1.jpg"  @click="returnTop">
			<img src="../images/1.jpg"  @click="returnBottom">
		</div>
	</div>
</template>
<script type="text/javascript">
	 import { setCookie,getCookie } from '../assets/cookie.js';
	export default{
		data(){
			return {
				items:{},
				show:false,
				username:'',
				content:'',
				number:0,
				label:'',
				top:0,
				bottom:0
			}
		},
    created(){
      this.$http.get('/getArticles',data).then((res)=>{

    })
    },
		mounted() {
  		 window.addEventListener('scroll', this.me)
  		},
  		destroyed(){
  			 window.removeEventListener('scroll', this.me)
  		},
		methods:{
			showNumber(){
				this.number=this.content.length;
			},
			send(){
			  if(!!getCookie("username")){
			  	var data={"username":this.username,"content":this.content,"label":this.label}
			  	this.$http.post('/commit',data).then(res=>{

			  	})
        }else{
			    alert("请登录后提交");
        }
			},
			returnTop(){
				var time=setInterval(function(){
					if (document.documentElement.scrollTop==0) {
						console.log(time+"1")
						clearInterval(time)
					}else{
						document.documentElement.scrollTop-=100;
						console.log(document.documentElement.scrollTop)
					}
				},100)
			},
			returnBottom(){

			},
			me(){
			if (document.documentElement.scrollTop>100) {
				this.show=true;
			}else{
				this.show=false;
			}
			}
		}
	}
</script>
<style type="text/css">
	html,body{width: 100%;height: 100%;font-size: 12px;}
	*{padding:0;margin: 0;}
	.contain{width: 90%;margin: auto}
	header span{display: inline-block;text-align: center;padding: 10px 0}
	section{width:90%;margin:10px auto;display: flex;}
	.section_left{width: 15%;}
	.center{ display: flex;justify-content: center;align-items: center;}
	img{width: 50px;height: 50px;border-radius: 100%;}
	.section_left p{margin-top: 20px;color:green;}
	.section_right{width: 60%; justify-content: center;}
	.section_right{display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;}
	.border{border:1px solid #efefef;}
	.section_right_top{width: 100%;height: 50px;line-height: 50px;}
	.section_right_top{text-align: center;}
	.section_right_top span{padding-left: 100px;}
  	.section_bottom ul{list-style: none;display: flex;
  justify-content: space-between;}
  	.section_bottom ul li{background: orange;text-align: center;height: 30px;line-height: 30px;width: 25%;border-right: 1px solid #efefef;cursor: pointer;}
  	.section_bottom ul li:hover{background: #ff6103}
	textarea{width: 100%;height: 150px;border:1px solid #efefef;overflow: auto;text-indent: 3em}
	input[type="button"]{display: block;width: 100px;height: 40px;border:0;background: orange;cursor: pointer;margin:auto;}
	input[type="button"]:hover{background:#ff6103}
  input[type='text']{width: 100%;height: 30px;border:1px solid #efefef;line-height: 30px;}
  .slide{width: 50px;position:fixed;right: 10px;bottom: 50px;cursor: pointer;}
</style>
