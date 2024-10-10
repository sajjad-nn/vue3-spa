<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div  v-if="loading" class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      <div v-else >
  <div >
   
    
    <div class="card "  >
      <div class="card-header">title:{{ post.title }}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">username:{{ post.userId }}</li>
    <li class="list-group-item">{{post.body }}</li>
    
  </ul>
</div> 
<div class="card-footer">
  <button @click="deletePost" class="btn btn-sm me-3 mt-2 btn-danger ">delete</button>
  <router-link class="btn btn-sm ms-3 mt-2 btn-primary " :to="{name:'editPost',params:{id:post.id}}">edit</router-link>
</div>
    </div>
   </div>
  </div>

    
    
    <hr>
   
  </div>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import axios from 'axios';

export default {
  name: 'ShowUser',
  setup() {
   
    const route = useRoute();
    const post=ref([])
    const loading = ref(true)

   
   
    function getuser() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then(function (response) {
    // handle success
    post.value=response.data;
    loading.value=false;
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
   
    function deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Thanks!",
            text: `Post (${route.params.id}) deleted successfully`,
            icon: "warning",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  

  
  return {route, loading,post,deletePost  };
  },
  
};
</script>

<style scoped>
</style>