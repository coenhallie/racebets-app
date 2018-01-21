export default {
  raceTypes (state) {
    return state.raceFilters.filter(race => {
      return !race.active
    })
  },
  fetchRaceData (state) {
    return state.fetchRaceData
  },
  nextRaces (state) {
    return state.nextRaces
  },
  results (state) {
    return state.nextRaces.length
  }
}
