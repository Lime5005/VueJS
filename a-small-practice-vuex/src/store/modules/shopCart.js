export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload;
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProductFromCart(state, payload) {
            const prodId = payload.productId;
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    // We should not use mutations in components directly, so we need actions:
    actions: {
        addToShopcart(context, payload) {
            const prodId = payload.id;
            const products = context.rootGetters['prods/products'];
            const product = products.find(prod => prod.id === prodId);
            context.commit('addProductToCart', product);
        },
        removeFromShopcart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    },
    getters: {
        items(state) {
            return state.items;
        },
        total(state) {
            return state.total;
        },
        qty(state) {
            return state.qty;
        }
    }

}