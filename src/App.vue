<template>
  <div id="app">
    <VerticalNavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import VerticalNavBar from "@/components/VerticalNavBar.vue";
export default {
  components: {
    VerticalNavBar
  }
};
</script>

<style scoped>
@import url("assets/base.css");
#app {
  height: 100vh;
  display: flex;
}
</style>