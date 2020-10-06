import axios from 'axios'

export default {
  namespaced: true,
  state: {
    materiel: [],
    onemateriel: {}
  },
  getters: {
    getmateriels (state) {
      return state.materiel
    },
    getMaterielById (state) {
      return state.onemateriel
    }
  },
  mutations: {
    newmaterial (state, materiel) {
      state.materiel = materiel
    },
    getmateriel (state, materiel) {
      state.materiel = materiel
    },
    deletemateriell (state, id) {
      state.materiel = state.materiel.filter(materiel => materiel.id !== id)
    },
    getonemateriel (state, onemateriel) {
      state.onemateriel = onemateriel
    }
  },
  actions: {
    async addmaterial (context, material) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      const response = await axios.post('/materiels', {
        nom: material.nom,
        nom_du_materiel: material.nommateriel,
        num_de_tel: material.phone,
        wilaya: material.wilayaselect,
        type_de_meteriel: material.materieltypeselect,
        description: material.description,
        ann_ou_bes: material.ann_ou_bes
      })
        .then(response => {
          this.name = response.data.name
          context.dispatch('getmateriesl')
        })

      context.commit('newmaterial', response.data)
    },
    cancelmateriel ({ commit }) {
      alert('hi bitch')
    },
    async getmateriesl (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/materiels')
        .then(response => {
          context.commit('getmateriel', response.data)
        })
    },
    getonemateriesl ({ commit }, id) {
      axios.get('/materiels/' + id)
        .then(response => {
          commit('getonemateriel', response.data)
        })
    },
    deletematerielmm (context, id) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      axios.delete('/materiels/' + id)
        .then(response => {
          context.commit('deletemateriell', response.data)
          context.dispatch('getmateriesl')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateMaterial (context, material) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.patch('/materiels/' + material.id, {
        nom: material.nom,
        nommateriel: material.nommateriel,
        phone: material.phone,
        wilaya: material.wilaya,
        typemateriel: material.typemateriel,
        description: material.description
      })
        .then(response => {
          context.dispatch('getonemateriesl', material.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
