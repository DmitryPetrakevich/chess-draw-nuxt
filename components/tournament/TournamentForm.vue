<template>
    <div class="tournament-form">
        <div class="tournament-form__container">
            <MyInput 
            v-model="tournamentTitle"
            placeholder="Название турнира..."
            @keyup.enter="handleSubmit"
            />
            
            <MyButton
            @click="handleSubmit"
            >
            Создать турнир
            </MyButton>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTournamentStore } from '~/stores/tournament';

import MyButton from '~/ui/MyButton.vue';
import MyInput from '~/ui/MyInput.vue';

const tournamentStore = useTournamentStore()
const tournamentTitle = ref('')

const handleSubmit = () => {
    if(tournamentTitle.value.trim()) {
        tournamentStore.handleAddTournament(tournamentTitle.value)
        tournamentTitle.value = ''
    } else {
        return
    }
}
</script>

<style scoped>
.tournament-form {
    width: 100%;
    height: 200px;
    border: 2px solid black;
    box-sizing: border-box;
    border-radius: 5px;
}

.tournament-form__container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>