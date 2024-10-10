The Composition API is a new way to handle logic in Vue components. It is more flexible and allows you to create more complex components. It is also more similar to React's hooks. Let's convert the `App.vue` component to use the Composition API.

```
<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['Task One', 'Task Two', 'Task Three', 'Task Four']);
    const link = ref('https://google.com');

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    };

    return {
      name,
      status,
      tasks,
      link,
      toggleStatus,
    };
  },
};
</script>
```

With The Composition API, we use the `setup` function to define our reactive properties and methods. We use the `ref` function to create reactive references. What I mean by reactive is that we can change the value of the property and it will automatically update the UI. `ref` takes an inner value and returns a reactive and mutable ref object, which has a single property of .value that points to the inner value. We can directly mutate the value of the ref using the `.value` property. So if you're a React developer, this is similar to how `useState` works. When you modify a ref value, Vue automatically triggers reactivity updates in the template where that ref is used. Yes we could create a variable without ref and it would display initially, but it would not update when the value changes. We need to use ref to make it reactive.

I know at first glance, this seems much more difficult that what we just had. I thought the same thing and hated it. However, after using it in a few projects, I started to see the advantages and how much more flexible it is than just having a rigid object with data and methods.

What I just showed you is also the long form. We can really slim this down.

## `setup()` Function Shorthand

First, we don't have to use the explicit setup function. Instead of actually wrapping everything in the `setup()` function, we can just add setup to the script like this:

```
<script setup>
// ...
</script>
```

Then we can take away the export and the returns and we are left with this:

```
<script setup>
import { ref } from 'vue';

const name = ref('John Doe');
const status = ref('active');
const tasks = ref(['Task One', 'Task Two', 'Task Three', 'Task Four']);
const link = ref('https://google.com');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
};
</script>
```

You can get rid of the Google link bind and link property.

## Add Task

Another thing I would like to do is to add a form to add a new task. We can do that by adding a form to the template.

```
<form @submit.prevent="addTask">
      <label for="newTask" class="block text-xl my-3">Add New Task:</label>
      <input
        type="text"
        id="newTask"
        v-model="newTask"
        class="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
      <button
        type="submit"
        class="mt-3 px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Add Task
      </button>
    </form>
```

### `v-model`

The `v-model` directive is used to bind an input to a property on the component. In this case, we are binding the input to the `newTask` property. This will allow us to type in the input and have the value stored in the `newTask` property.

Let's add the property to the script:

```
const newTask = ref('');
```

Now we can add the `addTask` method to the script:

```
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = ''; // Clear input after adding task
  }
};
```

Now the task will get added and since the tasks are reactive, the list will update.

## Delete Task

Now, let's add a button to delete the task. Add a button in the list item with the task:

```
 <li
  v-for="(task, index) in tasks"
  :key="index"
  class="flex items-center my-3"
>
  <span>{{ task }}</span>
  <button
    @click="deleteTask(index)"
    class="ml-2 px-3 py-1 bg-red-500 text-white rounded-md text-xs"
  >
    x
  </button>
</li>
```

Then add the `deleteTask` method to the script:

```
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
```