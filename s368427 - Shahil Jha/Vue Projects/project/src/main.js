import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import '@/assets/main.css';
import "primeflex/primeflex.css";
// import Aura from '@primevue/themes/aura';
// import Button from "primevue/button"


const app = createApp(App);
// app.use(PrimeVue, {
//     theme: {
//         preset: Aura
//     }
// });
// app.component('Button', Button);
app.use(PrimeVue, { unstyled: true });
app.mount('#app')
