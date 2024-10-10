Now we need to handle the form submission. We will send the data to the server using Axios. We will also redirect the user to the job listings page after the form is submitted.

Add the following to the script:

```
const handleSubmit = async () => {
  const newJob = {
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
    const response = await axios.post('/api/jobs', newJob);
    toast.success('Job Added Successfully');
    router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error('Error adding job:', error);
    toast.error('Failed to add job');
  }
};
```