<template>
    <div class="tournament-item">
        <div class="title-wrapper">
            <NuxtLink :to="`/tournament/${id}`" class="tournament-item-link">
                {{ title }}
            </NuxtLink>
        </div>
        
        <MyButton
            @click.stop="handleDeleteTournament(id)"
            class="delete-btn"
            size="small"
            :icon="deleteIcon"
            iconAlt="Удалить"
        />
    </div>
</template>

<script setup lang="ts">
import { useTournamentStore } from '#imports';

import MyButton from '~/ui/MyButton.vue';

import deleteIcon from '~/assets/icons/delete.svg'

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

.title-wrapper {
    display: flex;
    align-items: center;
}

.tournament-item-link {
    display: inline-block;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 500;
    color: @text-dark;
    text-decoration: none;
    
    &:hover {
        color: @red-500;
    }
}

.delete-btn {
    margin-left: 16px;
}
</style>


