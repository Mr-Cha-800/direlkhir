import axios from 'axios'
export default {
  namespaced: true,
  state: {
    blood: [],
    oneblood: {}
  },
  getters: {
    getbloods (state) {
      return state.blood
    },
    getBloodById (state) {
      return state.oneblood
    }
    /* getBloodById: state => id => {
      return state.blood.find(blood => blood.id === id)
    } */
  },
  mutations: {
    newblood (state, blood) {
      state.blood = blood
    },
    getblood (state, blood) {
      state.blood = blood
    },
    deletebloodd (state, id) {
      state.blood = state.blood.filter(blood => blood.id !== id)
    },
    getoneblood (state, oneblood) {
      state.oneblood = oneblood
    },
    updateBlood (state, blood) {
      const index = state.blood.findIndex(item => item.id === blood.id)
      state.todos.splice(index, 1, {
        id: blood.id,
        nom: blood.nom,
        type: blood.type,
        rhesus: blood.rhesus,
        wilaya: blood.wilaya,
        phone: blood.phone,
        gender: blood.gender,
        desctiprion: blood.description
      })
    }
  },
  actions: {
    async addblood (context, blood) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      const response = await axios.post('/blood', {
        nom: blood.nom,
        bloodselect: blood.bloodselect,
        rhesusselect: blood.rhesusselect,
        wilayaselect: blood.wilayaselect,
        phone: blood.phone,
        shape: blood.shape,
        description: blood.description,
        ann_ou_bes: blood.ann_ou_bes
      })
        .then(response => {
          this.name = response.data.name
          context.dispatch('getbloosd')
        })

      context.commit('newblood', response.data)
    },
    cancelblood ({ commit }) {
      alert('hi bitch blood')
    },
    async getbloosd (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/blood')
        .then(response => {
          context.commit('getblood', response.data)
        })
    },
    getonebloosd ({ commit }, id) {
      axios.get('/blood/' + id)
        .then(response => {
          commit('getoneblood', response.data)
        })
    },
    deleteblood (context, id) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      axios.delete('/blood/' + id)
        .then(response => {
          context.commit('deletebloodd', response.data)
          context.dispatch('getbloosd')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateBlood (context, blood) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      //  alert(this.id + this.nom + this.type + this.rhesus + this.wilaya + this.phone + this.gender + this.description)
      await axios.patch('/blood/' + blood.id, {
        nom: blood.nom,
        type: blood.type,
        rhesus: blood.rhesus,
        wilaya: blood.wilaya,
        phone: blood.phone,
        gender: blood.gender,
        description: blood.description
      })
        .then(response => {
          context.dispatch('getonebloosd', blood.id)
        })
        .catch(error => {
          console.log(error)
        })
    }

  }
}
