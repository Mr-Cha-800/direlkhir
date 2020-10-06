<template>

      <q-card class="my-card" >
      <q-card-section horizontal>
        <q-card-section v-if="!edit" class="q-pt-xs">
          <div class="text-overline">Info du profile</div>
          <div class="text-h6 q-mt-sm q-mb-xs">{{getuserinfo.name}} {{getuserinfo.nom}}</div>
          <div class="text-caption text-grey">
          de {{getuserinfo.wilaya}}
          </div>
          <div class="text-caption text-grey">
           né en {{ getuserinfo.date_naiss | moment("MMM, D YYYY") }} {{getuserinfo.gender}}
          </div>
            <div class="text-caption text-grey">
         {{getuserinfo.num_de_tel}} {{getuserinfo.email}}
          </div>
        </q-card-section>
      <q-card-section v-if="edit">
        <q-form
      @submit.prevent="onSubmit"
      class="justify-center"
    >
      <q-input
        v-model="nom"
        type="text"
        class=""
        label="Votre prénom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre prénom']"
      >
      </q-input>
      <q-input
        v-model="nomvrai"
        type="text"
        class=""
        label="Votre prénom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre prénom']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center ">
       <q-input
        v-model="tel"
        label="Téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      >
      </q-input>
    </div>
    <div class="q-gutter-sm justify-center">
      <q-select v-model="wilayaselect" :options="wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
      <q-input
        :type="isPwd ? 'password' : 'text'"
        class=""
        v-model="password"
        label="Votre mot de passe  *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'veuillez taper votre mot de passe'

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
        class=""
        v-model="password1"
        label="Confirmer votre mot de passe  *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'veuillez taper votre mot de passe'
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
    <q-btn type="submit" push color="primary "  icon-right="send" label="Modifier" />
    <q-btn @click="edit = false" push color="red" icon="clear" label="Annuler" />
 </div>
    </q-form>
      </q-card-section>
        <q-card-section v-if="!edit" class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn v-if="!edit" @click="fill" flat color="primary">
          Modifier
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      edit: false,
      nom: '',
      nomvrai: '',
      isPwd: true,
      tel: '',
      wilayaselect: null,
      wilaya: [
        'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
      ],
      password: '',
      password1: ''
    }
  },
  methods: {
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    ...mapActions('auth', ['setuser', 'update']),
    onSubmit () {
      if (this.password !== this.password1) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Veuillez vérifier votre mot de passe de confirmation'
        })
      } else {
        this.update({
          id: this.getuserinfo.id,
          nom: this.nom,
          nomvrai: this.nomvrai,
          tel: this.tel,
          wilaya: this.wilayaselect,
          password: this.password
        })
          .then(response => {
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Validé'
            })
            this.edit = false
            this.setuser()
          })
      }
    },
    fill () {
      this.edit = true
      this.nom = this.getuserinfo.name
      this.nomvrai = this.getuserinfo.nom
      this.tel = this.getuserinfo.num_de_tel
      this.wilayaselect = this.getuserinfo.wilaya
    },
    ifconfirmed () {
      if (this.getuserinfo.confirmed === 0) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'clear',
          message: 'Profile non validé! veuillez vérifier votre email !'
        })
      }
    }
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    this.setuser()
    this.ifconfirmed()
  }
}
</script>

<style lang="scss" scoped>
.my-card{
width: 500px
}
@media screen and (max-width: 768px) {
.my-card{
width: 300px
  }
}
</style>
