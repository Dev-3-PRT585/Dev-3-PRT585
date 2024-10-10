In Vue, we have something called lifecycle hooks. These are functions that are called at different points in the lifecycle of a component. For example, when the component is created, mounted, updated, and destroyed. We can use these hooks to perform actions at these different points. There are a couple of them that were actually removed in Vue 3 because they were replaced by the setup() function, but the main ones are:

- `onBeforeMount` – called before mounting begins
- `onMounted` – called when component is mounted
- `onBeforeUpdate` – called when reactive data changes and before re-render
- `onUpdated` – called after re-render
- `onBeforeUnmount` – called before the Vue instance is destroyed
- `onUnmounted` – called after the instance is destroyed
- `onActivated` – called when a kept-alive component is activated
- `onDeactivated` – called when a kept-alive component is deactivated
- `onErrorCaptured` – called when an error is captured from a child component

These have to be imported to use. This is to keep everything lightweight.

We can use these for things like fetching data when the app/component loads. Let's use the `onMounted` hook to fetch some tasks from the JSONplaceholder API and then add them to the tasks property.

Add the following at the bottom of the script:

```
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
});
```

We are fetching the array and then turning into an array of titles then adding it to the tasks property. Now you should see tasks from the API.