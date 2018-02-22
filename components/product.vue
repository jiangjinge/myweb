<template>
	<div class="product">
        <router-link :to="'/product/' + info.id" class="product-main">
            <img :src="info.image">
            <div class="product-cost">¥{{ info.cost }}</div>
            <h4 class="product-name">{{ info.name }}</h4>
            <div class="operate">
            	<span class="contrast" :class="{contraston: contrastOn}" @click.prevent="handleToggleContrast"><i></i>对比</span>
            	<span class="like" :class="{likeon: likeOn}" @click.prevent="handleToggleLike"><i></i>关注</span>
            	<span class="product-add-cart" @click.prevent="handleAddToCart"><i></i>加入购物车</span> 
            </div>
        </router-link>	
        <div class="added-to-cart-tip" :class="{tipon:tipOn}">加入购物车成功</div>
    </div>
</template>

<script type="text/javascript">
	export default {
		props: {
			info: Object
		},
		data() {
			return {
				contrastOn: false,
				likeOn: false,
				tipOn: false
			}
		},
		methods: {
			handleAddToCart() {
				var result = {
					product: this.info,
					num: 1
				};
				this.$store.commit('addToCart', result);
				//弹出加入购物车成功的提示框, 提示框显示1秒钟
				this.tipOn = true;
				var timeoutHandler = setTimeout(() => {
						this.tipOn = false;
						clearTimeout(timeoutHandler);
				}, 500);


			},
			handleToggleContrast() {
				this.contrastOn = !this.contrastOn;
			},
			handleToggleLike() {
				this.likeOn = !this.likeOn;
			}
		}
	};
</script>
<style scoped lang="less">

	.product {
		position: relative;
		width: 25%;
		float: left;

		a {
	        text-decoration: none;
	        color: black;
	    }
        .added-to-cart-tip {
        	display: none;
            position: absolute;
            left: 50px;
            top: 300px;
            width: 160px;
            height: 60px;
            background-color: rgba(0, 0, 0, 0.7);
            font-size: 16px;
            font-weight: 700;
            line-height: 60px;
            padding-left: 35px;
            border-radius: 6px;
            color: white;
            &.tipon {
            	display: block;
            }
        }	    


		.product-main {
			display: block;
			text-align: center;
			overflow: hidden;
			padding: 15px;
			border: 1px solid #fff;
			border-radius: 6px;
			&:hover {
				border: 1px solid #dddee1;				
			}
			h4 {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			img {
				width: 100%;
			}
			.product-name {
				overflow: hidden;
			}
			.operate {
				overflow: hidden;
				span {
					position: relative;
					display: inline-block;
					padding: 0 3px 0 24px;
					border: 1px solid #DDD;
					float: left;
					&:hover {
						position: relative;
						border: 1px solid #e4393c;
						z-index: 1;						
					}				
				}

				.operate-like-i-base {
					position: absolute;
					top: 3px;
					left: 4px;
					dispaly: inline-block;
					width: 18px;
					height: 18px;
			        font-size: 0;					
				}
				.like {
					margin-left: -1px;
					i {
						.operate-like-i-base;
				        background: url('../images/search.ele.png') no-repeat 0 -413px;
					}
				}
				.likeon {
					i {
						.operate-like-i-base;
						background: url('../images/search.ele.png') no-repeat 0 -436px;
					}
				}
				.product-add-cart {
					margin-left: -1px;
					text-align: center;
					color: #e4393c;
					padding-left: 26px;
					i {
						position: absolute;
						dispaly: inline-block;
						top: 3px;
						left: 4px;
						width: 18px;
						height: 18px;
						margin-right: 30px;
						background: url('../images/search.ele.png') no-repeat 0 -272px;
						text-align: center;
						color: #e4393c;						
					}
				}
				.contrast i {
					position: absolute;
					top: 5px;
					left: 4px;
					border: 1px solid #ccc;
					dispaly: inline-block;
					width: 12px;
					height: 12px;
			        background: url('../images/search.ele.png') no-repeat 9999px 9999px;
			        font-size: 0;					
				}
				.contraston {
					color: #e4393c;
					i {
						background-position: -1px -107px;
						border-color: #e4393c;						
					}
				}
			}

		}

	}



</style>
