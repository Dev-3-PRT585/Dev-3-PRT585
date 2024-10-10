Let's create a back button component to easily navigate back to the jobs page.

Create a new file called `BackButton.vue` in the `components` folder. Add the following:

```
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
```

Now bring it into the `JobView.vue` component:

```
import BackButton from '@/components/BackButton.vue';
```

Embed it above the section in the template:

```
<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-green-50">
    // ...
</template>
```