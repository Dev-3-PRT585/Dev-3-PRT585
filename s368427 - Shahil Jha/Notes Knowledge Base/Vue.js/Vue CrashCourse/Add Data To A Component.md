Many components will have state or data associated with them. For example, a component that displays a list of jobs will have a list of jobs in its data. As I mentioned earlier, you can use the options API or the composition API to handle this. The composition API is the recommended way to handle data in Vue. It is more flexible and this is ultimately what we will be using in this project, however, I do want you to know the basics of the Options API because as a Vue developer, you will run into it. At least in the near future. Let's start with the Options API.

Let's start with something simple like a name. Add the following to the script tag in the `App.vue` file:

```
<script>
export default {
  data() {
    return {
      name: 'John Doe',
    };
  },
};
</script>
```