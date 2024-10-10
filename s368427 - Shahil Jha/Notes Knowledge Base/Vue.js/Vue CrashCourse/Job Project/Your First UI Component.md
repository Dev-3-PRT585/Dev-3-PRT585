Now it's time to start breaking this up into components. Starting from the top, let's create a component for the navigation bar. Create a file at `src/components/Navbar.vue` and cut the `<nav>` and everything in it from the `App.vue` file and paste it into the `Navbar.vue` file in a `<template>` tag:

```
<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span
            >
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <a
                href="index.html"
                class="text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
              >
              <a
                href="jobs.html"
                class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
                >Jobs</a
              >
              <a
                href="add-job.html"
                class="text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
```

We also need to now import the logo into this component instead of the `App.vue`. Add this to the top:

```
<script setup>
import logo from '@/assets/img/logo.png';
</script>
```

Now let's import the `Navbar.vue` component into the `App.vue` component:

```
<script setup>
import Navbar from '@/components/Navbar.vue';
</script>
```

Now embed the Navbar component:

```
<template>
  <Navbar />
</template>
```