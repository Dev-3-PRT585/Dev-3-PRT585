We are going to create a `views` folder in the `src` folder. This is where we will put the components that will be used as pages. Create a file at `src/views/HomeView.vue` and move everything except the Navbar component from the `App.vue` component into it. The Navbar we want on every page, so that will be stay in the `App.vue` component. The `HomeView.vue` file should look like this:

```
<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" />
</template>
```

In your `App.vue' file, you should now have:

```
<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>
```

The `RouterView` component is a special component that will render the component that is currently active. Anything else in this output will be on every page such as the navbar.

If you run into any weird errors, try deleting the `node_modules` folder and reinstalling the dependencies with `npm install`.

Now you should see everything as it was before.