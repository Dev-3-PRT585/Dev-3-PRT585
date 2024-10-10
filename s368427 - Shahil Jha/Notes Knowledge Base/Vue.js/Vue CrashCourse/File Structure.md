Let's take a quick look at the file structure of the project.

### `package.json`

The package.json file is pretty minimal. We just have vue and vue-router since I answered yes to using the router. We also have Vite, which is our server and tooling as well as the Vue plugin as our dev dependencies.

For scripts, we have `dev` to run the dev server, `build` to build the project, and `preview` to preview the production build.

### `vite-config`

The config file is where we have the Vue plugin being initiated. This is where you can add any extra configs, such as the port number, proxies and so on.

### `index.html`

This is the main HTML file. It's pretty simple. We have a div with an id of `app` where our Vue app will be mounted. Since this project uses Vite and not something like Webpack, the actual script is included as a module rather than bundling it all together because Vite includes ES module support.

I am going to change the title:

```
<title>Vue Jobs | Become a Vue Developer</title>
```

### `public`

This is where you can put any static assets such as images, fonts, etc.

### `src`

This is where all of our Vue components and other JavaScript files will go

#### `src/main.js`

This is the main entry point for the application. This is where we create the Vue app and mount it to the `#app` div in the `index.html` file.

#### `src/App.vue`

This is the main component that will be loaded into the `#app` div in the `index.html` file. It's a single file component that includes the template, script, and style. This is where we will build out our job listing app.

By default, it is bringing in the `HelloWorld` and `TheWelcome` components. Those components are in the `src/components` folder.