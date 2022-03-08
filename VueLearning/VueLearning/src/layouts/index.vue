<template>
  <div class="sidebar-mini layout-fixed sidebar-height"
       :class="[darkMode ? 'dark-mode': '', showSidebar ? 'sidebar-collapse' : '']"
  >
    <div class="wrapper">
      <NavBar/>
      <SidebarContainer/>
      <div class="content-wrapper">
        <nuxt/>
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
    ...mapGetters(["darkMode","showSidebar"])
  },
}

</script>

<style scoped>

.sidebar-height {
  height: auto
}
</style>
