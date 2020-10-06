<template>
<div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['confirmuser', 'destroyToken']),
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    showLoading () {
      this.$q.loading.show({
        backgroundColor: 'white',
        message: "<b>vérification de votre code de validation </b>.<br/>  <b><span class='text-green'>Veuillez patienter...</span> </b>",
        messageColor: 'black'
      })
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = 0
      }, 3000)
    },
    beforeDestroy () {
      if (this.timer !== 0) {
        clearTimeout(this.timer)
        this.$q.loading.hide()
      }
    },
    verifier () {
      this.confirmuser({
        email: this.$route.params.email,
        confirmedtoken: this.$route.params.token
      })
        .then(response => {
          if (this.ifloggedIn) {
            this.destroyToken()
              .then(response => {
                this.$q.notify({
                  color: 'green-4',
                  textColor: 'white',
                  icon: 'done',
                  message: "Profile Confirmé veuillez vous s'identifier"
                })
                this.$router.push({ name: 'signin' })
              })
          }
        })
        .catch(error => {
          if (error !== '') {
            this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              message: 'Lien expiré'
            })
            this.$router.push({ name: 'Home' })
          }
        })
    }
  },
  created () {
    this.showLoading()
    this.verifier()
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    }
  }
}
</script>

<style>

</style>
