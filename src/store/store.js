import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  raceTypes: {
    dog: false,
    trot: true,
    gallop: true,
    jump: true
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  toggleDog (state) {
    state.raceTypes.dog = !state.raceTypes.dog
  },
  toggleTrot (state) {
    state.raceTypes.trot = !state.raceTypes.trot
  },
  toggleGallop (state) {
    state.raceTypes.gallop = !state.raceTypes.gallop
  },
  toggleJump (state) {
    state.raceTypes.jump = !state.raceTypes.jump
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  toggleDog: ({ commit }) => commit('toggleDog'),
  toggleTrot: ({ commit }) => commit('toggleTrot'),
  toggleGallop: ({ commit }) => commit('toggleGallop'),
  toggleJump: ({ commit }) => commit('toggleJump')
}

// getters are functions that return back a piece of your state
const getters = {
  hasDogFilter: state => state.raceTypes.dog,
  hasTrotFilter: state => state.raceTypes.trot,
  hasGallopFilter: state => state.raceTypes.gallop,
  hasJumpFilter: state => state.raceTypes.jump
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
