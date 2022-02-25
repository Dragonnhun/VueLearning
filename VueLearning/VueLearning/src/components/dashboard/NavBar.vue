<template>
  <!-- Navbar -->
  <nav :class="dark_mode ? 'navbar-dark' : 'navbar-white navbar-light'"
       class="main-header navbar navbar-expand"
  >
    <!-- Left navbarContainer links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link"
           data-widget="pushmenu"
           role="button"
           v-on:click="toggleShowSidebar"
        >
          <i class="fas fa-bars"/>
        </a>
      </li>
    </ul>
    <!-- Right navbarContainer links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      </li>
      <li class="nav-item">
        <a class="nav-link"
           data-slide="true"
           data-widget="control-sidebar" role="button"
           title="Switch to Dark mode"
           v-on:click="toggleDarkMode"
        >
          <i :class="dark_mode ? 'fa-moon' : 'fa-sun'" class="fas"/>
        </a>
      </li>
      <li class="nav-item">
      </li>
    </ul>
  </nav>
  <!-- /.navbarContainer -->
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "NavBar",

  computed: {
    ...mapGetters(["dark_mode","show_sidebar"])
  },

  methods: {
    toggleDarkMode() {
      this.$store.dispatch('toggleDarkMode');
    },

    toggleShowSidebar() {
      this.$store.dispatch('toggleShowSidebar');
    }
  }
}
</script>

<style scoped>

</style>
