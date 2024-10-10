We are going to use this on the home and jobs page. We do not want the "View All Jobs" button on the jobs page. So let's add a prop called `showButton` and only show if that prop is passed in as true:

```
const props = defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
```

Now add the condition to the bottom section with the button:

```
<section v-if='showButton' class='m-auto max-w-lg my-10 px-6'>
  <RouterLink
    to='/jobs'
    class='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
  >
    View All Jobs
  </RouterLink>
</section>
```

Now add the prop to the embed in the `HomeView`:

```
<JobListings :limit="3" :showButton="true" />
```