<template>
  <div class="vertical-menu">
    <div>
        Montechelo
    </div>
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Iniciar sesión</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/"><i class="fas fa-sliders-h"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../assets/base.css");
.vertical-menu {
  width: 80px; /* Set a width if you like */
  height: 100vh;
}

.vertical-menu a {
  color: var(--secondary-color);
  display: block;
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
  text-align: center;
  font-size: 25px;
}

.vertical-menu a:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.vertical-menu a.router-link-exact-active {
  background-color: #4caf50; /* Add a green color to the "active/current" link */
  color: white;
}
</style>
