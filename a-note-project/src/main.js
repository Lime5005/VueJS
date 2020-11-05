import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import cardStyle from './components/UI/cardStyle';
import buttonStyle from './components/UI/buttonStyle';

app.component('card-style', cardStyle);
app.component('button-style', buttonStyle);
app.mount('#app')