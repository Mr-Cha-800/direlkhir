import axios from 'axios'
export default {
  namespaced: true,
  state: {
    food: [],
    onerepas: {}
  },
  getters: {
    getfoods (state) {
      return state.food
    },
    getRepasById (state) {
      return state.onerepas
    }
  },
  mutations: {
    newfood (state, food) {
      state.food = food
    },
    getfood (state, food) {
      state.food = food
    },
    deletefoodd (state, id) {
      state.food = state.food.filter(food => food.id !== id)
    },
    getonerepas (state, onerepas) {
      state.onerepas = onerepas
    }

  },
  actions: {
    async addfood (context, food) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      const response = await axios.post('/food', {
        nom: food.nom,
        phone: food.phone,
        nbrpersonne: food.nbrpersonne,
        dated: food.dated,
        datef: food.datef,
        wilayaselect: food.wilayaselect,
        isvegeterienselect: food.isvegeterienselect,
        issansglutenselect: food.issansglutenselect,
        description: food.description,
        ann_ou_bes: food.ann_ou_bes
      })
        .then(response => {
          this.name = response.data.name
          context.dispatch('getfoosd')
        })

      context.commit('newfood', response.data)
    },
    cancelfood ({ commit }) {
      alert('hi bitch food')
    },
    async getfoosd (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/food')
        .then(response => {
          context.commit('getfood', response.data)
        })
    },
    getonefoosd ({ commit }, id) {
      axios.get('/food/' + id)
        .then(response => {
          commit('getonerepas', response.data)
        })
    },
    async deletefood (context, id) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.delete('/food/' + id)
        .then(response => {
          context.commit('deletefoodd', response.data)
          context.dispatch('getfoosd')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateRepas (context, repas) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.patch('/food/' + repas.id, {
        nom: repas.nom,
        numtel: repas.numtel,
        nbrpers: repas.nbrpers,
        datdeb: repas.datdeb,
        datfin: repas.datfin,
        wilaya: repas.wilaya,
        sansglut: repas.sansglut,
        veg: repas.veg,
        desc: repas.desc
      })
        .then(response => {
          context.dispatch('getonefoosd', repas.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
