<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <MyHeader />
</template>

<script>
import MyHeader from './components/Header.vue'


export default {
  name: 'MYApp',
  components: {
    MyHeader
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
