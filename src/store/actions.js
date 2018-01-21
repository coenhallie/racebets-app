import axios from 'axios'

export default {
  viewRace ({ commit }, raceId) {
    commit('viewRace', raceId)
  },
  fetchRaceData ({ commit }, response) {
    axios.get(`static/next_races.json`)
      .then((response) => {
        commit('fetchRaceData', response.data.data.races[0])
        this.racedata = response.data.data.races[0]
        console.log('Axios Vuex works', response.data.data.races[0])
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
