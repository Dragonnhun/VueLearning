<template>
  <footer class="main-footer">
    <strong>{{bannerText}}</strong>
    <div class="float-right d-none d-sm-inline-block">
      <b>Version:</b> {{ version }}
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  computed: {
    version() {
      return this.$store.state.userInterface.version
    },
    bannerText() {
      return this.$store.state.userInterface.bannerText
    }
  }
}
</script>

<style scoped>

</style>
