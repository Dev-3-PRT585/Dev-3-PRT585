Next, let's do the Hero component. Create a file at `src/components/Hero.vue` and cut the section with the hero and everything in it from the `App.vue` file and paste it into the `Hero.vue` file in a `<template>` tag:

```
<template>
  <section class="bg-green-700 py-20 mb-4">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Become a Vue Dev
        </h1>
        <p class="my-4 text-xl text-white">
          Find the Vue job that fits your skills and needs
        </p>
      </div>
    </div>
  </section>
</template>
```

Then import it into the main component and embed it:

```
<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
</script>

<template>
  <Navbar />
  <Hero />
  <!-- //... -->
</template>
```