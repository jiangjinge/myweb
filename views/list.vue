<template>
    <div class="list-div">
        <div v-if="list.length" class="list-content">
            <div class="top-nav-bar">
                <div class="nav-left" @mouseenter="handleShowLevel1" @mouseleave="handleHideLevel1">
                    <div class="nav-left-head">全部分类</div>
                    <div class="nav-left-hide">
                        <div class="nav-left-hide-content">
                            <div class="category-level1"  v-show="lv1Showed === true">
                                <ul class="category-level1-list">
                                    <li class="lv1-1" @mouseenter="handleShowLevel2(1)"><a>手机</a><span>/</span><a>运营商</a><span>/</span><a>数码</a></li>
                                    <li class="lv1-2" @mouseenter="handleShowLevel2(2)"><a>食品</a><span>/</span><a>饮料</a><span>/</span><a>酒类</a><span>/</span><a>生鲜</a><span>/</span><a>特产</a></li>
                                    <li class="lv1-3"  @mouseenter="handleShowLevel2(3)"><a>图书</a><span>/</span><a>音像</a><span>/</span><a>电子书</a></li>
                                    <li class="lv1-4"  @mouseenter="handleShowLevel2(4)"><a>机票</a><span>/</span><a>酒店</a><span>/</span><a>旅游</a><span>/</span><a>生活</a></li>
                                    <li class="lv1-5"  @mouseenter="handleShowLevel2(5)"><a>房产</a><span>/</span><a>汽车</a><span>/</span><a>汽车用品</a></li>
                                    <li class="lv1-6"  @mouseenter="handleShowLevel2(6)"><a>美妆</a><span>/</span><a>个人护理</a></li>
                                    <li class="lv1-7"  @mouseenter="handleShowLevel2(7)"><a>零食</a><span>/</span><a>茶酒</a><span>/</span><a>进口食品</a></li>
                                    <li class="lv1-8"  @mouseenter="handleShowLevel2(8)"><a>大家电</a><span>/</span><a>生活电器</a></li>
                               </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 1">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 2">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2"  v-show="lv2ShowedItemId === 3">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 4">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>                            
                            <div class="category-level2" v-show="lv2ShowedItemId === 5">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>                                    
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 6">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>                                    
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>                                    
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>                                    
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 7">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>                                    
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>
                            <div class="category-level2" v-show="lv2ShowedItemId === 8">
                                <ul class="category-level2-list" >
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                    <li><span class="cell ct">手机通讯<i>></i></span><span class="cell">手机</span><span class="cell">对讲机</span><span class="cell">以旧换新</span><span class="cell">手机维修</span></li>
                                </ul>
                            </div>



                        </div>
                    </div>

                </div>
                <div class="nav-right">
                    <ul class="nav-right-list">
                        <li>超市</li>
                        <li>生鲜</li>
                        <li>服装</li>
                        <li>美妆</li>
                        <li>金融</li>
                        <li>全球购</li>
                    </ul>
                </div>
            </div>
            <div class="crumb-bar">
                <ul class="crumb-nav">
                    <li class="crumb-nav-all">
                        <span class="crumb-nav-all-main">全部</span>
                        <span class="crumb-arrow-right">></span>
                    </li>
                    <li class="crumb-nav-search">
                        <input id="crumb-nav-search-kw-id" class="crumb-nav-search-kw" type="text" value="手机" @focus="handleSearchKWFocus">
                        <input class="crumb-nav-search-btn" type="text" value="">
                        
                    </li>
                </ul>
            </div>
            <div class="attrs-nav">
                <div class="brand-line">
                    <span class="title">品牌：</span>
                    <span v-for="item in brands" class="brand-list" :class="{brandOn: item === filterBrand }" @click="handleFilterBrand(item)">{{item}} </span> 
                </div>
                <div class="price-line attrs-nav-line">
                    <div class="price-line-key attrs-nav-key">价格：</div>
                    <ul class="price-line-list attrs-nav-list">
                        <li @click="handlePriceRange(0, 499)" :class="{priceOn: filterPriceRange.length != 0 && filterPriceRange[0].a == 0 && filterPriceRange[0].b == 499 }">0-499</li>
                        <li @click="handlePriceRange(500, 999)" :class="{priceOn: filterPriceRange.length != 0 && filterPriceRange[0].a == 500 && filterPriceRange[0].b == 999 }">500-999</li>
                        <li @click="handlePriceRange(1000, 1999)" :class="{priceOn: filterPriceRange.length != 0 && filterPriceRange[0].a == 1000 && filterPriceRange[0].b == 1999 }">1000-1999</li>
                        <li @click="handlePriceRange(2000)" :class="{priceOn: filterPriceRange.length != 0 && filterPriceRange[0].a == 2000 }"> >2000</li>
                    </ul>
                </div>
                <div class="attrs-nav-hide attrs-nav-line" :class="{show: opened}">
                    <div class="attrs-nav-key">分类：</div>
                    <ul class="attrs-nav-list">
                        <li>分类一</li>
                        <li>分类二</li>
                        <li>分类三</li>
                        <li>分类四</li>
                        <li>分类五</li>
                    </ul>
                </div>
                <div class="attrs-nav-hide attrs-nav-line" :class="{show: opened}">
                    <div class="attrs-nav-key">分类：</div>
                    <ul class="attrs-nav-list">
                        <li>分类一</li>
                        <li>分类二</li>
                        <li>分类三</li>
                        <li>分类四</li>
                        <li>分类五</li>
                    </ul>
                </div>
                <div class="attrs-nav-hide attrs-nav-line" :class="{show: opened}">
                    <div class="attrs-nav-key">分类：</div>
                    <ul class="attrs-nav-list">
                        <li>分类一</li>
                        <li>分类二</li>
                        <li>分类三</li>
                        <li>分类四</li>
                        <li>分类五</li>
                    </ul>
                </div>                
                <div class="attrs-nav-extra">
                        <span class="attrs-nav-extra-more" :class="{opened: opened}" @click="handleOpened">{{extraMoreText}}
                            <i></i>
                        </span>
                </div>
            </div>

            <div class="sort-line">
                <span class="sort-key" :class="{sortOn: sortBy === 'default'}" @click="handleFilterSort('default')">默认</span>
                <span class="sort-key" :class="{sortOn: sortBy === 'sales'}" @click="handleFilterSort('sales')">销量</span>
                <span class="sort-key" :class="{sortOn: sortBy === 'cost', sortCostDescent: sortCostDescent === true, sortCostAscent: sortCostDescent === false }" @click="handleFilterSort('cost')">价格<i></i></span>
                <span class="sort-key" :class="{sortOn: sortBy === 'comments'}"  @click="handleFilterSort('comments')">评论数</span>
                <span class="sort-key" :class="{sortOn: sortBy === 'new'}"  @click="handleFilterSort('new')">新品</span>
            </div>
            <div class="product-div">
                <div v-if="filteredAndOrderedList.length != 0" class="product-div-main">
                    <Product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></Product>
                </div>
                <div v-else>
                    暂无相关商品
                </div>
            </div>
        </div>
        <p v-else>暂无相关商品</p>
    </div>
</template>

<script>
    import Product from '../components/product.vue';
    import $ from '../libs/util.js';

    export default {
        components: { Product },
        data() {
            return {
                list: [],
                filterBrand: '',
                //filterPriceRange format : [{a: 100, b:300}]
                filterPriceRange: [],
                sortBy: 'default',
                sortCostDescent: '',
                opened: false,
                extraMoreText: '更多选项',
                lv1Showed: false,
                lv2ShowedItemId: ''
            }
        },
        computed: {

            brands() {
                let bd = [];
                this.list.forEach(item => {
                    if(bd.indexOf(item.brand) === -1) {
                        bd.push(item.brand);
                    }
                });
                return bd;
            },
            filteredAndOrderedList() {

                //按名牌过滤
                let list = [...this.list];
                if(this.filterBrand !== '') {
                    list = list.filter(item => item.brand === this.filterBrand );
                }

                //按价格区间过滤
                if(this.filterPriceRange.length != 0) {
                    list = list.filter(item => item.cost >= this.filterPriceRange[0].a && item.cost <= this.filterPriceRange[0].b);
                }

                //排序          
                switch(this.sortBy) {
                    case 'sales':
                        list = list.sort((a, b) => b.sales - a.sales);
                        break;
                    case 'cost':
                        //默认是按照升序排序
                        if(this.sortCostDescent === false ) {
                           list = list.sort((a, b) => a.cost - b.cost); 
                        } else {
                            list = list.sort((a, b) => b.cost - a.cost);
                        }
                        break;
                    case 'comments':
                        list = list.sort((a, b) => b.comments - a.comments);
                        break;
                    case 'new':
                        list = list.sort((a, b) => this.dateToTimestamp(b.launchDate) - this.dateToTimestamp(a.launchDate));
                        break;
                }
                return list;
            }

        },
        methods: {

            getProductList() {
                $.ajax.get('/list').then(res => {
                    this.list = res.data;
                });
   
            },
            handleFilterBrand(item) {
                //如果之前已经选中该item，再次点击时，取消选中
                if(this.filterBrand === item) {
                    this.filterBrand = "";
                } else {
                    this.filterBrand = item; 
                }
            },

            handleFilterSort(sortBy) {

                //设置排序目标
                this.sortBy = sortBy;
                //如果是按价格排序，则还需设置升序还是降序
                if(this.sortBy === 'cost') {
                    //第一次点击销量，按照价格从低到高排序， 后续点击设置为与上次相反
                    if(this.sortCostDescent === '') {
                        this.sortCostDescent = false;
                    } else {
                        this.sortCostDescent = !this.sortCostDescent;
                    }   
                 
                } else {
                    //如果选择的是其他非cost排序，需要将sortCostDescent和sortCostAscent类去掉，设置为空字符串即可，因为上面:class用的是恒等于true/false
                    this.sortCostDescent = '';
                }

            },
            handleSearchKWFocus() {
                document.getElementsByClassName('crumb-nav-search-kw')[0].select();
            },
            handleOpened() {
                this.opened = !this.opened;
                if(this.opened === false) {
                    this.extraMoreText = "更多选项"; 
                } else {
                    this.extraMoreText = "收起";
                }
            },
            handleShowLevel1() {
                this.lv1Showed = true;
            },
            handleHideLevel1() {
                this.lv1Showed = false;
                this.lv2ShowedItemId = '';

            },
            handleShowLevel2(id) {
                this.lv2ShowedItemId = id;
            },
            handlePriceRange(a = 0, b = Number.MAX_VALUE) {
                //如果之前已经选中过，再次点击时取消选中
                if(this.filterPriceRange.length != 0 && this.filterPriceRange[0].a == a && this.filterPriceRange[0].b == b) {
                    this.filterPriceRange = [];
                    return;
                }

                //先清空
                this.filterPriceRange = [];
                this.filterPriceRange.push({
                    a: a,
                    b: b
                });

            },
            dateToTimestamp(dateString) {
                if(dateString) {
                    //dateString format: 2016-12-10
                    var ymd = dateString.split('-');
                    if(ymd.length === 3) {
                        return new Date(parseInt(ymd[0]), parseInt(ymd[1]) - 1, parseInt(ymd[2]));
                    }
                }
            }

        },
        mounted() {
            this.getProductList();
        }    
    }
</script>

<style scoped lang="less">

    .list-div {
        
        .clear {
            content: '.';
            display: block;
            clear: both;
            height: 0;
            visibility: hidden;     
        }

        .list-content {

            .top-nav-bar {
                position: relative;
                margin-bottom: 20px;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    top: 35px;
                    border-bottom: 2px solid red;
                }
                &:after {
                    .clear;
                }

                .nav-left {
                    float: left;
                    font-size: 12px;

                    .nav-left-head {
                        width: 200px;
                        color: white;
                        background-color: red;
                        font-size: 16px;
                        line-height: 35px;
                        text-align: center;
                        &:hover {
                            cursor: pointer;
                        }
                    }

                    .nav-left-hide {
                        .nav-left-hide-content {
                            .category-level1 {

                                &.lv1Showed {
                                    display: block;
                                }

                                display: block;
                                background-color: #fff;
                                position: absolute;
                                z-index: 10;
                                width: 190px;
                                padding-top: 10px;
                                padding-left: 10px;
                                -webkit-box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);

                                -moz-box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);

                                box-shadow: -1px 3px 12px -1px rgba(0,0,0,.3);

                                .category-level1-list {
                                    list-style: none;
                                    padding: 0;
                                    margin: 0;
                                    li {
                                        float: left;
                                        padding-bottom: 5px;
                                        width: 100%;
                                        a {
                                            text-decoration: none;

                                            &:hover {
                                                cursor: pointer;
                                                color: red;
                                            }
                                        }
                                        span {
                                            display: inline-block;
                                            padding: 0 4px;
                                        }
                                        &:hover {
                                            background-color: #ccc;
                                        }
                                    }
                                }


                            }
                            .category-level2 {
                                display: block;
                                background-color: #f7f7f7;;
                                position: absolute;
                                z-index: 10;
                                left: 200px;
                                width: 1000px;
                                margin-top: 2px;
                                -webkit-box-shadow: 1px 3px 5px -1px rgba(0,0,0,.3);

                                -moz-box-shadow: 1px 3px 5px -1px rgba(0,0,0,.3);

                                box-shadow: 1px 3px 5px -1px rgba(0,0,0,.3);


                                .category-level2-list {
                                    list-style: none;
                                    padding: 0;
                                    margin: 0;
                                    li {

                                        padding: 10px 0;
                                        border-bottom: 1px solid #eee;

                                        .cell {
                                            display: inline-block;
                                            padding: 0 5px;
                                            &:hover {
                                                cursor: pointer;
                                                color: red;
                                            }
                                            border-left: 1px solid #ccc;
                                        }
                                        .ct {
                                            border-left: 0;
                                            i {
                                                font-style: normal;
                                                display: inline-block;
                                                padding: 0 3px;

                                            }
                                        }
                                    }

                                }

                                &.lv2Showed {
                                    display: block;
                                }
                            }
                        }
                    }
                }
                .nav-right {
                    float: left;
                    position: absolute;
                    left: 201px;
                    font-size: 16px;
                    line-height: 35px;

                    .nav-right-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        li {
                            float: left;
                            width: 150px;
                            text-align: center;
                            &:hover {
                                cursor: pointer;
                                color: red;
                            }
                        }

                    }
                }
            }

            .crumb-bar {
                margin: 0;
                padding: 0;
                ul.crumb-nav {
                    &:after {
                        .clear;
                    }
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    li {
                        float: left;
                    }
                    .crumb-nav-all {
                    }
                    .crumb-nav-search {
                        position: relative;
                        .crumb-nav-search-kw {
                            border: 1px solid #ccc;
                            float: left;
                            width: 125px;
                            padding: 0 25px 0 12px;
                            font-size: 14px;
                            line-height: 25px;
                            height: 21px;
                            margin-left: 5px;
                        }
                        .crumb-nav-search-btn {
                            position: absolute;
                            left: 145px;
                            top: 5px;
                            float: left;
                            border: none;
                            width: 13px;
                            height: 12px;
                            background: url('../images/search.icon.png') no-repeat 0 0;
                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .attrs-nav {
                position: relative;
                margin-top: 16px;
                border-top: 3px solid #eee;
                padding-top: 5px;
               .attrs-nav-line {
                    padding: 3px 5px;
                    border-bottom: 1px dashed #eee;


                    .attrs-nav-key {
                        float: left;
                        padding: 5px 0;
                    }
                    .attrs-nav-list {
                        float: left;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        li {
                            float: left;
                            padding: 5px 10px;
                            border: 1px solid transparent;
                            &:hover {
                                cursor: pointer;
                                color: red;
                            }
                        }
                    }
                    &:after {
                        .clear;
                    }
               }

                .brand-line {
                    border-bottom: 1px dashed #eee;
                    padding: 5px;
                    padding-bottom: 10px;
                    .title {
                        display: inline-block;
                        width: 50px;
                    } 
                    .brand-list-item {
                        border: 1px solid #e9eaec;
                        padding: 2px 6px;
                        margin-right: 6px;
                        border-radius: 4px;
                        cursor: pointer;               
                    }
                    .brand-list-item-hover {
                        border: 1px solid rgba(255,0,0,.6);   
                    }
                    .brand-list {
                        .brand-list-item;
                        &:hover {
                            .brand-list-item-hover;
                        }
                        &.brandOn {
                            background: #e4393c;
                            color: #fff;
                            border-color: #e4393c;
                        }
                    }                                     
               }
               .price-line {
                    .price-line-list {

                        .priceOn {
                            border: 1px solid #e4393c;
                            border-radius: 6px;                          
                        }
                    }
               }
               .attrs-nav-hide {
                    display: none;
                    &.show {
                        display: block;
                    }
               }


               .attrs-nav-extra {
                    text-align: center;
                    border-top: 1px solid #ddd;
                    margin-top: -1px;
                    &:hover {
                        border-top-color: red;
                        color: red;
                        .attrs-nav-extra-more {
                            border-color: red;
                            border-top-color: white;
                            i {
                                background-position: 4px -10px;
                            }
                            &.opened {
                                i {
                                    background-position: 4px -44px;
                                }
                            }
                        }
                    }
                    .attrs-nav-extra-more {
                        position: relative;
                        display: inline-block;
                        padding: 3px 39px 3px 16px;
                        margin-top: -1px;
                        border: 1px solid #ddd;
                        border-top-color: white;
                        i {
                            position: absolute;
                            top: 4px;
                            right: 16px;
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            background: url('../images/search.ele.png') no-repeat 4px 7px;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                        &.opened {
                            i {
                               background-position: 4px -27px; 
                            }
                        }
                    }

               }

            }

            .sort-list-item {
                position: relative;
                border: 1px solid #e9eaec;
                padding: 2px 6px;
                cursor: pointer;
                float: left;
                margin-right: -1px;               
            }
            .sort-list-item-hover {
                position: relative;
                border: 1px solid red;
                z-index: 1;   
            }
            .sort-line {
                position: relative;
                margin-top: 16px;
                margin-bottom: 25px;
                &:after {
                    .clear;
                }
                .sort-key {
                    .sort-list-item;
                    &:hover {
                        .sort-list-item-hover;
                    }
                    &.sortOn {
                        background: #e4393c;
                        color: #fff;
                        border-color: #e4393c;                        
                    }
                    i {
                        dispaly: none;
                        position: absolute;
                        width: 13px;
                        height: 12px;
                        font-size: 0px;
                        overflow: hidden;
                        top: 6px;
                        right: 5px;  
                        background: url('../images/search.ele.png') no-repeat 999px 999px;                      
                    }
                    &.sortCostDescent,
                    &.sortCostAscent {
                        position: relative;
                        padding-right: 22px;
                    }
                    &.sortCostDescent {
                        i {
                            display: inline-block;
                            background: url('../images/search.ele.png') no-repeat 0 -203px; 
                        }
                    }
                    &.sortCostAscent {
                        i {
                            display: inline-block;
                            background: url('../images/search.ele.png') no-repeat 0 -225px; 
                        }
                    }
                }
            }
        }
    }



</style>
