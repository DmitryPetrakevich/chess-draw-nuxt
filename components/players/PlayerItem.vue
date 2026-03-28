<template>
    <div class="player-item">
        <div class="player-content">
            <div>{{ name }}</div>
            <div>{{ rating }}</div>
        </div>

        <MyButton
        @click="handleDeletePlayer(id)"
        size="small"
        :icon="deleteIcon"
        iconAlt="Удалить"
        />
    </div>
  
</template>

<script setup>
import { usePlayersStore } from '#imports';
import MyButton from '~/ui/MyButton.vue';

import deleteIcon from '~/assets/icons/delete.svg'

const playerStore = usePlayersStore()

const props = defineProps({
    id: {
        type: Number,
        default: Date.now()
    },

    name: {
        type: String,
        default: 'Игрок'
    },
    rating: {
        type: Number,
        default: 1000
    }
})

const handleDeletePlayer = (id) => {
    playerStore.deletePlayer(id)
}

</script>

<style scoped lang="less">
.player-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(209, 210, 210);
    padding: 5px 20px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
       background-color: rgb(192, 193, 193);
    }
}

.player-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 250px;
}
</style>