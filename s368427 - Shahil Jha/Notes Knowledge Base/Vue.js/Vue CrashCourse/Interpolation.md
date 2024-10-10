The Options API uses a function named `data` to return the data for the component. In this case, we are returning an object with a single property `name` set to 'John Doe'. Now we can use this data in the template. Replace the `h1` tag in the template with the following:

```
<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl">{{ name }}</h1>
  </div>
</template>
```

You should now see the name in the heading. This is called interpolation and it is a way to use data from the component. We just wrap the variable in double curly braces.