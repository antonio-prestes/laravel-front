<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'home'}" v-if="loggedIn">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{name:'login'}" v-if="!loggedIn">Login</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{name:'logout'}" v-if="loggedIn">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "teste",
  computed: {
    loggedIn(){
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>

</style>