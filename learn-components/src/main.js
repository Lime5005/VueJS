import { createApp } from 'vue';

import App from './App.vue';

//保留BaseBadge在此，因为它在多处被使用，global更适合
import BaseBadge from './components/BaseBadge.vue';
import SectionStyle from './components/SectionStyle.vue';
const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('section-style', SectionStyle);

app.mount('#app');