<template>
  <footer class="main-footer">
    <strong>Simple Chat</strong>
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
      return 1
    }
  }
}
</script>

<style scoped>

</style>
