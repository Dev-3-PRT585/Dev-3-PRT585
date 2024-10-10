I am going to use Tailwind CSS for this project. If you are not familiar with Tailwind, it is a utility-first CSS framework that allows you to build custom designs without having to write any CSS. It's very popular and I use it in most of my projects.

To install Tailwind, run the following:

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

This will install Tailwind, PostCSS, and Autoprefixer as dev dependencies. PostCSS is a tool for transforming CSS with JavaScript plugins. Autoprefixer is a PostCSS plugin that parses your CSS and adds vendor prefixes to CSS rules.

### Tailwind Config

Now we need to create a Tailwind config file. Run the following:

```
npx tailwindcss init -p
```

This will create a `tailwind.config.js` and a `postcss.config.js` file in the root of your project.

Add the following to your `tailwind.config.js` file:

```
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

The content array, formerly known as `purge` specifies the files to scan for classes that are used in your project. Tailwind CSS, when used in production, purges unused styles to reduce the final CSS file size.

We are also adding some custom values to the theme object. We are adding a font family and a grid template column. This is a special class for the single job listing page.

### Include Tailwind In CSS

Open the file `src/assets/main.css` and add the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This will add the base, components, and utilities classes to the CSS file from Tailwind.

Now, include that in your `src/main.js` file like this:

```
import '@/assets/main.css';
```

Restart the server and you should see that the Tailwind styles are being applied.