- Reusable, self-contained pieces of code
- Includes the logic/JS dynamic HTML output and scoped styling
- Ways to make Vue Components: [[Options API vs Composition API]]

```HTML
<script>
	// JavaScript/Login
</script>
<template>
	<!-- Output Render -->
	<div>
		<h2>Hello from Vue.js</h2>
		<p>This is a simple Vue Component.</p>
	</div>
</template>
<style scoped>
	/* CSS Styling */
	/* 
		'scoped' makes the CSS usable for only this component file only. 
		Basically, limiting the scope to this file.
	*/
</style>
```

As with any other frontend JavaScript framework, Vue.js is built around the concept of components. Components are reusable, self-contained pieces of code that can be easily dropped into different projects. Vue components have a very simple structure that is broken into 3 parts.

- The logic/js, which is where you would define any state or data as well as any methods, events, imports, etc.
- The template output, which consists of HTML that will be rendered, however, we can also include dynamic elements in the template such as variables, loops, and conditionals using something called directives. We'll cover these later.
- The style, which is the CSS. You can add "scoped", which means the styling will only pertain to that specific

Here is an example of how Vue components are formatted and structured:

``` html
<script>
// Vue component definition
export default {
  name: 'SimpleComponent',
  // Optionally, you can include data, methods, computed properties, etc.
};
</script>

<template>
  <div>
    <h2>Hello from Vue.js!</h2>
    <p>This is a simple Vue component.</p>
  </div>
</template>

<style scoped>
/* Scoped CSS for this component */
h2 {
  color: #333;
}
p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
```

When talking about components and how they're structured, it's important to know that there are two ways to handle the logic in Vue.js. You have the traditional `options API` and the `composition API`. The options API is more straightforward and is a good choice for smaller projects. However, the composition API was released with Vue 3 and is more flexible and allows you to create more complex components. I'll give you an example of both, but overall, I want to use the newer composition API. If you really want to get into the options API, you can also take a look at my older crash course. With both ways, you can define state data, methods, and lifecycle hooks. You can have certain things happen at certain times such as when the component is done loading.
