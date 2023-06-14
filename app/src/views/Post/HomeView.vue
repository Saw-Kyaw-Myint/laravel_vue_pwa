<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
// import { useRouter } from "vue-router";s

const posts = ref([]);

const getPosts = async () => {
  await axios.get(`http://127.0.0.1:8000/api/posts`).then((response) => {
    posts.value = response.data;
  });
};

const postDelete = async (id) => {
  await axios
    .delete(`http://127.0.0.1:8000/api/post/${id}`)
    .then((response) => {
      console.log(response.data);
      getPosts();
    });
};

onMounted(async () => {
  getPosts();
});
</script>
<template>
  <div>
    <!-- component -->
    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
      >
        <div class="w-full lg:w-5/6">
          <router-link
            :to="{ name: 'create' }"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create
          </router-link>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-center">Title</th>
                  <th class="py-3 px-6 text-center">Description</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr
                  class="border-b border-gray-200 hover:bg-gray-100"
                  v-for="(post, index) in posts"
                  :key="index"
                >
                  <td class="py-3 px-6 text-center">
                    {{ post.title }}
                  </td>
                  <td class="py-3 px-6 text-center">
                    {{ post.description }}
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <router-link
                        :to="{ name: 'edit', params: { id: post.id } }"
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </router-link>
                      <button
                        @click="postDelete(post.id)"
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
