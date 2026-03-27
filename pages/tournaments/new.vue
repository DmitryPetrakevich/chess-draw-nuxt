<template>
  <div class="create-tournament">
    <NuxtLink to="/" class="back-link">← На главную</NuxtLink>
    <h1>Создание турнира</h1>
    <TournamentForm />
  </div>
</template>

<script setup>
import TournamentForm from '~/components/tournament/TournamentForm.vue'
</script>

<style scoped>
.create-tournament {
  max-width: 600px;
  margin: 0 auto;
}

.back-link {
  color: #42b983;
  text-decoration: none;
}
</style>