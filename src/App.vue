<script setup lang="ts">

</script>

<template>
  <header>
    <router-link :to="{ name: 'formulaire-1' }">formulaire 1</router-link>
    <router-link :to="{ name: 'formulaire-2' }">formulaire 2</router-link>
    <router-link :to="{ name: 'formulaire-3' }">formulaire 3</router-link>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  padding: 16px;

  display: flex;
  gap: 16px;
}
</style>
