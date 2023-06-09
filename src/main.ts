import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "element-plus/dist/index.css";
import "animate.css";

import 'font-awesome/css/font-awesome.css'
import "@/style/iconfont.css"
import '@/style/main.css';

import ElementPlus from "element-plus";

import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(DataVVue3);
app.mount('#app');
