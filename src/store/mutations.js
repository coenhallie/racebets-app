export default {
  viewRace (state, raceId) {
    const race = state.raceFilters.find(race => {
      return race.id === raceId
    })
    race.active = true
    const activeRace = {
      raceId: race.id,
      raceType: race.type,
      racePurse: race.purse
    }
    state.nextRaces.push(activeRace)
  },
  removeRace (state, payload) {
    const race = state.raceFilters.find(race => {
      return race.id === payload.raceId
    })
    race.active = false
    const activeRace = state.nextRaces.find(activeRace => {
      return activeRace.raceId === payload.raceId
    })
    state.nextRaces.splice(state.nextRaces.indexOf(activeRace), 1)
  },
  fetchRaceData (state, response) {
    console.log('fetchRaceData mutations')
  },
  SET_RACE (state, race) {
    state.race = race
  }
}
