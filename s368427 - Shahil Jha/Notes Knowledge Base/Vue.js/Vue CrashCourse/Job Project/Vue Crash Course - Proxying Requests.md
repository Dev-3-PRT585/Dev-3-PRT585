Right now, when we make a request to fetch data, we are making a request to `http://localhost:5000/jobs`. This is because we are running the server on `http://localhost:5000`. However, when we deploy the app, we won't be able to make requests to `http://localhost:5000`. We need to make requests to the same domain that the app is hosted on. We can use a proxy to do this.

Open the `vue.config.js` in the root of the project and add the `proxy` object with the following settings:

```
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

What this is doing is changing the URL from `http://localhost:5000/jobs` to `http://localhost:3000/api/jobs`. or whatever our domain is.

Now we can change the URL in the `axios` request to `/api/jobs`. Do this in the `src/components/JobListings.vue` file as well as the `src/views/JobView.vue` file.