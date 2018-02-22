<template>
	<div class="main-content">
		<div class="header">
			<div class="header-logo">
				<router-link to="/list">
					logoLOGOlogo
				</router-link>
			</div>

			<div class="header-search">
				<input class="header-search-kw-input" type="text" value="手机">
				<label class="header-search-text">搜索</label>
			</div>
			<div class="header-cart">
				<span class="header-cart-text"><router-link to="/cart">我的购物车</router-link></span>
				<i class="header-cart-icon"></i>				
				<i class="header-cart-amount">({{cartListLength}})</i>
			</div>

		</div> 
		<router-view></router-view>
	</div>

</template>

<script>
	export default {
		computed: {
			cartListLength() {
				var count = 0;
				this.$store.state.cartList.forEach(function(item) {
					count += item.count;
				});
				return count;
			}
		}
	}
</script>

<style lang="less">
body {
	overflow-y: scroll;
}
.main-content {
	font: 14px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
	color: #666;	
	width: 1200px;
	padding: 0;
	margin: 0 auto;
	.clear {
        content: '.';
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;     		
	}
	.header {
		margin: 20px 0;

		&:after {
			.clear;
		}
		.header-logo {
			a {
				display: block;
				float: left;
				width: 298px;
				height: 50px;
				font-size: 30px;
				line-height: 45px;
				color: #f30213;
				text-decoration: none;
			}
		}
		.header-search {
			float: left;
			width: 500px;
			padding-left: 100px;
			margin-top: 10px;
			.header-search-kw-input {
				float: left;
				width: 300px;
				height: 20px;
				padding: 5px 3px;
				font-size: 14px;
				border: 2px solid #f30213;
				color: #999;
			}
			.header-search-text {
				float: left;
				display: block;
				width: 100px;
				height: 34px;
				background-color: #f30213;
				color: white;
				text-align: center;
				font-size: 16px;
				line-height: 32px;
				&:hover {
					cursor: pointer;
				}
			}
		}
		.header-cart {
			position: relative;
			float: left;
			width: 125px;
			height: 32px;
			border: 1px solid #eee;
			padding: 0 0 0 10px;
			margin-top: 10px;
			.header-cart-icon {
				display: block;
				position: absolute;
				left: 86px;
				top: 8px;
				width: 16px;
				height: 16px;
				background: url('./images/search.cart.png') no-repeat 0 0;

			}
			.header-cart-amount {
				display: block;
				position: absolute;
				font-size: 12px;
				font-style: normal;
				text-align: center;
				width: 18px;
				left: 102px;
				top: 3px;
				color: red;
			}
			.header-cart-text {
				display: inline-block;
				padding: 5px;
				a {
					text-decoration: none;
					&:hover {
						color: red;
					}
				}
			}

		}
	}
}
</style>