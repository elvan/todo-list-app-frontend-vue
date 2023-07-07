import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import route from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(route);
app.mount('#app');
