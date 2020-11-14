import { createApp } from 'vue';
import { createStore } from 'vuex';
/* one App can have only one store, but more than one state */
import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');