<template>
	<div class="cart">
		<div class="title">购物清单</div>
		<div v-if="cartList.length !== 0">
			<div class="cart-thead">
				<div class="th-cbx cell"><input type="checkbox" v-model="allChecked"> 全选 </div>
				<div class="th-goods cell">商品</div>
				<div class="th-price cell">单价</div>
				<div class="th-quantity cell">数量</div>
				<div class="th-sum cell">小计</div>
				<div class="th-action cell">操作</div>
				
			</div>
			<div class="cart-tbody">
				<div v-for="(item, index) in cartList" class="cart-tr">
					<div class="cell p-cbx">
						<input type="checkbox" v-model="item.checked">
					</div>
					<div class="cell p-goods">
						<span class="p-img p-goods-item">
	        				<router-link :to="'/product/' + item.product.id">
	        					<img :src="item.product.image">
	        				</router-link> 
						</span>
						<span class="item-msg p-goods-item">
							{{item.product.name}}
						</span>
					</div>
					<div class="cell p-price">￥{{item.product.cost}}</div>
					<div class="cell p-quantity"> <span class="decrement" :class="{disabled: item.count < 2}" @click="handleDecrement(item)">-</span><input class="change-quantity" type="text" v-model="item.count"><span class="increment" @click="handleIncrement(item)">+</span> </div>
					<div class="cell p-sum">￥{{item.product.cost * item.count}}</div>
					<div class="cell p-action"><span class="p-delete" @click="handleProductDelete(item)">删除</span></div>
				</div>
			</div>
			<div class="cart-foot">
				<div class="option-box">
					<div class="f-selection-all"><input type="checkbox" v-model="allChecked">全选</div>
					<div class="f-operation">
						<span class="f-delete" @click="handleDeleteAllCheckedProducts">删除选择商品</span>
						<span class="f-like">移动到我的关注</span>
					</div>
					<div class="f-right">
						<div class="f-submit"></div>
						<div class="f-price-sum">
							<span>总价: <span class="f-price-sum-num">￥{{priceSum}}</span></span>
						</div>
						<div class="f-amount-sum">
							<span>已选择<span class="f-amount-sum-num"> {{allCheckedProductCount}} </span>件商品</span>
						</div>
					</div>

				</div>
			</div>
		</div>
		<p class="empty" v-else>
			购物车为空
		</p>
	</div>
</template>
<script>
	export default {

		computed: {

			allChecked: {
                get: function() {
                	var result;
                    result = this.checkedList.length === this.cartList.length;
                    return result;
                },

                set: function(newVal) {

                    this.cartList.forEach(function(item, index, arr) {
                        item.checked = newVal;
                    });

                }

			},

			cartList: function() {
				return this.$store.state.cartList;
			},

			checkedList: function() {
				var result;
				result = this.cartList.filter(function(item) {
					return item.checked;
				});
				return result;
			},
			priceSum: function() {
				var sum = 0;
				this.checkedList.forEach(function(item) {
					sum += item.product.cost * item.count;
				});
				return sum;
			},
			allCheckedProductCount: function() {
				var count = 0;
				this.checkedList.forEach(function(item) {
					count += parseInt(item.count);
				});
				return count;
			}

		},
		methods: {
			handleDecrement: function(item) {
				if(item.count > 1) {
					item.count -= 1;
				}			
			},
			handleIncrement: function(item) {
				item.count += 1;
			},
			handleProductDelete: function(item) {
				this.$store.commit('deleteProductFromCart', item.product.id);

			},
			handleDeleteAllCheckedProducts: function() {
				this.checkedList.forEach(item => {
						//这里必须使用箭头函数，因为箭头函数没有自己的this，函数体内的this是包含函数的this，即本组件实例
						this.$store.commit('deleteProductFromCart', item.product.id)
					}					
				);
			}
		}

	}
</script>

<style scoped lang="less">
.cart {
	border: 1px solid #e9e9e9;
	border-radius: 6px;
	width: 1200px;
	margin: 0 auto;

	.title {
		padding: 16px 32px;	
	}
	.empty {
		padding: 0 32px;
		color: red;
	}

	.cell {
		float: left;
		display: inline-block;			
	}

	.clear {
		content: '.';
		display: block;
		clear: both;
		height: 0;
		visibility: hidden;		
	}
	.cart-thead{
		padding: 6px 16px;
		background-color: #eee;
		border-bottom: 1px solid #dddee1;
		margin-bottom: 15px;
		&:after {
			.clear;
		}
		.th-cbx {
			width: 100px;	
		}
		.th-goods {
			width: 480px;
			padding-left: 20px;
		}
		.th-price, 
		.th-quantity,
		.th-sum,
		.th-action {
			width: 120px;
		}
	}

	.cart-tbody {
		padding-left: 16px;
		.cart-tr {

			&:after {
				.clear;
			}
			.p-cbx {
				width: 100px;
			}
			.p-goods {

				&:after {
					.clear;
				}
				width: 500px;
				.p-goods-item {
					display: inline-block;
					float: left;
				}
				.p-img img {
					width: 80px;
					height: 80px;
				}
				.item-msg {
					width: 420px;
					line-height: 24px;
				}
			}
			.p-price,
			.p-quantity,
			.p-sum,
			.p-action {
				width: 120px;
			}
			.p-action {
				.p-delete {
					cursor: pointer;
					&:hover {
						color: red;
					}
				}
			}
			.p-quantity {
				
				.span-disabled {
					cursor: default;
					color: #e9e9e9;					
				}
				.disabled {
					.span-disabled;
					&:hover {
						.span-disabled;
					}
				}
				.decrement,
				.increment {
					display: inline-block;
					border: 1px solid #cacbcb;
					width: 20px;
					height: 22px;
					text-align: center;
					vertical-align: middle;
					&:hover {
						cursor: pointer;
					}
				}
				.decrement {
					.span-disabled {
						cursor: not-allowed;
						color: #e9e9e9;					
					}
					&.disabled {
						.span-disabled;
						&:hover {
							.span-disabled;
						}
					}
					border-right: 0;
				}
				.increment {
					border-left: 0;
				}
				.change-quantity {
					border: 1px solid #cacbcb;
					color: #333;
					width: 42px;
					padding: 1px;
					height: 20px;
					font-size: 16px;
					text-align: center;
					vertical-align: middle;
				}
			}	
		}	
	}

	.cart-foot {
		.option-box {
			height: 50px;
			padding: 6px 0px 6px 16px;
			margin-top: 20px;	
			&:after {
				.clear;
			}
			.f-selection-all,
			.f-operation {
				float: left;
			}
			.f-selection-all {
				width: 100px;
				input {
					margin-right: 8px;
				}
			}
			.f-operation {
				width: 300px;
				.f-delete,
				.f-like {
					color: #666;
					&:hover {
						color: red;
						cursor: pointer;
					}
				}
			}
			.f-right {
				position: relative;
				float: right;
				width: 700px;
				.f-submit,
				.f-price-sum,
				.f-amount-sum {
					float: right;
					margin: 5px;
				}
				.f-submit {
					width: 96px;
				    height: 52px;
				    margin-right: 0;
				    background: url(../images/cart-submit-btn.png) 0 0 no-repeat;
				    &:hover {
				    	cursor: pointer;
				    }
				}
				.f-price-sum {
					.f-price-sum-num {
						color: red;
						font-weight: 700;
					}
				}
				.f-amount-sum {
					.f-amount-sum-num {
						color: red;
						font-weight: 700;
					}
				}				
			}


		}
	}


}



</style>