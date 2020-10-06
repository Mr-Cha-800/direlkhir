<template>
  <div class="">
    <img class="fullscreen header-image" src="../../images/support.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card  shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Créer une alerte</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="justify-center q-pa-md"
    >
     <q-input
        v-model="money.nomannonce"
        type="text"
        class="q-pa-md"
        label="Nom d'annonce *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre annonce']"
      >
      </q-input>
     <q-input
        v-model="money.nom"
        type="text"
        class="q-pa-md"
        label="Votre nom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper votre nom']"
      >
      </q-input>
     <q-input
        v-model="money.prenom"
        type="text"
        class="q-pa-md"
        label="Votre prénom *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper de votre prénom']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="money.minsomme"
        type="number"
        label="Somme à donner"
        :rules="[val => !!val  && val.length > 0 || 'veuillez taper la somme en DA']">
        <template v-slot:append>
          DA
        </template>
      </q-input>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="money.ccp"
        label="Numéro de ccp"
        mask="##########  ##"
        fill-mask
        hint="Aide: numéro ######## clé ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="money.phone"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="money.wilayaselect" :options="money.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="money.typebesoinselect" :options="money.typebesoin" label="Veuillez choisir le type d'aide"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre annonce, oubien plus de details à ajouter"
      hint="Description"
      v-model="money.description"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <div>
    <q-btn type="submit" push color="primary"  icon-right="send" label="Créer l'annonce" />
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
      money: {
        nomannonce: '',
        nom: '',
        prenom: '',
        minsomme: null,
        ccp: null,
        phone: null,
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        typebesoinselect: null,
        typebesoin: [
          'Crise financière', 'Santé', 'investissement'
        ],
        description: '',
        ann_ou_bes: 1
      }
    }
  },

  methods: {
    ...mapActions('argent', ['addmoney', 'cancelmoney']),
    onSubmit (e) {
      e.preventDefault()
      this.addmoney(this.money)
      this.money.nomannonce = null
      this.money.nom = null
      this.money.prenom = null
      this.money.minsomme = null
      this.money.ccp = null
      this.money.phone = null
      this.money.wilayaselect = null
      this.money.typebesoinselect = null
      this.money.description = null
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: 'Annonce Crée',
        actions: [
          {
            label: 'Annuler',
            color: 'white',
            handler: () => {
              this.$q.notify({
                message: 'Annulée.',
                color: 'Black'
              })
              this.cancelmoney()
            }
          }
        ]
      })
      this.$router.push({ name: 'dashboard' })
    },

    onReset () {
      this.money.nomannonce = null
      this.money.nom = null
      this.money.prenom = null
      this.money.minsomme = null
      this.money.ccp = null
      this.money.phone = null
      this.money.wilayaselect = null
      this.money.typebesoinselect = null
      this.money.description = null
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
    opacity:0.9;
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
