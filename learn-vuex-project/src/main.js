import { createApp } from 'vue';

/* one App can have only one store, but more than one state */
import App from './App.vue';
import store from './store.js';

const app = createApp(App);
app.use(store);
app.mount('#app');