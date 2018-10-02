<template>
	<article>
		<nav>
			<div class="user">
				<img src="../images/1.jpg">
				<p>wwww</p>
			</div>
			<ul>
				<li>个人中心</li>
				<li>我的文章</li>
				<li>订阅中心</li>
				<li>我的评论</li>
				<li>退出登录</li>
			</ul>
		</nav>
		<section>
			<div class="myArticle" v-if="type=='a'">
				<div class="section_main"><label>用户名：</label><input type="text" v-model.trim="username"></div>
                <div class="section_main"><label>密码：  </label><input type="text" v-model.trim="password"></div>
                <div class="section_main"><label>昵称：  </label><input type="text" v-model.trim="name"></div>
               <div class="section_main">
                 <input type="button" @click.stop="login" value="修改"/>
                 <input type="reset" value="重置"/>
               </div>
			</div>
			<div class="center" v-else-if="type=='b'">

			</div>
			<div class="commit" v-else-if="type=='c'">

			</div>
			<div class="quit" v-else-if="type=='d'">

			</div>
		</section>
	</article>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				type:'a'
			}
		}
	}
</script>
<style lang="scss">
	html,body{
		width: 100%;height: 100%;font-size: 12px;padding: 0;margin: 0;
		article{
			width: 90%;display: flex;justify-content: space-between;margin: auto;background: #efefef;
			nav{
				width: 20%;height: 500px;background: #efefef;border-right: 1px solid #c0c0c0;
				.user{
					width: 100%;border-bottom: 1px solid black;text-align: center;
					img{
						width: 50px;height: 50px;border-radius: 100%;display: block;margin: auto;
					}
				}
				ul{
					list-style: none;padding: 0;margin: 0;
					li{
						width: 100%;height: 40px;line-height: 40px;cursor: pointer;letter-spacing: 1em;
					}
					li:hover{
		 			background:#c0c0c0;
				}
				}
			}
			section{
				width: 80%;padding: 40px 0;
				.section_main{
					width: 50%;
					label{
						display:inline-block;width: 70px;height: 30px;line-height: 30px;
					}
					input[type='text']{
					width: 200px;height: 30px;border:1px solid #efefef;line-height: 30px;margin-top:30px;
					}
					input[type='button'],input[type='reset']{
						height: 40px;width:100px;display: inline-block;background: green;border:0;cursor: pointer;margin:30px 20px;
					}
				}

			}
		}
	}
</style>
