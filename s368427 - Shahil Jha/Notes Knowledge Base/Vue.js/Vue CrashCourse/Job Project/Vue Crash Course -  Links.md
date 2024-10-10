Now we need to add links to navigate between the pages. We can use the `router-link` component to create links. Let's go into the `Navbar.vue` component and import the `router-link` component:

```
<script setup>
import { RouterLink } from 'vue-router';
</script>
```

Now, you want to replace any `a` tags with the `router-link` component. Let's start with the logo. It should look like this:

```
<RouterLink class='flex flex-shrink-0 items-center mr-4' to='/'>
  <img class='h-10 w-auto' v-bind:src='logo' alt='Vue Jobs' />
  <span class='hidden md:block text-white text-2xl font-bold ml-2'>
    Vue Jobs
  </span>
</RouterLink>
```

Be sure to change `href` to `to` and change `index.html` to `/`.

Now do the navigation links:

```
<div class='md:ml-auto'>
  <div class='flex space-x-2'>
    <RouterLink
      to='/'
      class='text-white bg-green-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    >
      Home
    </RouterLink>
    <RouterLink
      to='/jobs'
      class='text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2'
    >
      Jobs
    </RouterLink>
    <RouterLink
      to='/jobs/add'
      class='text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2'
    >
      Add Job
    </RouterLink>
  </div>
</div>
```

## Active Links

The routing should work, however, the active link is always the home link. We need to add some logic to make sure the active link is the current page.

Let's bring in `useRoute` from the `vue-router` package:

```
import { RouterLink, useRoute } from 'vue-router';
```

Now add the following function:

```
// Function to determine if the link is active
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
```

We are simply checking if the current route path is equal to the route path we pass in. Now we can use this function to determine if the link is active:

```
 <div class="flex space-x-2">
  <RouterLink
    to="/"
    :class="[
      'text-white',
      isActiveLink('/')
        ? 'bg-green-900'
        : 'hover:bg-gray-900 hover:text-white',
      'rounded-md',
      'px-3',
      'py-2',
    ]"
    >Home</RouterLink
  >
  <RouterLink
    to="/jobs"
    :class="[
      'text-white',
      isActiveLink('/jobs')
        ? 'bg-green-900'
        : 'hover:bg-green-900 hover:text-white',
      'rounded-md',
      'px-3',
      'py-2',
    ]"
    >Jobs</RouterLink
  >
  <RouterLink
    to="/jobs/add"
    :class="[
      'text-white',
      isActiveLink('/jobs/add')
        ? 'bg-green-900'
        : 'hover:bg-green-900 hover:text-white',
      'rounded-md',
      'px-3',
      'py-2',
    ]"
    >Add Job</RouterLink
  >
</div>
```

Now the correct link should be active.