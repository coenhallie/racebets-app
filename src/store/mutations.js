export default {
  viewRace (state, raceId) {
    const race = state.raceFilters.find(race => {
      return race.id === raceId
    })
    race.active = true
    const activeRace = {
      raceId: raceId,
      name: race.runners.name,
      silk: race.runners.silk
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
  }
}
