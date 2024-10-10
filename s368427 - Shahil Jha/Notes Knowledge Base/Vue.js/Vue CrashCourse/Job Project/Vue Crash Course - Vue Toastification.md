We are using a toast library called `vue-toastification`. Let's install it:

```
npm install vue-toastification@next
```

We need to add the import for Toast and the CSS and use it in our `App.vue` file:

```
import { createApp } from 'vue';
import App from './App.vue';
import Toast from 'vue-toastification'; // Add this line
import 'vue-toastification/dist/index.css'; // Add this line
import '@/assets/main.css';
import 'primeicons/primeicons.css';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(Toast); // Add this line

app.mount('#app');
```

Back in the `AddJobView.vue` file, import `axios`, `useToast` and `useRouter`:

```
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
```

And initialize them under the `form` variable:

```
const router = useRouter();
const toast = useToast();
```

Submit the form and you should see a toast message and be redirected to the job listings page.