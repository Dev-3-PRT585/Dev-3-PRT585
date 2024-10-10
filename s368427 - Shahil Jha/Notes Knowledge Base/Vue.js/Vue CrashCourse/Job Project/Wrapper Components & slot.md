We can also have components that wrap content. Let's create a component called `Card` that will wrap some text and add some styling to it to make it look like a card.

Create a file at `src/components/Card.vue` and add the following:

```
<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
```

The `<slot>` is a placeholder for the content that will be inserted into the component. If you are familiar with React, it is similar to the `{children}` prop. Now we can use this component to wrap the text in the `HomeCards.vue` component:

```
<script setup>
import Card from '@/components/Card.vue';
</script>
```

Now, replace the 2 divs that wrap the content. They have classes of `bg-gray-100` and `bg-green-100`. We can now use the `Card.vue` component to wrap the text:

```
<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>
          <a
            href="jobs.html"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </a>
        </Card>
        <Card>
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="add-job.html"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  </section>
</template>
```

Now the text is wrapped in a card. However, I want the second card to have a green background. So let's make the card component take in a prop called `bg` for background. Add the following to the `Card.vue` file:

```
<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>
```

Now in the template, use that prop:

```
<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
```

Since we are using a dynamic value in the class, we use the `:class`, which is short for `v-bind:class`.

Now, in the `HomeCards.vue` file, we can use the `bg` prop to change the background color for the second card:

```
<Card bg='bg-green-100'>
  <h2 class='text-2xl font-bold'>For Employers</h2>
  <p class='mt-2 mb-4'>
    List your job to find the perfect developer for the role
  </p>
  <a
    href='add-job.html'
    class='inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600'
  >
    Add Job
  </a>
</Card>
```