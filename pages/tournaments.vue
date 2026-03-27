<template>
  <div class="tournaments-page">
    <div class="header">
      <h1>Мои турниры</h1>
      <NuxtLink to="/tournaments/new" class="btn-create">
        + Создать турнир
      </NuxtLink>
    </div>
    <TournamentList />
  </div>
</template>

<script setup>
import TournamentList from '~/components/tournament/TournamentList.vue'
</script>

<style scoped>
.tournaments-page {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.btn-create {
  background-color: #42b983;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
}
</style>