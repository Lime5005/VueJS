import { createStore } from 'vuex';

import productModule from './modules/products.js';
import shopcartModule from './modules/shopCart.js';

const store = createStore({
    modules: {
        prods: productModule,
        cart: shopcartModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        login(state) {
            console.log('login!!!!!!!!!!!!');
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        isAuth(state) {
            return state.isLoggedIn;
        }
    }
})

export default store;