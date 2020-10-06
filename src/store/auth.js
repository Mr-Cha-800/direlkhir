import axios from 'axios'
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('access_token') || null,
    user: {}
  },
  getters: {
    loggedIn (state) {
      return state.token !== null
    },
    getuser (state) {
      return state.user
    }
  },
  mutations: {
    retrieveToken (state, token) {
      state.token = token
    },
    destroyToken (state) {
      state.token = null
      state.user = null
    },
    setuserr (state, user) {
      state.user = user
    }
  },
  actions: {
    setuser (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + context.state.token
      return new Promise((resolve, reject) => {
        axios.get('/user')
          .then(response => {
            context.commit('setuserr', response.data)
            resolve(response)
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    register (context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          name: data.nom,
          nomvrai: data.nomvrai,
          tel: data.tel,
          date: data.date,
          wilaya: data.wilaya,
          email: data.email,
          shape: data.shape,
          password: data.password
        })
          .then(response => {
            resolve(response)
            // console.log(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    update (context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + context.state.token
      return new Promise((resolve, reject) => {
        axios.post('/update/' + data.id, {
          name: data.nom,
          nomvrai: data.nomvrai,
          tel: data.tel,
          wilaya: data.wilaya,
          password: data.password
        })
          .then(response => {
            resolve(response)
            // console.log(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + context.state.token
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    retrieveToken ({ commit, dispatch }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          username: credentials.username,
          password: credentials.password
        })
          .then(response => {
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            commit('retrieveToken', token)
            dispatch('setuser')
            resolve(response)
            // console.log(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    confirmuser ({ commit, dispatch }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/confirmuser', {
          confirmedtoken: credentials.confirmedtoken,
          email: credentials.email
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    resetpassword ({ commit }, email) {
      return new Promise((resolve, reject) => {
        axios.post('/resetpassword', {
          email: email
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    validatenewpass ({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/finalreset', {
          email: credentials.email,
          recup: credentials.recup,
          password: credentials.password
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    checklink ({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/testlink', {
          email: credentials.email,
          recup: credentials.recup
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
