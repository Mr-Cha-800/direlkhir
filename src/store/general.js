import axios from 'axios'

export default {
  namespaced: true,
  state: {
    alerts: [],
    helps: [],
    histoires: [],
    recent: [],
    count: ''
  },
  getters: {
    getalerts (state) {
      return state.alerts
    },
    gethelps (state) {
      return state.helps
    },
    gethistoires (state) {
      return state.histoires
    },
    getrecent (state) {
      return state.recent
    },
    getcountv (state) {
      return state.count
    }
  },
  mutations: {
    setalerts (state, alerts) {
      state.alerts = alerts
    },
    sethelps (state, helps) {
      state.helps = helps
    },
    sethistoires (state, histoires) {
      state.histoires = histoires
    },
    setonehist (state, hist) {
      state.histoires = hist
    },
    deletehist (state, id) {
      state.histoires = state.histoires.filter(histoire => histoire.id !== id)
    },
    setrecent (state, recent) {
      state.recent = recent
    },
    setcount (state, count) {
      state.count = count
    }
  },
  actions: {
    async getalertss ({ commit }) {
      await axios.get('/Alerts')
        .then(response => {
          commit('setalerts', response.data)
        })
    },
    async gethelpss ({ commit }) {
      await axios.get('/Helps')
        .then(response => {
          commit('sethelps', response.data)
        })
    },
    async gethistoiress ({ commit }) {
      await axios.get('/Histoire')
        .then(response => {
          commit('sethistoires', response.data)
        })
    },
    async gethistoiresdash (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/Histoire/dash')
        .then(response => {
          context.commit('sethistoires', response.data)
        })
    },
    async getonehistoire ({ commit }, id) {
      await axios.get('/Histoire/' + id)
        .then(response => {
          commit('setonehist', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async addhistoire ({ commit }, histoire) {
      await axios.post('/Histoire', {
        nom: histoire.nom,
        sujet: histoire.sujet,
        description: histoire.description,
        typeselect: histoire.typeselect,
        wilayaselect: histoire.wilayaselect
      })
    },
    deletehistoires ({ commit, dispatch }, id) {
      axios.delete('/Histoire/' + id)
        .then(response => {
          commit('deletehist', response.data.id)
          dispatch('gethistoiress')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async getrecents ({ commit }) {
      await axios.get('/recHelps')
        .then(response => {
          commit('setrecent', response.data)
        })
    },
    async getrecentns ({ commit }) {
      await axios.get('/recAlerts')
        .then(response => {
          commit('setrecent', response.data)
        })
    },
    async getrecentstory ({ commit }) {
      await axios.get('/recHistoire')
        .then(response => {
          commit('sethistoires', response.data)
        })
    },
    async updateHistoire ({ commit, dispatch }, histoire) {
      await axios.patch('/Histoire/' + histoire.id, {
        nom: histoire.nom,
        sujet: histoire.sujet,
        description: histoire.description,
        type: histoire.type,
        wilaya: histoire.wilaya
      })
        .then(response => {
          dispatch('getonehistoire', histoire.id)
        })
        .catch(error => {
          console.log(error)
        })
    },
    gethistoiressearched ({ commit }, cherche) {
      axios.get('/Histoiresearch/' + cherche)
        .then(response => {
          commit('sethistoires', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
