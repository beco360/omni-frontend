<template>
  <div id="app">
    <VerticalNavBar />
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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

<style></style>
