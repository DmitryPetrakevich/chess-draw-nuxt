<template>
    <div class="tournament-list">
        <div 
        v-for="item in tournamentStore.tournamentsList"
        :key="item.id"
        class="list"
        
        >
        <TournamentItem 
        :title="item.title"
        />
            
        </div>
    </div>
</template>

<script setup>
import { useTournamentStore } from '~/stores/tournament';
import TournamentItem from './TournamentItem.vue';

const tournamentStore = useTournamentStore()

</script>

<style scoped lang="less">
.tournament-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>