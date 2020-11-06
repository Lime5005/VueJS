import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import cardStyle from './components/UI/cardStyle';
import buttonStyle from './components/UI/buttonStyle';
import BaseDialog from './components/UI/BaseDialog';

app.component('card-style', cardStyle);
app.component('button-style', buttonStyle);
app.component('base-dialog', BaseDialog);
app.mount('#app')