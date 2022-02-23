<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand"
       :class="darkMode ? 'navbar-dark' : 'navbar-white navbar-light'"
  >
  <!-- Left navbarContainer links -->
  <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" data-widget="pushmenu" role="button"><i
      class="fas fa-bars"/></a>
    </li>
  </ul>
  <!-- Right navbarContainer links -->
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
    </li>
    <li class="nav-item">
      <a class="nav-link"
         data-widget="control-sidebar"
         data-slide="true" role="button"
         title="Switch to Dark mode"
         v-on:click="toggle"
      >
      <i class="fas" :class="darkMode ? 'fa-moon' : 'fa-sun'">
      </i>
      </a>
    </li>
    <li class="nav-item">
    </li>
  </ul>
  </nav>
  <!-- /.navbarContainer -->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "NavBar",
  computed: {
    darkMode() {
      return this.$store.state.darkMode.dark_mode
    }
  },
  methods:{
    toggle() {
      this.$store.commit('darkMode/toggle')
    },
    ...mapMutations({
      toggle: 'darkMode/toggle'
    })
  }
}
</script>

<style scoped>

</style>
