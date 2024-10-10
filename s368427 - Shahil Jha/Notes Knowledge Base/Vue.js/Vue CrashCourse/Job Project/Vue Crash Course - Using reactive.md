How we have this should be fine, but I want to show you a different way by using `reactive` instead of `ref`. If I want to have an object with different values for our state in a single variable, like let's say we want the jobs but we also want a loading value that we can set to true when we are fetching the data and then set it to false when we are done, we can use `reactive` instead of `ref`.

### ref vs reactive

Here are some of the differences:

- `reactive()` only takes objects. It does not take primitives like strings, numbers and booleans.
- `ref()` can take objects or primitives. It uses `ref()` under the hood.
- `ref()` has a `.value`property for reassigning, `reactive()` doesn't use `.value` and can't be reassigned

If you are coming from React, the way that I look at it is in React, if you would use a `useState` for something like a string like name, then I would use `ref` in Vue. If you would use an object in `useState` in React, then I would use `reactive` in Vue. That is in no way a set in stone convention, that's just how I personally think about it.

Let's change to the following:

```
<script setup>
import JobListing from '@/components/JobListing.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

import { reactive, defineProps, onMounted } from 'vue';

const props = defineProps({
  limit: Number,
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>
```

Now we have a `state` object that contains the `jobs` and `isLoading` values. We can set the `isLoading` value to `true` when we are fetching the data and then set it to `false` when we are done.

Let's install a very simple library to show a spinner. Run the following:

```
npm install vue-spinner
```

Import it at the top:

```
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
```

We can then change the template to the following:

```
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner or placeholder while isLoading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job listings when isLoading is false -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="(job, index) in state.jobs.slice(
            0,
            limit || state.jobs.length
          )"
          :key="job.id || index"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
```

Now it will show `Loading` while we are fetching the data and then it will show the job listings. You don't have to do this, it's just another option.

If you want to slow it down to see the spinner in action, you can use `setTimeout`:

```
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    // Simulate a 2-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    state.jobs = response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    // Set isLoading to false after the delay
    state.isLoading = false;
  }
});
```