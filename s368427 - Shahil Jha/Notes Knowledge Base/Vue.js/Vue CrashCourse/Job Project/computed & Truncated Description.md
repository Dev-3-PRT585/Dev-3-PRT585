Let's talk about the `computed` function. This is a function that returns a value based on other values. It will run whenever that particular value changes. If you know React, it's kind of like the dependency array in the `useEffect()` hook. When that dependency changes the effect runs. Let's use it to show a truncated version of the description.

Add the following to the `JobListing.vue` component `<script>`:

```
<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});
</script>
```

We first create a reactive variable called `showFullDescription` and set it to `false`. We then create a function called `toggleDescription` that will toggle the value of `showFullDescription`. We then create a computed property called `truncatedDescription` that will return the full description if `showFullDescription` is `true` and a truncated version if it is `false`. Now replace the following code:

```
<div class="mb-5">{{ job.description }}</div>
```

With this:

```
<div>{{ truncatedDescription }}</div>

<button
  @click="toggleDescription"
  class="text-green-500 hover:text-green-600 mb-5"
>
  {{ showFullDescription ? 'Less' : 'More' }}
</button>
```

Now you can toggle the truncated description.