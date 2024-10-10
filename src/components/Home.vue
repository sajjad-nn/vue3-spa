<template>
  <div>
    <h2>{{ title }}</h2>
   
   <button class="btn btn-primary me-3 "><router-link  :to="{name:'myposts'}">posts</router-link></button>
   <button class="btn btn-danger"><router-link  :to="{name:'users'}">users</router-link></button>
    
  </div>
</template>

<script>
import { ref } from "vue";



export default {
  name: 'MyHome',
  setup() {
    const title = ref("Home Page");
    


    return { title, };
  },
};
</script>

<style >
.space{

margin:1rem;

}
</style>