<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="credentials.email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="credentials.password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.credentials).then(() => {
        this.$router.push(
            {name: 'home'}
        )
      })
    }
  }
}
</script>

<style scoped>

</style>