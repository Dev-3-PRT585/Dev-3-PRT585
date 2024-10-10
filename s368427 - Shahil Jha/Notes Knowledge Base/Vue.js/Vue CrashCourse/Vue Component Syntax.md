Before we start putting together our components, I just want to work in the `App.vue` file for a bit, so you can understand how components work. We already discussed the structure of a component in the slides. There is a template, which is the output, the style and the JavaScript logic.

You use the following tag syntax to separate these parts:

```
<script>
// Logic goes here
</script>

<template>
  <!-- HTML goes here -->
  <div>
    <h1 class="text-2xl">Vue Jobs</h1>
  </div>
</template>

<style>
/* Styles go here */
</style>
```

For styling, you would add the `scoped` attribute to the style tag. This will make the styles only apply to the component itself.

```
<style scoped>
h1 {
  color: red;
}
</style>
```

Now only the `h1` tag in this component will be red.

You could also use Sass by adding the `lang` attribute to the style tag:

```
<style lang="scss">
h1 {
  color: red;
}
</style>
```

However, for this to work, we need to install the `sass` package. I am not going to do that, but if you wanted to, you would run the following command:

```
npm install -D sass
```

Since, we are using Tailwind, we don't need to add much custom CSS to this app, so we can remove the style tags completely.