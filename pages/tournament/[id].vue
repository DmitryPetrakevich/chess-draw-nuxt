<template>
    <div class="tournament-page">
        <p class="title">{{ tournament?.title || 'Загрузка...' }}</p>
        <div class="tournament-info">
    
            <p class="general-info">Общая информация</p>
            <p class="info"> <strong>Метод жеребьвеки:</strong> {{ tournament?.drawMethod }}</p>
            <p class="info"> <strong>Дата проведения:</strong> {{ tournament?.date }}</p>
            <p class="info"> <strong>Место проведения:</strong> {{ tournament?.place }}</p>
            <p class="info"> <strong>Контроль времени:</strong> {{ tournament?.timeControl }}</p>
            <p class="info"> <strong>Главный судья:</strong> {{ tournament?.judge }}</p>
        </div>

        <PlayerForm /> 

        <PlayersList />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTournamentStore } from '~/stores/tournament'
import { usePlayersStore } from '#imports'

import PlayersList from '~/components/players/PlayersList.vue'
import PlayerForm from '~/components/players/PlayerForm.vue'

const route = useRoute()
const tournamentId = route.params.id

const tournamentStore = useTournamentStore()
const playersStore = usePlayersStore()

const tournament = computed(() => {
    return tournamentStore.tournamentsList.find(t => t.id == tournamentId)
})
</script>

<style scope lang="less">
.tournament-page {
    width: 100%;
    font-family: @font-primary;
}

.tournament-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border: 1px solid black;
    border-radius: 5px;
    gap: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
}

.title {
    font-size: 36px;
    margin-bottom: 10px;
}

.general-info {
    font-size: 20px;
    border-bottom: 1px solid black;
    padding: 10px 15px;
    background-color: @gray-300;
    
}

.info {
    font-size: 16px;
    border-bottom: 1px solid black;
    padding: 5px 15px;
}

label {
    font-size: 20px;
}
</style>