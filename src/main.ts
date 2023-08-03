import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primeflex/primeflex.min.css';
import PrimeVue from 'primevue/config'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue)

app.mount('#app')
