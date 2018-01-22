export default {
  // racetypes is for filtering the race types from inactive to active, thus adding them to to the NextRaces array
  raceTypes (state) {
    return state.raceFilters.filter(race => {
      return !race.active
    })
  },
  // fetchRaceData is for fetching data from the JSON file with the race data
  fetchRaceData (state) {
    return state.fetchRaceData
  },
  // to see if there are active races already in the NextRaces array
  nextRaces (state) {
    return state.nextRaces
  },
  // to show the total results in the NextRaces array
  results (state) {
    return state.nextRaces.length
  }
}
