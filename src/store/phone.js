import axios from 'axios'
export default {
  namespaced: true,
  state: {
    phones: []
  },
  getters: {

  },
  mutations: {
    setphones (state, phones) {
      state.phones = phones
    }
  },
  actions: {
    async getphones ({ commit }) {
      axios.get('/phone')
        .then(response => {
          commit('setphones', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async addphone (context, phone) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.post('/phone', {
        phone: phone
      })
      context.dispatch('getphones')
    }
  }
}
