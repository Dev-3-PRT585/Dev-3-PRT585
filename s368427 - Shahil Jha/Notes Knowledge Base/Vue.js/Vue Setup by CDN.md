When using Vue from a [[CDN (Content Delivery Network)]], there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework. However, you won't be able to use the Single-File Component (SFC) syntax.

Use the following to use Vue by [[CDN (Content Delivery Network)]]
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```


Example for using Vue by [[CDN (Content Delivery Network)]]:

```html
<!-- this is a test for the usage of Vue.js using CDN -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- script tag for the CDN -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <title>Vue Test</title>
 </head>
 <body>
    <div id="app">
      <h1>{{ message }}</h1>
      <button @click="clickMe">Click Me</button>
    </div>
    <script>
        const app = Vue.createApp({
         data(){
            return {
               message: "bofadez"
            };
         },
         methods:{
            clickMe(){
               console.log("Button Clicked");

               // Use 'this' keyword to specify the variable

               this.message = "BOFADEZ!!!"
            }
         },
        });
      //   mounting the application to the id
        app.mount('#app');
    </script>
 </body>
 </html>
```