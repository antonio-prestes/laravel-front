<template>

</template>

<script>
export default {
  name: "Logout",
  created() {
    this.$store.dispatch('logout').then(() => {
      this.$router.push(
          {name: 'login'}
      )
    })
  }
}
</script>

<style scoped>

</style>