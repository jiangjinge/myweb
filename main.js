import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './router.js';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig = {
	mode: 'history',
	routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});


const store = new Vuex.Store({
	state: {
		//cartList: [{product: {}, count:1, checked: true}]
		cartList: []
	},
	getters: {

	},
	mutations: {
		//添加到购物车
		addToCart(state, payload) {
			//如果该商品已经存在则，商品数量加一, find返回的是元素本身
			var isAdded = state.cartList.find(item => item.product.id === payload.product.id);
			if(isAdded) {
				isAdded.count += parseInt(payload.num);
			} else {
				state.cartList.push({
					product: payload.product, 
					count: parseInt(payload.num),
					checked: true
				});
			}

		},
		//从购物车中删除
		deleteProductFromCart(state, productId) {
			var index = state.cartList.findIndex(function(item) {
				return item.product.id === productId;
			});
			if(index !== -1) {
				state.cartList.splice(index, 1);
			}
		}
	},
	actions: {

	}

});

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => {
		return h(App);
	}
});





