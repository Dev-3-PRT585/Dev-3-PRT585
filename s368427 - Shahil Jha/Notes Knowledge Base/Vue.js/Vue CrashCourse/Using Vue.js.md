There are many ways to use Vue.js. Here are some of the most common.

- **CDN** - The easiest way is to use the CDN. You can include Vue.js in your HTML file and use it, however, I wouldn't suggest this for anything other than a very small and simple project. Maybe for a widget or something.
- **Vue CLI** - The Vue CLI was used for a long time. Its a command line interface to scaffold up a project and it includes a rich collection of official plugins and integrations. However, the Vue CLI is not recommended for new projects anymore and it's in maintenance mode, meaning that it will only receive bug fixes and security updates. If you go to the Vue CLI website, you'll see that it's no longer recommended and they suggest using **create-vue**
- **create-vue** - Create Vue uses the Vite web server and frontend tool. It includes features like hot reloading, out-of-the-box support for TypeScript and other features. It also includes a rich ecosystem of plugins and integrations. We can setup a project with one single command and this is what we'll be using for our job listing app.
- **Nuxt & Gridsome** - Another way to use Vue is with meta frameworks. Just like React has Next.js, Vue has Nuxt.js, which allows you to create server-side-rendered applications. Gridsome is a static-site generator that uses Vue. So these frameworks have their own tools to get setup and they're definitely things I think you should check out but I always suggest learning the core framework first and learn how to build single page applications.

So that's it for the slides. Before we jump in and setup our job listings project, I just want to show you how you can use the CDN to use Vue.js very easily and quickly.

## Quick Start With CDN

For anything other than a very simple project, I would suggest that you use something like **create-vue** or **Nuxt**, but you can simply include the CDN, which stands for Content Delivery Network. A CDN is a network of servers that are located all over the world. This means that if you want to use Vue.js, you don't have to download it to your computer. Instead, you can simply include it in your HTML file and use it.

Let's start by just creating a folder called `vue-example` and adding an `index.html` file and add your basic HTML:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Example</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Now add the CDN to the `<head>` of your HTML file:

```
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"> </script>
</head>
```

I am using VS Code and the Live Server extension, so I will just right click and select "Open With Live Server" and open the project in the browser. You should just see the text "Hello World".

Since we have included the Vue CDN, we can use the Vue.js syntax to create a new Vue app. Add the following code right above the closing tag of the `<body>`:

```
<script>
  const app = Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
      };
    },
  });

  app.mount('#app');
</script>
```

Let's go over this code:

- `const app = Vue.createApp()` - We are creating a new Vue app/instance. We are using the `createApp` method, which is a method that is available on the Vue object.
- We are passing in an object that contains the data and methods for our app.
- `data()` - In Vue, the data function is used to define the reactive data properties for the Vue instance. Here, it returns an object with a single property message initialized to 'Hello Vue!'.
- `app.mount('#app')` - We are mounting the Vue instance to the element with the id of app.

Now we can add that element in our HTML:

```
<div id="app">
  <h1>{{ message }}</h1>
</div>
```

The `{{ message }}` is a special Vue syntax that is used to display the value of the message property. This is called interpolation.

We can also add events and methods. And don't worry, I will go over this stuff much more in-depth later. I just want to give you a quick example of how you can use this in your projects.

Let's create a button with an event:

```
<button @event='clickMe'>Click Me</button>
```

Now, we can add a methods option with the `clickMe` method:

```
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  methods: {
    clickMe() {
      console.log('Button Clicked!')
    }
  }
});

app.mount('#app');
`
```

Now when you click the button, it will fire that method.

This is probably the simplest Vue project that you can create. But it gives you an idea of how you can easily add it to your projects.

## `create-vue`

We can scrap that code and let's create a new project using the `vue-create` tool. If you have ever used React, this is similar to the `create-react-app` tool.

Open a terminal window and run the following:

```
npm create vue@latest vue-crash-2024
```

I am going to choose the following options:

- TypeScript: no
- JSX: no
- Vue Router: I am goping to choose no here because we will implement it ourselves when we need it
- Pinia: no
- Vitest: no
- End to End Testing: no
- ESLint: no
- DevTools: no

It will scaffold up your project.

Open this folder in VS Code or whatever editor you are using.

```
cd vue-crash-2024
code .
```