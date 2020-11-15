import { createStore } from 'vuex';

import productModule from './modules/products.js';
import shopcartModule from './modules/shopCart.js';

const store = createStore({
    modules: {
        prods: productModule,
        cart: shopcartModule
    }
})

export default store;