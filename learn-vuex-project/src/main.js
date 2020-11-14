import { createApp } from 'vue';
import { createStore } from 'vuex';
/* one App can have only one store, but more than one state */
import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        addTen(state, payload) {
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000)
        },
        addTen(context, payload) {
            console.log(context); //You can see a dispatch object, you can dispatch a number of actions inside an action, this can be helpful if you sending an HTTP request, if succeeds, you wanna trigger a success action; if you get an error, you wanna trigger an error handling action. There is getters, state, etc.
            context.commit('addTen', payload);
        },
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
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
        },
        userIsAuth(state) {
            return state.isLoggedIn;
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');