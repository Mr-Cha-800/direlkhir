<template>
  <div class="">
    <img class="fullscreen header-image" src="../images/advenur.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card q-pa-sm shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Se connecter</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit.prevent="login"
      class="q-gutter-lg"
    >
      <q-input
        v-model="username"
        id="email"
        type="email"
        name="email"
        label="Votre e-mail *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Veuillrez taper votre e-mail']"
      />

      <q-input
        type="password"
        id="password"
        v-model="password"
        name="password"
        label="Votre mot de passe  *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Veuillrez taper votre mot de passe'
        ]"
      />

        <a  @click="bar2 = true">Rénitialiser le mot de passe</a><br>
      <div>
    <q-btn type="submit" push color="primary " :loading="loading" :disabled="loading" icon-right="send" label="Se connecter" >
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Chargement...
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
 <q-dialog v-model="bar2" persistent>
      <q-card style="min-width: 500px" >
        <q-card-section>
          <div class="text-h6">Votre addresse</div>
        </q-card-section>
         <q-form
      @submit.prevent="resett"
      class="q-gutter-lg"
    >
        <q-card-section class="q-pt-none clolro">
        <!--  <q-input dense v-model="address" class="clolro" type="email" autofocus @keyup.enter="bar2 = false" /> !-->
        <q-input dense v-model="address" class="clolro" type="email" autofocus  />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn push label="Annuler" color="primary" v-close-popup />
          <q-btn push type="submit" icon-right="send" :loading="loading2" :disabled="loading2" label="Réinitialiser" color="red" >
             <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Chargement...
      </template>
    </q-btn>
        </q-card-actions>
         </q-form>
      </q-card>
    </q-dialog>

 </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      bar2: false,
      username: '',
      password: '',
      loading: false,
      loading2: false,
      address: ''
    }
  },
  methods: {
    ...mapActions('auth', ['retrieveToken', 'resetpassword']),
    login () {
      this.loading = true
      this.retrieveToken({
        username: this.username,
        password: this.password
      })
        .then(response => {
          this.loading = false
          this.$router.push({ name: 'dashboard' })
        })
        .catch(e => {
          this.loading = false
          if (e !== '') {
            this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              message: 'Email ou mot de passe non correcte'
            })
          }
        })
    },
    resett () {
      this.loading2 = true
      this.resetpassword(this.address)
        .then(response => {
          this.loading2 = false
          this.bar2 = false
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            message: 'Email envoyé , veuillez verifier votre boite'
          })
        })
        .catch(e => {
          this.loading2 = false
          if (e !== '') {
            this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              message: "Email n'existe pas"
            })
          }
        })
    }
  }
}

</script>
<style lang="scss" scoped>
.my-card{
   width: 100%;
  max-width: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    opacity:0.8;
}
.header-image{
height: 100%;
width:100%;
z-index: -1;
}
.clolro{
  input, select, textarea{
    color: #ff0000;
}
}
</style>
