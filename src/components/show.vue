<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4">
        <div>


          <div class="card">
            <div class="card-header">{{ user.name }}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">username:{{ user.username }}</li>
              <li class="list-group-item">email:{{ user.email }}</li>
              <li class="list-group-item">phone:{{ user.phone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <hr>

  </div>
</template>

<script>
import { ref } from "vue";

import { useRoute } from "vue-router";
import axios from 'axios';

export default {
  name: 'ShowUser',
  setup() {

    const route = useRoute();
    const user = ref([])
    const loading = ref(true)



    function getuser() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id2}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
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
    return { loading, user };
  },

};
</script>

<style scoped></style>