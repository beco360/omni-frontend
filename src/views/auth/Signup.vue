<template>
  <div>
    <form action="/signup" method="post">
      <label for="email">Correo electrónico</label>
      <input type="text" id="email" name="email"/>
      <label for="password">Contraseña</label>
      <input type="text" id="password" name="password"/>
      <input type="submit" value="Registrarse" />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>