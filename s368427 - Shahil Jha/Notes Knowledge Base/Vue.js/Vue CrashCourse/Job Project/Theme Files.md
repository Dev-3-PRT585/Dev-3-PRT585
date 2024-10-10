I wanted this project to look decent, so in the main repo, you will see a folder called `_theme_files`. This is where I put all of the theme files. These are just HTML files with Tailwind classes. I would suggest opening that folder up in another text editor window so it is easily accessible.

Let's start by copying everything in the `index.html` file into the `App.vue` file `<template>` tags.

You'll probably get an error about the logo image. Bring the `logo.png` file from the theme files into `src/assets/img` and add the following to the `App.vue` file:

```
import logo from '@/assets/img/logo.png';
```

You may think we can do something like this:

```
<img src={logo} alt='Logo' />
```

That is what we would do in React, but in Vue, we bind the logo to the image tag like this:

```
<img class='h-10 w-auto' v-bind:src='logo' alt='Vue Jobs' />
```

We can make it shorter with this:

```
 <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
```

You should now see the logo.