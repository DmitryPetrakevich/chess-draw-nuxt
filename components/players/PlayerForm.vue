<template>
    <div class="player-form">
        <MyInput 
        v-model="playerName"
        placeholder="Имя игрока"
        />

         <MyInput 
        v-model="playerRating"
        placeholder="Рейтинг игрока"
        type="number"
        />

        <MyButton
        @click="handleAddPlayer()"
        >
        Добавить игрока
        </MyButton>
    </div>
  
</template>

<script setup>
import { usePlayersStore } from '#imports';
import { ref } from '#imports';
import MyButton from '~/ui/MyButton.vue';
import MyInput from '~/ui/MyInput.vue';

const playersStore = usePlayersStore()

const playerName = ref('')
const playerRating  =ref(1000)

const handleAddPlayer = () => {
    if(playerName.value.trim() && playerRating.value) {
        playersStore.addPlayer(playerName.value, playerRating.value)
        playerName.value = ""
        playerRating.value = ""
    }
}
</script>

<style scoped>
.player-form {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
}
</style>