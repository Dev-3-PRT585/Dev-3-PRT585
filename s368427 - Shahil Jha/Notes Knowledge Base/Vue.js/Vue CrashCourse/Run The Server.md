Before we do anything, let's go ahead and install the dependencies and run the dev server. Make sure that you are in the project folder and run the following:

```
npm install
npm run dev
```

By default, this will run on port 5173. I prefer to use port 3000 for my frontend projects, so I am actually going to go into the `vite.config.js` file and change the port to 3000.

```
server: {
  port: 3000,
},
```

Save the file and it should automatically reload the server. Now you can go to `http://localhost:3000` in your browser and you should see the welcome page.