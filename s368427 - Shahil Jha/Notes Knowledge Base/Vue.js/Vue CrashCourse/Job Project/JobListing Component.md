Now, let's create a new file at `src/components/JobListing.vue` and add the following:

```
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  job: Object,
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">{{ job.description }}</div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ job.location }}
        </div>
        <a
          :href="'/job/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
```

We are specifying a prop called `job`, which will be an object. We are then using that prop in the template to output the job data.

Now, in the `App` component, we need to import the `JobListing` component and pass in each job as a prop. Replace the whole section with the following:

```
<section class="bg-green-50 px-4 py-10">
  <div class="container-xl lg:container m-auto">
    <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
      Browse Jobs
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Iterate over jobs array -->
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</section>
```

We are iterating over the `jobs` array and passing each job as a prop to the `JobListing` component. You should still see the job listings.

## JobListings Component

Let's clean this up a bit and put this section and the section under it (View All Jobs link) into a component called `JobListings`. Create a file at `src/components/JobListings.vue` and cut and paste the two sections. We also need to move the imports for the jobs data and `JobListing` component and the `ref` stuff. Be sure to go up one level to the `jobs.json` file. It should look like this:

```
<script setup>
import JobListing from '@/components/JobListing.vue';
import jobData from '../jobs.json';

import { ref } from 'vue';

const jobs = ref(jobData);
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Iterate over jobs array -->
        <JobListing v-for="job in jobs" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>
```

Now in the `App.vue`, you should have the following:

```
<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Navbar />
  <Hero />
  <HomeCards />
  <JobListings />
</template>
```

We have really cleaned up this file.

## Limit Job Listings

On the homepage, we only want to show a limit of 3 job listings. Let's add a `limit` prop to the `JobListings` component and set it to `3`. Then, in the `App` component, pass in `limit` as a prop.

Change the `JobListings.vue` script to take a limit prop:

```
<script setup>
import JobListing from '@/components/JobListing.vue';
import jobData from '../jobs.json';

import { ref, defineProps } from 'vue';

const props = defineProps({
  limit: Number,
});

const jobs = ref(jobData);
</script>
```

Now, where we have the `v-for` and `JobListing`, change it to the following:

```
<JobListing
  v-for="(job, index) in jobs.slice(0, limit || jobs.length)"
  :key="job.id || index"
  :job="job"
/>
```

This will limit the jobs to the limit prop value if passed in. If not, then it will just show all the jobs.

Now, in the `App.vue` component, pass in `limit` as a prop:

```
<JobListings :limit="3" />
```

The reason, we add the `:` is because we are binding it and passing in 3 as a number. If we do not use it, then it will be a string.

Now you should only see three listings on the homepage.