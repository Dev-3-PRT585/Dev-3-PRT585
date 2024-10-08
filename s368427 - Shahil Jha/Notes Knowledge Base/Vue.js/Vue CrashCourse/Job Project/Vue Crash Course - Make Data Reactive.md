Now that we have the data, we need to make it reactive so that the component updates when the data changes. We can use the `ref` function to make the data reactive. Add the following to the script:

```
import { ref } from 'vue';
```

Now add the following to the script:

```
const jobs = ref(jobData);
```

Now the data will be reactive.

We need to loop over the jobs and output the data in the template. ultimately, we will have a component for each job item, but for now, we will just add the HTML here. We need to use the `v-for` directive to loop over the jobs and output the data. This is similar to using `jobs.map()` in React/JavaScript.

Replace the current section with this:

```
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Iterate over jobs array -->
        <div
          v-for="job in jobs"
          :key="job.id"
          class="bg-white rounded-xl shadow-md relative"
        >
          <div class="p-4">
            <div class="mb-6">
              <div class="text-gray-600 my-2">Full-Time</div>
              <h3 class="text-xl font-bold">Senior Front-End Developer</h3>
            </div>

            <div class="mb-5">
              We are seeking a talented Front-End Developer to join our team in
              Boston, MA. The ideal candidate will have strong skills in HTML,
              CSS, and JavaScript...
            </div>

            <h3 class="text-green-500 mb-2">$70K - $80K / Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
              <div class="text-orange-700 mb-3">
                <i class="fa-solid fa-location-dot text-lg"></i>
                Boston, MA
              </div>
              <a
                href="job.html"
                class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

You should see six jobs because that is how many are in the JSON file.