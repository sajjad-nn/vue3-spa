<template>
  <div>
    <router-link :to="{ name: 'createPost' }" class=" btn btn-dark">create post </router-link>
  </div>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <div>


          <div class="card">
            <div class="card-header"><router-link :to="{ name: 'showpost', params: { id: post.id } }">{{ post.title
            }}</router-link></div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">userId:{{ post.userId }}</li>

              <li class="list-group-item">body:{{ post.body }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button @click="goToHome">Home</button>




  </div>
  <router-view></router-view>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

export default {
  name: 'ShowUser',
  setup() {
    const router = useRouter();
    const posts = ref([])
    const loading = ref(true)
    const route = useRoute();

    function goToHome() {
      router.push('/')
    }





    function getpost() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          // handle success
          console.log(route);
          posts.value = response.data;
          console.log(posts);
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getpost();
    return { loading, posts, route, goToHome };
  },

};
</script>

<style scoped></style>