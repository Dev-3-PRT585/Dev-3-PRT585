Now we want to be able to delete a job. We already have a button. We need to make it work by sending a delete request to the server.

Let's add a click event to the delete button in the `JobView.vue` file:

```
  <button @click="deleteJob"
    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
  >
    Delete Job
  </button>
```

Import `useRouter` and `useToast`:

```
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
```

Initialize them:

```
const router = useRouter();
const toast = useToast();
```

Add the `deleteJob` function:

```
const deleteJob = async () => {
  try {
    await axios.delete(`/api/jobs/${jobId}`);
    toast.success('Job Deleted Successfully');
    router.push('/jobs');
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Failed to delete job');
  }
};
```

That's it, you should now be able to delete a job.