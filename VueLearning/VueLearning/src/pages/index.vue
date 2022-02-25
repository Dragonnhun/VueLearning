<template>
  <div class="sidebar-mini layout-fixed sidebar-height"
       :class="[dark_mode ? 'dark-mode': '', show_sidebar ? 'sidebar-collapse' : '']"
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
import {mapGetters} from "vuex";

export default {
  components: {
    NavBar,
    Footer,
    SidebarContainer
  },

  computed: {
    ...mapGetters(["dark_mode","show_sidebar"])
  },
}
</script>

<style scoped>
.sidebar-height {
  height: auto
}
</style>
