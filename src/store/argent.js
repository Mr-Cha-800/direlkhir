import axios from 'axios'
export default {
  namespaced: true,
  state: {
    money: [],
    onemoney: {}
  },
  getters: {
    getmoney (state) {
      return state.money
    },
    getMoneyById (state) {
      return state.onemoney
    }
  },
  mutations: {
    newmoney (state, money) {
      state.money = money
    },
    getmoney (state, money) {
      state.money = money
    },
    deletemoneyy (state, id) {
      state.money = state.money.filter(money => money.id !== id)
    },
    getonemoney (state, onemoney) {
      state.onemoney = onemoney
    }
  },
  actions: {
    async addmoney (context, money) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      const response = await axios.post('/money', {
        nomannonce: money.nomannonce,
        nom: money.nom,
        prenom: money.prenom,
        minsomme: money.minsomme,
        ccp: money.ccp,
        phone: money.phone,
        wilayaselect: money.wilayaselect,
        typebesoinselect: money.typebesoinselect,
        description: money.description,
        ann_ou_bes: money.ann_ou_bes
      })
        .then(response => {
          this.name = response.data.name
          context.dispatch('getargent')
        })

      context.commit('newmoney', response.data)
    },
    cancelmoney ({ commit }) {
      alert('hi bitch money')
    },
    async getargent (context) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.get('/money')
        .then(response => {
          context.commit('getmoney', response.data)
        })
    },
    getonemoney ({ commit }, id) {
      axios.get('/money/' + id)
        .then(response => {
          commit('getonemoney', response.data)
        })
    },
    deletemoney (context, id) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      axios.delete('/money/' + id)
        .then(response => {
          context.commit('deletemoneyy', response.data)
          context.dispatch('getargent')
        })
        .catch(error => {
          console.log(error)
        })
    },
    async updateMoney (context, money) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.patch('/money/' + money.id, {
        nomannoncee: money.nomannoncee,
        nomm: money.nomm,
        prenomm: money.prenomm,
        minsomme: money.minsomme,
        ccpp: money.ccpp,
        phonee: money.phonee,
        wilayaselectt: money.wilayaselectt,
        typebesoinselectt: money.typebesoinselectt,
        descriptionn: money.descriptionn
      })
        .then(response => {
          context.dispatch('getonemoney', money.id)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
