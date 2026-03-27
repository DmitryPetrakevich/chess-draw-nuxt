<template>
  <div class="tournament-form">
    <div class="tournament-form__container">
      <div class="section">
        <label> Название турнира </label>

        <MyInput v-model="tournamentTitle" class="input" />
      </div>

      <div class="section">
        <label> Судья соревнования </label>

        <MyInput v-model="tournamentJudge" />
      </div>

      <div class="section">
        <label> Дата проведения </label>

        <MyInput v-model="tournamentDate" type="date" />
      </div>

      <div class="section">
        <label> Место проведения </label>

        <MyInput v-model="tournamentLocation" />
      </div>

      <div class="section">
        <label> Метод жеребьевки </label>

        <MySelect v-model="drawMethod" :options="drawOptions" />
      </div>
      <div class="section">
        <label> Контроль времени </label>

        <MyInput v-model="timeControl" />
      </div>

      <MyButton @click="handleSubmit"> Создать турнир </MyButton>

      <p v-if="isError" class="error">Заполните все поля!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTournamentStore } from "~/stores/tournament";

import MyButton from "~/ui/MyButton.vue";
import MyInput from "~/ui/MyInput.vue";
import MySelect from "~/ui/MySelect.vue";

const tournamentStore = useTournamentStore();
const tournamentTitle = ref("");
const tournamentJudge = ref("");
const tournamentDate = ref("");
const tournamentLocation = ref("");
const drawMethod = ref("Швейцарская");
const timeControl = ref("");

const isError = ref(false);
let errorTimer = null;

const drawOptions = ref([
  { text: "Швейцарская", value: "swiss" },
  { text: "Круговая", value: "roundRobin" },
]);

const handleSubmit = () => {
    if(!tournamentTitle.value.trim() 
    || !tournamentJudge.value.trim()
    || !drawMethod.value
    || !tournamentDate.value.trim()
    || !tournamentLocation.value.trim()
    || !timeControl.value.trim()
    ) {
        showError();
        return;
    }

  tournamentStore.addTournament(
    tournamentTitle.value,
    drawMethod.value,
    tournamentDate.value,
    tournamentLocation.value,
    timeControl.value,
    tournamentJudge.value,
  );

  tournamentTitle.value = "";
  tournamentJudge.value = "";

  isError.value = false;
};

const showError = () => {
    if(errorTimer) {
        clearTimeout(errorTimer)
    }

    isError.value = true;

    errorTimer = setTimeout(() => {
        isError.value = false;
        errorTimer = null;
    }, 3000)
}
</script>

<style scoped lang="less">
.tournament-form {
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: @font-primary;
}

.tournament-form__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 10px;
  box-sizing: border-box;
}

.section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}

.input {
  width: 100%;
}

label {
  font-size: 18px;
  min-width: 150px;
  white-space: nowrap;
}

.error {
    text-align: center;
    font-weight: 500;
    color: @red-700;
}
</style>
