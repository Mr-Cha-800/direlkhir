import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import materiel from './materiel'
import medicament from './medicament'
import repas from './repas'
import sang from './sang'
import argent from './argent'
import general from './general'
import comments from './comments'
import phone from './phone'
import axios from 'axios'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://direlkhir.test/api'
// axios.defaults.baseURL = 'http://direlkhir.makla-time.com/direlkhir/public/api'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    materiel,
    medicament,
    repas,
    sang,
    argent,
    general,
    comments,
    phone
  }
})
