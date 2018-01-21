import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nextRaces: [],
    raceFilters: [
      {id: 1, type: 'Dog', active: false},
      { id: 2, type: 'Horse', active: false },
      { id: 3, type: 'Gallop', active: false }
    ]
  },
  getters,
  mutations,
  actions
})
