<template>
  <div class="sidebar-mini layout-fixed sidebar-height"
       :class="[darkMode ? 'dark-mode': '', sideBarState ? 'sidebar-collapse' : '']"
  >
    <div class="wrapper">
      <NavBar/>
      <SidebarContainer/>
      <div class="content-wrapper">
        <span>Content here</span>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import SidebarContainer from "@/components/dashboard/sidebarContainer/SidebarContainer";
import Footer from "@/components/dashboard/Footer";
import NavBar from "@/components/dashboard/NavBar";

export default {
  name: "Dashboard",
  components: {NavBar, Footer, SidebarContainer},
  computed: {
    darkMode() {
      return this.$store.state.userInterface.dark_mode
    },
    sideBarState() {
      return this.$store.state.userInterface.show_sidebar
    }
  }
}
</script>

<style scoped>
.sidebar-height {
  height: auto
}
</style>
