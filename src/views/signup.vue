<template>
  <div class="">
    <img class="fullscreen header-image" src="../images/tree.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card q-pa-sm shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">S'inscrire</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="justify-center q-pa-sm"
    >
      <q-input
        v-model="nom"
        type="text"
        class="q-pa-md"
        label="Votre Prénom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre prénom']"
      >
      </q-input>
      <q-input
        v-model="nomvrai"
        type="text"
        class="q-pa-md"
        label="Votre Nom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre prénom']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
       <q-input
        v-model="tel"
        label="Téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire',
          val => val && val.length > 0  || 'veuillez remplir correctement']"
      >
      </q-input>
    </div>
      <q-input
        v-model="date"
        mask="date"
        max="2019-12-31"
        class="q-pa-md"
        label="Votre date de naissance *"
        :rules="['date']"
      ><template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="wilayaselect" :options="wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
      <q-input
        v-model="email"
        type="email"
        class="q-pa-md"
        label="Votre email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre email']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-radio v-model="shape" val="Male" color="blue" label="Male" />
      <q-radio v-model="shape" val="Femele" color="pink" label="Femele" />
    </div>
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

      <q-toggle v-model="accept" class="q-pb-md" label="Accépter nos conditions d'utilisation" />

      <div>
    <q-btn type="submit" push color="primary " :loading="loading" :disabled="loading"  icon-right="send" label="S'inscrire" >      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>
        <q-btn label="Réinitialiser" type="reset" color="primary" flat class="q-ml-sm" />
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
      loading: false,
      nom: '',
      nomvrai: '',
      isPwd: true,
      tel: '',
      date: '',
      wilayaselect: null,
      wilaya: [
        'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
      ],
      email: '',
      password: '',
      password1: '',
      shape: 'line',
      accept: false
    }
  },

  methods: {
    ...mapActions('auth', ['register']),

    onSubmit () {
      this.loading = true
      if (this.password !== this.password1) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Veuillez vérifier votre mot de passe de confirmation'
        })
        this.loading = false
      } else if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })

        this.loading = false
      } else {
        this.register({
          nom: this.nom,
          nomvrai: this.nomvrai,
          tel: this.tel,
          date: this.date,
          wilaya: this.wilayaselect,
          email: this.email,
          shape: this.shape,
          password: this.password
        })
          .then(response => {
            this.loading = false
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Validé'
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
                message: 'non validé,Email existe déja, Veuillez vérifier'
              })
            }
          })
      }
    },

    onReset () {
      this.nom = null
      this.nomvrai = null
      this.tel = null
      this.date = null
      this.wilayaselect = null
      this.shape = null
      this.email = null
      this.password = null
      this.accept = false
    }
  }
}

</script>
<style lang="scss" scoped>
.my-card{
    width: 100%;
  max-width: 700px;
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
.text-h6{
  color:black;
}
</style>
