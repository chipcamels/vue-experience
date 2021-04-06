import { createStore } from 'vuex'

export default createStore({
  state: {
    locations: [],
    currentCity: ''
  },
  mutations: {
    addLocation: (state, location) => {
      for (let i = 0; i < state.locations.length; i++) {
        if (state.locations[i].name === location.name) {
          state.locations.splice(i, 1)
          break
        }
      }
      state.locations.push(location)
    },
    addCurrentCity: (state, city) => {
      state.currentCity = city
    }
  },
  actions: {
    async createProduct ({ commit }, location) {
      commit('addLocation', location)
    },
    async changeCity ({ commit }, city) {
      commit('addCurrentCity', city)
    }
  },
  modules: {
  },
  getters: {
    getLocationByCity: (state) => {
      return state.locations.find(location => location.name === state.currentCity).next_days
    }
  }
})
