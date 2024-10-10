<template>
  <div class="hello">

  </div>

  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">myspa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">

            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/users" class="nav-link">Users</router-link>
            <router-link to="/posts" active-class="active" class="nav-link ">Post</router-link>


          </div>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'MyHeader',


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #141411;
}

.router-link-active {
  color: red !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}

.active {
  color: rgb(70, 221, 115) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>
