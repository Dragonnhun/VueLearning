<template>
  <!-- Brand Logo -->
  <a href="/" class="brand-link">
    <img src="~/assets/img/AdminLTELogo.png" alt="AdminLTE Logo"
         class="brand-image img-circle elevation-3 logo"/>
    <span class="brand-text font-weight-light"> {{bannerText}}</span>
  </a>
</template>

<script>
export default {
  name: "Logo",
  computed: {
    bannerText() {
      return this.$store.state.userInterface.bannerText
    }
  }
}
</script>

<style scoped>
.logo {
  opacity: .8
}
</style>
