Let's create a new page and route for the jobs page. This will simply list out all jobs. We can use the `JobListings` component for this.

Create a file at `src/views/JobsView.vue` and add the following:

```
<script setup>
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <JobListings />
</template>
```

## Jobs Route

Now we need to add a route for this page in the `router/index.js` file:

```
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
  ],
});

export default router;
```

Now if you go to [http://localhost:3000/jobs](http://localhost:3000/jobs) you should see the jobs page.