Usually when we submit a form, we want to prevent the default behavior of the form submission. Instead of adding the `event.preventDefault()`, we can just add the `@submit.prevent` directive to the form. This will prevent the default behavior of the form submission.

Delete the `event.preventDefault()` from the `submit` event handler and add the following to the form tag:

```
<form @submit.prevent="handleSubmit"></form>
```