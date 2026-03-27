<template>
    <div class="tournament-item">
        <NuxtLink :to="`/tournament/${id}`" class="tournament-item-link">
            <div class="title">{{ title }}</div>
        </NuxtLink>
        
        <MyButton
            @click.stop="handleDeleteTournament(id)"
            class="delete-btn"
        >
            Удалить
        </MyButton>
    </div>
</template>

<script setup lang="ts">
import { useTournamentStore } from '#imports';

import MyButton from '~/ui/MyButton.vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Турнир'
    },
    id: {
        type: [Number, String],
        required: true
    }
})

const tournamentStore = useTournamentStore()

const handleDeleteTournament = (id: number | string) => {
    tournamentStore.deleteTournament(id)
}

</script>

<style scoped lang="less">
.tournament-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: rgb(238, 215, 187);
    border-radius: 5px;
}

.tournament-item-link {
    text-decoration: none;
}

.title {
    font-size: 20px;
    color: @text-dark;
    transition: all 0.2s ease;

    &:hover {
        color: @red-500;
    }
}
</style>


