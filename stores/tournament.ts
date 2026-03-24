import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTournamentStore = defineStore('tournament', () => {
    const tournamentsList = ref([
        {title: "Турнир1", id: Date.now()},
        {title: "Турнир3", id: Date.now()},
    ])

    const handleAddTournament = (newTitle: string) => {
        const newItem = {
            title: newTitle,
            id: Date.now()
        }

        tournamentsList.value = [...tournamentsList.value, newItem]
    }

  return {
    tournamentsList,
    handleAddTournament,
  }
})