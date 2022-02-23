<template>
  <div class="sidebar-mini layout-fixed dark-mode sidebar-collapse sidebar-height">
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

import { mapMutations } from 'vuex'


export default {
  name: "Dashboard",
  components: {NavBar, Footer, SidebarContainer}
}
</script>

<style scoped>
.sidebar-height {
  height: auto
}
</style>
