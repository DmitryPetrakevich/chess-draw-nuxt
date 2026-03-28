<template>
    <div class="home">
        <TournamentForm />
        
        <div class="tournaments-section">
            <h2 class="my-title">Мои турниры</h2>
            <TournamentList
            v-if="tournamentStore.tournamentsList.length"
            />
            <h2 v-else class="empty"> Добавьте свой первый турнир</h2>
        </div>
    </div>
</template>

<script setup>
import { useTournamentStore } from '#imports';

import TournamentList from '~/components/tournament/TournamentList.vue'
import TournamentForm from '~/components/tournament/TournamentForm.vue';

const tournamentStore = useTournamentStore()


</script>

<style scoped lang="less">
.home {
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    font-family: @font-primary;
}

.tournaments-section {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 20px;
}

.my-title {
    font-size: 32px;
    margin-bottom: 16px;
    font-weight: 500;
    text-align: center;
    color: #333;
}

.empty {
    font-size: 26px;
    margin-bottom: 16px;
    text-align: center;
    margin-top: 20px;
    color: #d23434;
}

p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 32px;
}

.btn-primary {
    display: inline-block;
    background-color: #42b983;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: #33a06f;
}

.tournaments-section {
    margin-top: 48px;
    text-align: left;
}

</style>