import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nextRaces: [],
    race: [],
    raceFilters: [
      { id: 1, type: 'Dog', active: false, purse: 1000 },
      { id: 2, type: 'Horse', active: false, purse: 2100 },
      { id: 3, type: 'Jumps', active: false, purse: 5000 },
      { id: 4, type: 'Gallop', active: false, purse: 4000 }
    ],
    raceData: []
  },
  getters,
  mutations,
  actions
})
