<template>
  <div class="app">
    <div class="app__container">
      <NuxtRouteAnnouncer />
      <PageHeader></PageHeader>

      <div class="app-content">
        <NuxtPage /> 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';

</script>

<style scoped lang="less">
.app {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: rgb(237, 237, 237);
}

.app__container {
  padding: 0 120px;
  box-sizing: border-box;
  box-sizing: border-box;
}

.app-content {
  margin-top: 40px;
  box-sizing: border-box;
}

</style>


