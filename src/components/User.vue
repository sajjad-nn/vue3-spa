<template>
  <div class="container mt-5" >
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="newuser in users" :key="newuser.id">
        <div>


          <div class="card">
            <div class="card-header"><router-link :to="{ name: 'Show', params: { id2: newuser.id } }">{{ newuser.name }}</router-link>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">username:{{ newuser.username }}</li>
              <li class="list-group-item">email:{{ newuser.email }}</li>
              <li class="list-group-item">phone:{{ newuser.phone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button @click="goToHome">Home</button>




  </div>

</template>

<script>
import { ref } from "vue";
import axios from 'axios';

import { useRouter } from "vue-router";

export default {
  name: 'ShowUser',
  setup() {
    const router = useRouter();
   
    const users = ref([])
    const loading = ref(true)


    function goToHome() {
      router.push('/')
    }

    function getuser() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          users.value = response.data;
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
    getuser();
    return { loading, users, goToHome };
  },

};
</script>

<style scoped></style>