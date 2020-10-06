import axios from 'axios'
export default {
  namespaced: true,
  state: {
    comments: []
  },
  getters: {
    getcomments (state) {
      return state.comments
    }
  },
  mutations: {
    setcomments (state, comments) {
      state.comments = comments
    }
  },
  actions: {
    async getcommentss ({ commit }, idcommented) {
      axios.get('/comments/' + idcommented)
        .then(response => {
          commit('setcomments', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async addcomment (context, comments) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.post('/comments', {
        comment: comments.comment,
        idcommentor: comments.idcommentor,
        idcommented: comments.idcommented,
        idreplyto: comments.idreplyto,
        email: comments.email
      })
      context.dispatch('getcommentss', comments.idcommented)
    },
    async replycommenty (context, reply) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.post('/replycomment', {
        idreplyto: reply.idreplyto,
        comment: reply.comment,
        idcommented: reply.idcommented,
        email: reply.email
      })
      context.dispatch('getcommentss', reply.idcommented)
    },
    async updatecomment (context, comment) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.patch('/comments', {
        id: comment.id,
        comment: comment.comment
      })
      context.dispatch('getcommentss', comment.idcommented)
    },
    async deletecomment (context, todelete) {
      const token = context.rootState.auth.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + token
      await axios.delete('/comments/' + todelete.id)
        .then(response => {
          context.dispatch('getcommentss', todelete.idcommented)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
