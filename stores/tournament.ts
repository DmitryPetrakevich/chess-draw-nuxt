import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTournamentStore = defineStore('tournament', () => {
    const tournamentsList = ref([
        {id: Date.now(), title: "Турнир1", drawMethod: 'Швейцарская', date: '12.04.2026', place: "Tomsk", timeControl: '10+0', judge: 'Dmitry Petrakevich'},
    ])

    const addTournament = (newTitle: string, newMethod: string, newDate: string, newPlace: string, newTime: string, newJudge: string) => {
        const newItem = {
            id: Date.now(),
            title: newTitle,
            drawMethod: newMethod,
            date: newDate,
            place: newPlace,
            timeControl: newTime,
            judge: newJudge

        }

        tournamentsList.value = [...tournamentsList.value, newItem]
    }

    const deleteTournament = (id: string | number) => {
        tournamentsList.value = tournamentsList.value.filter(i => i.id !== id)
    }

  return {
    tournamentsList,
    addTournament,
    deleteTournament
  }
})