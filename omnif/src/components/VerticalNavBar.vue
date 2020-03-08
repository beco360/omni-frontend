<template>
  <div class="vertical-menu">
    <img src="https://www.beco360.com/assets/brand/Logo.png" />
    <router-link to="/inbox">
      <i class="fas fa-inbox"></i>
      <span>Inbox</span>
    </router-link>
    <router-link to="/mi">
      <i class="fas fa-comments"></i>
      <span>Me</span>
    </router-link>
    <router-link to="/history">
      <i class="fas fa-history"></i>
      <span>History</span>
    </router-link>
    <router-link to="/settings">
      <i class="fas fa-sliders-h"></i>
      <span>Settings</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vertical-menu {
  width: 80px; /* Set a width if you like */
  height: 100vh;
  text-align: center;
}

.vertical-menu img {
  padding-top: 10px;
  height: 50px;
  width: 50px;
}

.vertical-menu a {
  color: var(--primary-color-inactive);
  display: block;
  padding: 12px;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
}

.vertical-menu a.router-link-exact-active {
  color: var(--primary-color);
}

.vertical-menu a span {
  display: block;
  font-size: 15px;
  font-weight: 100;
}
</style>