import { createApp } from 'vue';
import { createStore } from 'vuex';
/* one App can have only one store, but more than one state */
import App from './App.vue';

const numberModule = {
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        addTen(state, payload) {
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000)
        },
        addTen(context, payload) {
            console.log(context);
            context.commit('addTen', payload);
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 5;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        }
    }
}

const store = createStore({
    modules: {
        numbers: numberModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    },
    getters: {
        userIsAuth(state) {
            return state.isLoggedIn;
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');