<template>
  <div class="sidebar-mini layout-fixed dark-mode sidebar-collapse sidebar-height">
    <div className="wrapper">
      <SidebarContainer/>
      <div className="content-wrapper">
        <span>Content here</span>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarContainer from "@/components/sidebarContainer/SidebarContainer";
export default {
  name: "Dashboard",
  components: {SidebarContainer},
}
</script>

<style scoped>
.sidebar-height {
  height: auto
}
</style>
