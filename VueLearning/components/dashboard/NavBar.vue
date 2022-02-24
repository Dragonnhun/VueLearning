<template>
  <!-- Navbar -->
  <nav :class="darkMode ? 'navbar-dark' : 'navbar-white navbar-light'"
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
          <i :class="darkMode ? 'fa-moon' : 'fa-sun'" class="fas"/>
        </a>
      </li>
      <li class="nav-item">
      </li>
    </ul>
  </nav>
  <!-- /.navbarContainer -->
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "NavBar",
  computed: {
    darkMode() {
      return this.$store.state.userInterface.dark_mode
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('userInterface.js/toggleDarkMode')
    },
    toggleShowSidebar() {
      this.$store.commit('userInterface/toggleShowSidebar')
    },
    ...mapMutations({
      toggleDarkMode: 'userInterface/toggleDarkMode',
      toggleShowSidebar: 'userInterface/toggleShowSidebar'
    })
  }
}
</script>

<style scoped>

</style>
