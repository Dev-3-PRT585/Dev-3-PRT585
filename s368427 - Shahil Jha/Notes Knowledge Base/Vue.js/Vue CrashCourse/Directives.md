Vue has something called directives. These are special attributes that you can add to your HTML elements to change the way the component renders. For example, you can use the `v-text` directive to change the text inside the `h1` tag.

Replace the `h1` tag with the following:

```
<h1 class="text-2xl" v-text="name"></h1>
```

What this is doing is updating the H1 tag's textContent property to the value of the `name` property. It will overwrite anything within the tag content. In this particular case, where you just want to show a value, you should use interpolation instead of the `v-text` directive. So let's change it back.

```
<h1 class="text-2xl">{{ name }}</h1>
```

Here are some other common directives:

- `v-if` - Render the element if the expression is true. There is also `v-else` and `v-else-if`.
- `v-for` - Iterate over an array of items and render them.
- `v-bind` - Bind an attribute to a property on the component.
- `v-on` - Bind an event to a function.
- `v-model` - Bind an input to a property on the component.
- `v-show` - Show or hide an element based on the expression.

We'll look at these as well as some others.

### `v-if`

Let's look at an example of using the `v-if` directive. First we will add a new piece of data to the component. Add the following to the script tag:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
    };
  },
};
</script>
```

Now we can use the `v-if` directive to conditionally render the status. Add the following under the name:

```
<h1 class="text-2xl">{{ name }}</h1>
<p v-if="status === 'active'" class="text-green-700">User is active</p>
```

It will show the name but if you change the `status` property to something else, it will not show the `p` tag.

### `v-else`

You can also use `v-else` to show something else if the condition is false. Add the following to the template:

```
<h1 class="text-2xl">{{ name }}</h1>
<p v-if="status === 'active'" class="text-green-700">User is active</p>
<p v-else class="text-red-700">User is Inactive</p>
```

Now it will show that the user is inactive if the `status` is set to something else.

### `v-else-if`

You can also use `v-else-if` to add another condition:

```
<h1 class="text-2xl">{{ name }}</h1>
<p v-if="status === 'active'" class="text-green-600">User is Active</p>
<p v-else-if="status === 'pending'" class="text-yellow-600">
    User is Pending
  </p>
<p v-else class="text-red-700">User is Inactive</p>
```

Now it will show active if active, pending if pending and inactive if anything else.

### `v-for`

You can also use `v-for` to iterate over an array of items. Let's add an array of tasks to the data:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three', 'Task Four'],
    };
  },
};
</script>
```

Now we can use `v-for` to loop over the tasks:

```
<h3 class="text-xl my-3">Tasks:</h3>
<ul>
  <li v-for="task in tasks" :key="task" class="flex items-center my-3">{{ task }}</li>
</ul>
```

The `v-for` directive takes the form of `v-for="item in items"`. The `:key` attribute is required when using `v-for` to help Vue keep track of the elements and their state. You should now see the tasks on the page.

### `v-bind`

The `v-bind` directive is used to bind an attribute to a property on the component. For example, you can bind the `href` attribute of an anchor tag to a property on the component. Let's add a link to the data:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three', 'Task Four'],
      link: 'https://google.com',
    };
  },
};
</script>
```

Now we can bind the `href` attribute of an anchor tag to the `link` property:

```
<a v-bind:href="link" class="text-blue-600">Link to Google</a>
```

We can also shorten this to `:href`:

```
<a :href="link" class="text-blue-600">Link to Google</a>
```

### `v-on` & Methods

The `v-on` directive is used to bind an event to a function/method. For example, you can bind a click event to a function that changes the status. Let's do that.

First, add the button with the following:

```
<button
  v-on:click='toggleStatus'
  class='mt-3 px-4 py-2 bg-blue-500 text-white rounded-md'
>
  Change Status
</button>
```

This will fire off a click event when the button is clicked. Now let's add the method to the data. Remember, we are still using the Options API. I will convert it to the Composition API soon:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three', 'Task Four'],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    },
  },
};
</script>
```

As you can see, we just have an object called `methods`. Inside that object, we have a method called `toggleStatus`. This method will change the status of the user. Now when the button is clicked, the status will change. We use the `this` keyword to access the data of the component.

## `v-on` Shorthand

There is a shorter way to handle events. We can use the `@` symbol to bind an event to a method. For example, we can bind the `click` event to the `toggleStatus` method:

```
<button
  @click="toggleStatus"
  class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
>Change Status</button>
```

We will look at some other directives later, but these are the most common.

Here is the entire code so far:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three', 'Task Four'],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl">{{ name }}</h1>
    <p v-if="status === 'active'" class="text-green-600">User is Active</p>
    <p v-else-if="status === 'pending'" class="text-yellow-600">
      User is Pending
    </p>
    <p v-else class="text-red-700">User is Inactive</p>
    <button
      @click="toggleStatus"
      class="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Change Status
    </button>
    <h3 class="text-xl my-3">Tasks:</h3>
    <ul>
      <li v-for="task in tasks" :key="task" class="flex items-center my-3">
        {{ task }}
      </li>
    </ul>
    <a v-bind:href="link" class="text-blue-600">Link to Google</a>
  </div>
</template>
```