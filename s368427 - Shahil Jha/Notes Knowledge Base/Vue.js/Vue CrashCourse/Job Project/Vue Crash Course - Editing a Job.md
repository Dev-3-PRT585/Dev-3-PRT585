The last major piece of functionality is editing the job. Let's create a new view at `src/views/EditJobView.vue`. Add the following:

```
<template>Edit page</template>
```

Now add the view to the `router/index.js` file:

```
import EditJobView from '@/views/EditJobView.vue';

//..

{
  path: '/jobs/edit/:id',
  name: 'edit-job',
  component: EditJobView,
},
```

If you go to any job page and click on the edit button, it should bring you to the correct page/view.

### Add The Form

Let's just copy the code from the `AddJobView` page and paste it into the `EditJobView` page. Change the heading to say "Edit Job" and the button to say "Update Job".

### Fetch Job Data

We need to fetch the data to fill the form. We can get the id from the route params and use it to fetch the job data.

Add the following to the script:

```
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
});
```

Create an `onMounted` that gets the data and fills the job state:

```
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
    // Populate form fields after fetching job data
    form.type = state.job.type;
    form.title = state.job.title;
    form.description = state.job.description;
    form.salary = state.job.salary;
    form.location = state.job.location;
    form.company.name = state.job.company.name;
    form.company.description = state.job.company.description;
    form.company.contactEmail = state.job.company.contactEmail;
    form.company.contactPhone = state.job.company.contactPhone;
  } catch (error) {
    console.error('Error fetching job:', error);
  } finally {
    state.isLoading = false;
  }
});
```

Finally, update the `handleSubmit` to update the job:

```
const handleSubmit = async () => {
  const updatedJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    await axios.put(`/api/jobs/${jobId}`, updatedJob);
    toast.success('Job Updated Successfully');
    router.push(`/jobs/${jobId}`);
  } catch (error) {
    console.error('Error updating job:', error);
    toast.error('Failed to update job');
  }
};
```

Now change something and update the job listing.

That's it my friends. We have a full CRUD application with Vue 3, the composition API and JSON Server. I hope that you learned a lot from this and you can get started with your own Vue.js projects.