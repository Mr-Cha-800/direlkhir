<template>
  <div class="">
    <img class="fullscreen header-image" src="../../../images/advenur.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card q-pa-sm shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Réinitialiser votre mot de passe</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit.prevent="reset"
      class="q-gutter-lg"
    >

      <q-input
        :type="isPwd ? 'password' : 'text'"
        class="q-pa-md"
        v-model="password"
        label="Votre mot de passe  *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'veuillez taper votre mot de passe',
          val => val && val.length > 6  || 'Minimum 6'

        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        :type="isPwd ? 'password' : 'text'"
        class="q-pa-md"
        v-model="password1"
        label="Votre mot de passe  *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'veuillez confirmer votre mot de passe'
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div>
    <q-btn type="submit" push color="primary " :loading="loading" :disabled="loading" icon-right="send" label="valider nouveau mot de passe" >
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Vérification...
      </template>
    </q-btn>
      </div>
    </q-form>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
      </q-card-actions>
    </q-card>
  </div>

 </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      password: '',
      password1: '',
      loading: false,
      isPwd: true
    }
  },
  methods: {
    ...mapActions('auth', ['validatenewpass', 'checklink']),
    reset () {
      this.loading = true
      if (this.password !== this.password1) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Veuillez vérifier votre mot de passe de confirmation'
        })
        this.loading = false
      } else {
        this.validatenewpass({
          email: this.$route.params.email,
          recup: this.$route.params.token,
          password: this.password
        })
          .then(response => {
            this.loading = false
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'done',
              message: 'Nouveau mot de passe attribué'
            })
            this.$router.push({ name: 'signin' })
          })
          .catch(e => {
            this.loading = false
            if (e !== '') {
              this.$q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'clear',
                message: 'lien expiré'
              })
              this.$router.push({ name: 'Home' })
            }
          })
      }
    },
    checking () {
      this.checklink({
        email: this.$route.params.email,
        recup: this.$route.params.token
      })
        .then(response => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            message: 'Bienvenu ! veuillez réinitialiser'
          })
        })
        .catch(e => {
          if (e !== '') {
            this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              message: 'lien expiré'
            })
            this.$router.push({ name: 'Home' })
          }
        })
    },
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement de la page </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
      })

      // hiding in 3s
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
    }

  },
  created () {
    this.checking()
    this.showLoading()
  }
}
</script>

<style lang="scss" scoped>

.header-image{
height: 100%;
width:100%;
z-index: -1;
}
</style>
