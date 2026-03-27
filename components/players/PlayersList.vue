<template>
    <div class="players-list">
        <div class="players__container">
            <div
            v-for="item in playersStore.PlayersList"
            :key="item.id"
            v-if="playersStore.PlayersList.length"
            class="player-item"
            >
            <PlayerItem 
            :id="item.id"
            :name="item.name"
            :rating="item.rating"
            /> 
            </div>

            <h2 v-else class="empty"> Добавьте первого участника</h2>
        </div>
    </div>
</template>

<script setup>
import { usePlayersStore } from '#imports';
import PlayerItem from './PlayerItem.vue';

const playersStore = usePlayersStore()

</script>

<style scoped>
.players-list {
    width: 100%;
    min-height: 100px;
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
}

.players__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.empty {
    font-size: 26px;
    margin-bottom: 16px;
    text-align: center;
    margin-top: 50px;
    color: #d23434;
}
</style>