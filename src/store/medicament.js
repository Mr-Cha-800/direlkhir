import axios from 'axios'
export default {
  namespaced: true,
  state: {
    medic: [],
    onemedic: {}
  },
  getters: {
    getmedicaments (state) {
      return state.medic
    },
    getMedicById (state) {
      return state.onemedic
    }
  },
  mutations: {
    newmedic (state, medic) {
      state.medic = medic
    },
    getmedic (state, medic) {
      state.medic = medic
    },
    deletemedicc (state, id) {
      state.medic = state.medic.filter(medic => medic.id !== id)
    },
    getonemedic (state, onemedic) {
      state.onemedic = onemedic
    }
  },
  actions: {
    async addmedic (context, medic) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      const response = await axios.post('/medic', {
        nompharmacie: medic.nompharmacie,
        addressepharmacie: medic.addressepharmacie,
        nom: medic.nom,
        nommedic: medic.nommedic,
        phone: medic.phone,
        wilayaselect: medic.wilayaselect,
        isallergicselect: medic.isallergicselect,
        description: medic.description,
        ann_ou_bes: medic.ann_ou_bes
      })
        .then(response => {
          this.name = response.data.name
          context.dispatch('getmedicamenst')
        })

      context.commit('newmedic', response.data)
    },
    cancelmedic ({ commit }) {
      alert('hi bitch medic')
    },
    async getmedicamenst (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/medic')
        .then(response => {
          context.commit('getmedic', response.data)
        })
    },
    getonemedicamenst ({ commit }, id) {
      axios.get('/medic/' + id)
        .then(response => {
          commit('getonemedic', response.data)
        })
    },
    deletemedic (context, id) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      axios.delete('/medic/' + id)
        .then(response => {
          context.commit('deletemedicc', response.data)
          context.dispatch('getmedicamenst')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateMedic (context, medic) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.patch('/medic/' + medic.id, {
        nompharm: medic.nompharm,
        addresspharm: medic.addresspharm,
        nomm: medic.nomm,
        nommedic: medic.nommedic,
        tel: medic.tel,
        wilayaselect: medic.wilayaselect,
        allergic: medic.allergic,
        desc: medic.desc
      })
        .then(response => {
          context.dispatch('getonemedicamenst', medic.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
