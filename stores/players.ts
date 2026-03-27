import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayersStore = defineStore("player", () => {
  const PlayersList = ref([
    { id: Date.now(), name: "Петракевич Дмитрий", rating: 1000 },
  ]);

  const addPlayer = (NewName: string, NewRating: number) => {
    const newPlayer = {
      id: Date.now(),
      name: NewName,
      rating: NewRating,
    };

    PlayersList.value = [...PlayersList.value, newPlayer];
  };

  const deletePlayer = (id: number | string) => {
    PlayersList.value = PlayersList.value.filter(i => i.id !== id)
  }

  return {
    PlayersList,
    addPlayer,
    deletePlayer,
  };
});
