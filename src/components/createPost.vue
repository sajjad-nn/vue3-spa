<template>
  <div class="col-md-6">
    <h2 class="mb-5  ">create post:</h2>
    <form @submit.prevent="validate">

      <div class="mb-3">
        <label class="form-label">title:</label>
        <input type="text" class="form-control" v-model="form.title">
        <div class="form-text text-danger">{{ form.titleErorrText }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">body:</label>
        <textarea class="form-control" v-model.lazy.trim="form.body"></textarea>
      </div>
      <div class="form-text text-danger">{{ form.bodyErorrText }}</div>
      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        create post
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2'
export default {
  setup() {

    const loading = ref(false);
    const form= reactive({
        title:"",
        titleErorrText:"",
        body:"",
        bodyErorrtext:""
    });

    function validate() {
      if (form.title === "") {
        form.titleErorrText = "title is required"
      } else {
        form.titleErorrText = ""
      }
      if (form.body === "") {
        form.bodyErorrText = "body is required"
      } else {
        form.bodyErorrText = ""
      }
      if (form.title !== "" && form.body !== "") {
        createpost()
        loading.value = true;
      }
    }
    function createpost() {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
        userId: 1,
      })
        .then(function (response) {
          loading.value = false;
          Swal.fire({
            title: 'thank u!!!!',
            text: 'post create successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })
          // handle success
          console.log(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

    }

    return { form, loading, validate }
  }
}
</script>

<style></style>