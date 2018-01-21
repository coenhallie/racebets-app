export default {
  raceTypes (state) {
    return state.raceFilters.filter(race => {
      return !race.active
    })
  },
  nextRaces (state) {
    return state.nextRaces
  },
  results (state) {
    return state.nextRaces.length
  }
}