<template>
	<!--头部图标-->
	<view class="head">
		<view class="logo">
			<image src="@/static/logo.png" mode=""></image>
		</view>
	</view>
	<!--轮播图-->
	<view class="lunbo">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" >
			<swiper-item v-for="item in imagelist">
				<image :src="item" class="slide-image" mode="widthFix"/>
			</swiper-item>
		</swiper>
	</view>
	<!--icon列表-->
	<view class="nav">
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-news.png" alt=""/></view>
			<text>新闻</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-groupbuy.png" alt=""/></view>
			<text>团购</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-friend.png" alt=""/></view>
			<text>车展</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-carimg.png" alt=""/></view>
			<text>经销商</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-dealer.png" alt=""/></view>
			<text>图库</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-esc.png" alt=""/></view>
			<text>找车</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-find.png" alt=""/></view>
			<text>二手车</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-sc.png" alt=""/></view>
			<text>搜索</text>
		</view>
		<view class="nav_item">
			<view><image src="@/static/iconlist/icon-user.png" alt=""/></view>
			<text>个人中心</text>
		</view>
	</view>
	<!--热门推荐-->
	<view class="hot-remmend">
		<view class="share_title">
			<h4>热门团购推荐</h4>
			<navigator href="http://" target="_blank" rel="noopener noreferrer">更多</navigator>
		</view>
		<view class="navlist">
			<view class="nav_item">
				<view class="nav_itemc"><image src="@/static/images/201811271113441157.jpg" alt=""/></view>
				<text>北汽集团</text>
				<text>167人报名</text>
			</view>
			<view class="nav_item">
				<view class="nav_item"><image src="@/static/images/201811271115199738.jpg" alt=""/></view>
				<text>北汽集团</text>
				<text>167人报名</text>
			</view>
			<view class="nav_item">
				<view class="nav_item"><image src="@/static/images/201811280333301986.jpg" alt=""/></view>
				<text>北汽集团</text>
				<text>167人报名</text>
			</view>
			<view class="nav_item">
				<view class="nav_item"><image src="@/static/images/202003051251314458.jpg" alt=""/></view>
				<text>北汽集团</text>
				<text>167人报名</text>
			</view>
		</view>

	</view>
	<!--车市新闻-->
	<view class="newslist">
		<view class="share_title">
			<h4>车市新闻</h4>
			<navigator href="">更多</navigator>
		</view>
		<view class="content-swide">
			<uni-list>
				<view class="ulist-item" v-for="item in [1,2,3,4,5]">
					<view class="info">
						<navigator>为什么身边的女孩都跑去买芭蕾猫</navigator>
						<view class="">
							<text >阅读 5349</text>
							<text>2022/08/12 19:51</text>
						</view>
					</view>
					<view class="news-image">
						<navigator url=""><image src="@/static/swipeimg/202104140612445573.png"></image></navigator>
					</view>
				</view>
				
			</uni-list>
		</view>
		
	</view>
</template>

<script>
	import {getCurrentInstance} from 'vue'
	export default {
		setup(){
			
		},
		data() {
			return {
				imagelist:[]
			}
		},
		methods: {
		getinfo:async function(){
			const { proxy } =getCurrentInstance()
			const res= await proxy.$myRequest({url:"/Service/ExpressAutoApi/NewsAPI.ashx",
			method:"POST",
			header:{
			"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
			data:{"method":"LoadNewestNewsListForIndex","page":"1","pagesize":"8","catgegoryid":"0"}
			})
			const _imagelist=new Array()
			if(res.data){
				res.data.forEach(function(element){
					_imagelist.unshift(element.NewsCover)
					console.log(element.NewsCover)
				})
			}

			this.imagelist=_imagelist
		}
		},
		
		onLoad() {
			// this.getinfo()
			this.imagelist=["/static/swipeimg/202104140610486690.png",
			"/static/swipeimg/202104140612122136.png",
			"/static/swipeimg/202104140612445573.png",
			"/static/swipeimg/202104140613319695.png"]
		}
		
	}
</script>

<style lang="scss">
	.share_title{
		display: flex;
		justify-content: space-between;
		a{
			color: dimgrey;
		}
	}.share_title::before{
			content: '';
			width: 3px;
			height: 18px;
			left: 0;
			position: absolute;
			background-color: crimson;
		}
	.head{
		.logo{
			margin: 0 auto;
			image{
			height: 100rpx;
			width: 390rpx;
			display: block;
			margin: 0 auto;
			}
		}
	}

	.lunbo{

		swiper{
			@media screen and (min-width:1200px) {
				width: 50vw;
				height: 50vh;
			}
			@media screen and (max-width:1200px) {
				width: 100vw;
				height: 40vh;
			}
			margin: 0 auto;
			image{
				height: 100%;
				width: 100%;
				
			}
		}


	}
	
	.nav{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 15rpx auto;
		border-top: 10px solid #f5f5f5;
		.nav_item{
			width: 20%;
			text-align: center;
			padding-top: 30rpx;
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
	.hot-remmend{
		display: flex;
		flex-direction: column;
		border-top: 10px solid #f5f5f5;
		padding: 10px 10px;

			
		.navlist{
			display: flex;
			text-align: center;
			justify-content: space-between;
			margin: 20upx 20upx;
			text{
				display: block;
			}
			text:nth-last-child(1){
				color: red;
				font-size:small;
				margin-top: 0.3rem;
			}
			.nav_item{
				image{
					width: 100rpx;
					height: 100rpx;
				}
			}
		}	
	}
	
	.newslist{
		display: flex;
		flex-direction: column;
		border-top: 10px solid #f5f5f5;
		padding: 10px 10px;
		.content-swide{
			padding: 5px 5px;
			.ulist-item{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 1vh;
				.info{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 60%;

					view{
						display: flex;
						justify-content: space-between;
						font-size: small;
						color: #555500;
					}
				}
				.news-image{
					width: 30%;
					flex-direction: row-reverse;
					display: flex;
					image{
					width: 15vh;
					height: 15vh;
						
					}
				}
			}
		}
		
	}
</style>
