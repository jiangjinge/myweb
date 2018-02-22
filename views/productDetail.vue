<template>
    <div class="product-info-div" v-if="product.length != 0">
        <div class="product">
            <div class="product-img">
                <div class="img-main">
                    <img :src="imgMainPreviewScr" class="img-main-preview">
                </div>
                <div class="img-small">
                    <div class="img-small-pre" :class="{disabled: previewPreDisabled}" @click="handlePreviewPre"> < </div>
                    <!-- 假设以下10张图片是该商品相关小图     -->
                    <div v-for="item in filteredImgSmallPreviewScrs" class="img-small-cell" @mouseenter="handleImgSmallHover(item)">
                        <img :src="item">
                    </div>
                    <div class="img-small-next"  :class="{disabled: previewNextDisabled}" @click="handlePreviewNext"> > </div>
                </div>
            </div>
            <div class="product-info">
                <h1 class="product-name">{{ product.name }}</h1>
                <div class="product-cost">¥{{ product.cost }}</div>
                <div class="cart-operation">
                    <span class="quantity">
                        <input type="text" v-model="num" @keyup="validateQuantityInputNum">                       
                        <span class="increment" @click="handleIncrement">+</span>
                        <span class="decrement" @click="handleDecrement" :class="{disabled: num < 2}">-</span>
                    </span>
                    <span class="product-add-cart" @click.prevent="handleAddToCart">加入购物车</span>
                    <div class="add-to-cart-tip" :class="{tipOn: tipOn}">加入购物车成功</div>
                </div>
            </div>
        </div>
        <div class="product-detail">
            <div class="detail-tab-main">
                <ul>
                <li :class="{current: detailTabCurrent==='description'}"   @click="handleDetailTabClick('description')">商品介绍</li>
                <li  :class="{current: detailTabCurrent==='specification'}"   @click="handleDetailTabClick('specification')">规格与包装</li>
                <li  :class="{current: detailTabCurrent==='customerService'}"   @click="handleDetailTabClick('customerService')">售后保障</li>
                <li  :class="{current: detailTabCurrent==='evaluation'}"   @click="handleDetailTabClick('evaluation')">商品评价</li>
                </ul>
            </div>
            <img v-for="n in 5" :src="'http://ordfm6aah.bkt.clouddn.com/shop/' + n + '.jpeg'">
        </div>
    </div>
</template>

<script>
    import $ from '../libs/util.js';

    export default {
        data() {
            return {
                product: [],
                detailTabCurrent: 'description',
                imgMainPreviewScr: '',
                imgSmallPreviewScrs: [],
                //缩略图数组
                filteredImgSmallPreviewScrs: [],
                //缩略图数组中最后一个元素在imgSmallPreviewScrs中的index
                curLastIndex: 0,
                num: 1,
                tipOn: false
            }
        },
        computed: {
            previewPreDisabled: function() {
                if(this.curLastIndex <= 4) {
                    return true;
                } else {
                    return false;
                }
            },
            previewNextDisabled: function() {
                if(this.curLastIndex < this.imgSmallPreviewScrs.length - 1) {
                    //如果还不是最后一个就可以点next
                    return false;
                } else {
                    return true;
                }

            }
        },

        methods: {
            //从后台获取到当前id的product，后台返回的product是包含product信息对象的数组，所以取数组的第一个元素
            getProduct() {
                $.ajax.get('/product' + this.$route.params.id).then(res => {
                    this.product = res.data[0];
                    this.imgMainPreviewScr = this.product.image;
                    //一般来说，是从product中获取到preview的缩略图的，这里直接用一个数组代替,每个数组大小为从1-10的随机数
                    var len = Math.floor(Math.random() * 10 + 1);
                    for(var i = 1 ; i <= len; i++ ) {
                        this.imgSmallPreviewScrs.push('http://ordfm6aah.bkt.clouddn.com/shop/' + i + '.jpeg');
                    }
                    //设置要显示的缩略图
                    this.filteredImgSmallPreviewScrs = this.imgSmallPreviewScrs.filter(function(item, index) {
                        return index <= 4;
                    });
                    this.curLastIndex = this.filteredImgSmallPreviewScrs.length - 1;


                });

            },
            handleDetailTabClick(cur) {
                this.detailTabCurrent = cur;
            },
            handleImgSmallHover(item) {
                this.imgMainPreviewScr = item;

            },
            handlePreviewNext() {
                //如果当前显示的最后一个缩略图还不是最后一个全部缩略图的最后一个，点击下一个后
                if(this.curLastIndex < this.imgSmallPreviewScrs.length - 1 ) {

                    //清空然后再往里push新的数组元素，因为只能使用数组更新的方法更新数组才会触发双向绑定响应
                    this.filteredImgSmallPreviewScrs.splice(0, this.filteredImgSmallPreviewScrs.length);

                    //如果还有多于5个
                    if(this.curLastIndex + 5 <= this.imgSmallPreviewScrs.length -1) {
                        //这里必须使用箭头函数
                        this.imgSmallPreviewScrs.forEach((item, index) => {
                            if(index > this.curLastIndex && index <= this.curLastIndex + 5) {
                                this.filteredImgSmallPreviewScrs.push(item);
                            }
                        });
                        this.curLastIndex += 5;
                    } else {

                        //如果不够，则直接返回最后5个即可
                        //这里必须使用箭头函数
                        this.imgSmallPreviewScrs.forEach((item, index) => {
                            if(index >= this.imgSmallPreviewScrs.length - 5 && index <= this.imgSmallPreviewScrs.length - 1) {
                                this.filteredImgSmallPreviewScrs.push(item);
                            }
                        });
                        this.curLastIndex = this.imgSmallPreviewScrs.length - 1;
                    }
                }
            },
            handlePreviewPre() {

                //如果当前缩略图的第一个index不是0，说明前面还有，可以点击pre
                if(this.curLastIndex - 4 > 0 ) {
                    //先清空
                    this.filteredImgSmallPreviewScrs.splice(0, this.filteredImgSmallPreviewScrs.length);
                    
                    //如果前面还有多于5个
                    if(this.curLastIndex - 9 > 0) {
                        //这里必须使用箭头函数
                        this.imgSmallPreviewScrs.forEach((item, index) => {
                            if(index >= this.curLastIndex - 9 && index <= this.curLastIndex - 5) {
                                this.filteredImgSmallPreviewScrs.push(item);
                            }
                        });
                        this.curLastIndex = this.curLastIndex - 5;

                    } else {
                        //取前5个返回
                        //这里必须使用箭头函数
                        this.imgSmallPreviewScrs.forEach((item, index) => {
                            if(index >= 0  && index < 5) {
                                this.filteredImgSmallPreviewScrs.push(item);
                            }
                        });
                        this.curLastIndex = 4;

                    }

                }

            },
            handleAddToCart() {
                var result = {
                    product: this.product,
                    num: this.num
                };
                this.$store.commit('addToCart', result);
                this.tipOn = true;

                var timeoutHandler = setTimeout(() => {
                        this.tipOn = false;
                        clearTimeout(timeoutHandler);
                }, 500);

            },
            handleIncrement() {
                this.num++;
            },
            handleDecrement() {
                if (this.num > 1) {
                    this.num--;
                }
            },
            validateQuantityInputNum() {
                this.num = this.num.replace(/[^\d]/g,'');
                if(this.num == '') {
                    this.num = 1;
                }

            }

        },
        mounted() {
            this.getProduct();
        }

    }
</script>
<style scoped lang="less">
    
    .product-info-div {
        position: relative;
        width: 100%;
        .product {
            position: relative;
            overflow: hidden;
            .product-img {
                position: relative;
                width: 400px;
                float: left;
                .img-main {
                    .img-main-preview {
                        width: 100%;
                    }                    
                }
                .img-small {
                    position: relative;
                    .img-small-pre,
                    .img-small-next {
                        width: 40px;
                        float: left;
                        font-size: 35px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        font-weight: 600;
                        color: #999;
                        &.disabled {
                            color: #eee;
                            &:hover {
                                cursor: default;
                            }
                        }
                        &:hover {
                            cursor: pointer;
                        }

                    }
                    .img-small-cell {
                        width: 60px;
                        float: left;
                        border: 2px solid transparent;
                        text-align: center;
                        img {
                            width: 50px;
                            height: 50px;
                        }
                        &:hover {
                            border: 2px solid red;
                        }
                    }

                }
            }
            .product-info {
                width: 700px;
                float: left;
                padding: 150px 0 250px;
                .product-cost {
                    font-size: 25px;
                    color: red;
                }
                .cart-operation {
                    position: relative;
                    margin-top: 20px;
                    .quantity {
                        display: inline-block;
                        position: relative;
                        width: 58px;
                        height: 44px;
                        border: 1px solid #ccc;
                        vertical-align: middle;
                        input {
                            display: block;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 43px;
                            height: 42px;
                            line-height: 42px;
                            text-align: center;
                            border: 0;
                            font-size: 12px;
                        }
                        .incAndDec {
                            width: 15px;
                            height: 22px;
                            display: block;
                            position: absolute;
                            text-align: center;
                            border: 1px solid #ccc;
                            color: #666;
                            &:hover {
                                cursor: pointer;
                            }
                        }
                        .increment {
                            .incAndDec;
                            right: -1px;
                            top: -1px;
                            border-bottom: none;
                            color: #666;

                        }
                        .decrement {
                            .incAndDec;
                            right: -1px;
                            bottom: -1px;
                            &.disabled {
                                cursor: not-allowed;
                                color: #ccc;
                                &:hover {
                                    cursor: not-allowed;
                                }
                            }
                        }
                    }
                    .product-add-cart {
                        display: inline-block;
                        vertical-align: middle;
                        background-color: #df3033;
                        color: white;
                        height: 46px;
                        line-height: 46px;
                        padding: 0px 23px;
                        font-size: 18px;
                        font-family: "microsoft yahei";
                        font-weight: 700;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .add-to-cart-tip {
                        display: none;
                        position: absolute;
                        bottom: 50px;
                        left: 45px;
                        width: 160px;
                        background-color: rgba(0, 0, 0, 0.6);
                        color: white;
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 40px;
                        text-align: center;
                        border-radius: 6px;
                        &.tipOn {
                            display: block;
                        }
                    }

                }

            }
        }
        .product-detail {
            text-align: center;
            .detail-tab-main{
                text-align: center;
                background-color: #f7f7f7;
                border: 1px solid #eee;
                border-bottom: 1px solid #e4393c;
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    li {
                        display: inline-block;
                        padding: 10px 25px;
                        cursor: pointer;
                        &:hover {
                            color: #f00;
                        }

                        &.current {
                            background-color: #e4393c;
                            color: #fff;
                            cursor: default;
                        }
                    }
                }
            }

        }
    }




</style>
