<template>
  <div class="search-wrapper">
    <input type="text" class="search" placeholder="Buscar" />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-wrapper {
  position: relative;
  display: block;
}
.search {
  border: 0;
  background: #f5f7fa;
  padding: 12px;
  width: 80%;
  border-radius: 10px;
  color: #888;
}
.search:focus {
    outline: none;
}
i {
  position: absolute;
  right: 30px;
  top:12px;
}
</style>