Up to this point, we have just been using one page/url with all of our components. In a real application, we would have multiple pages and we would need to navigate between them. This is where Vue Router comes in. Vue Router is the official router for Vue.js. We need the router because we will have a separate page for jobs and single job listings as well as the page to add and update listings. You could have chosen to implement the router at the very beginning, but I wanted to show you how to do it yourself.

Let's install Vue Router:

```
npm install vue-router
```

Now we need to set up the router. Create a file at `src/router/index.js` and add the following:

```
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

export default router;
```

We are importing `createRouter` and `createWebHistory` from `vue-router`. We are then creating a router instance with the `createRouter` function. We are passing in the history mode and the routes. We are setting the base URL to `import.meta.env.BASE_URL`, which is the base URL of the app. We are then exporting the router instance. We have one route for the home url to load the home view, which we have not yet created.

Now let's open up the `src/main.js` file and apply the router:

```
import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/main.css';
import 'primeicons/primeicons.css';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
```

We have imported the router and then we are using it in the `createApp` function. Now we can use the router in our components.