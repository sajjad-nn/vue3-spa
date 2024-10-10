<template>
  <div>
    <h2>{{ title }}</h2>
    <p class="p">
      page is not found
    </p>
    
    <hr>

  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: 'NotFound',
  setup() {
    const title = ref("NotFound Page");
    
    const router = useRouter();
   
    function goToHome() {
      router.push('/')
    } 

    return { title,goToHome };
  },
};
</script>

<style scoped>
.p{
  font-size: 70px;
}
</style>