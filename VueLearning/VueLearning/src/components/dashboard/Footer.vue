<template>
  <footer class="main-footer">
    <strong>{{bannerText}}</strong>
    <div class="float-right d-none d-sm-inline-block">
      <b>Version:</b> {{ version }}
    </div>
  </footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Footer",

  computed: {
    ...mapGetters(["bannerText","version"])
  }
}
</script>

<style scoped>

</style>
