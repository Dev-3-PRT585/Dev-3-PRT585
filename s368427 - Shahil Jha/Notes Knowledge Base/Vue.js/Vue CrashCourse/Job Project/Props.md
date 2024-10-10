Now let's talk about props. If you have ever used React or Angular, you know what props are, if you haven't, props are a way to pass data from a parent component to a child component. This is how you can make your components reusable. You can pass data, functions, or even other components as props.

I want the Hero component to be able to have a title and subtitle prop that can be passed in and it will display in the output.

In the `App.vue` file, let's pass in two props:

```
<template>
  <Hero title="Test Title" />
</template>
```

We are passing in a prop, which is just a string. Now we need to set up the props in the `Hero.vue` file. Add the following to the script tag:

```
<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue dev',
  },
});
</script>
```

We are importing the `defineProps` function from the `vue` library. This function is used to define props. We are defining a prop called `title` with a type of `String` and a default value of `Become a Vue dev`. Now we can use this prop in the template:

```
<h1 class='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
  {{ title }}
</h1>
```

You should now see "Test Title" as the title.

Let's pass in the subtitle:

```
<template>
  <Hero title="Test Title" subtitle="Test Subtitle" />
</template>
```

Add the following to the `Hero.vue` file:

```
<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Become a Vue dev',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
});
</script>
```

You should see the subtitle in the output.

That's how we can pass data into other components. Now you can remove the title and subtitle from the embed:

```
<Hero />
```

You should see the default values.