<template>
  <div class="col-md-6">
    <h2 class="mb-5">edit Post :</h2>

    <form @submit.prevent="validate">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model.lazy.trim="form.title"
        />
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea class="form-control" rows="6" v-model.lazy.trim="form.body"></textarea>
        <div class="form-text text-danger">
          {{ form.bodyErrorText }}
        </div>
      </div>

      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        edit Post
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
export default {
  setup() {
  
    const route=useRoute();
    const form= reactive({
        title:"",
        titleErorrText:"",
        body:"",
        bodyErorrtext:""
    });
    const loading = ref(false);

    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  .then(function (response) {
    // handle success

    form.title=response.data.title;
    form.body=response.data.body;

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }
   getPost();

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        editPost();
      }
    }

    function editPost() {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${route.params.id}`, {
          id:route.params.id,
          title: form.title,
          body: form.bady,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { form, validate, loading };
  },
};
</script>

<style>
</style>