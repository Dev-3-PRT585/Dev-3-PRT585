We need to create an NPM script to run the JSON server. Open the `package.json` file and add the following under scripts:

```
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "json-server --watch src/jobs.json --port 5000" // Add this
  },
```

Now, open a new terminal and run `npm run server`.

If you open `http://localhost:5000/jobs` you will see the data.