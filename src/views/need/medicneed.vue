<template>
  <div class="">
    <img class="fullscreen header-image" src="../../images/pharmacy.jpg" >

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
        v-model="medic.nom"
        type="text"
        class="q-pa-md"
        label="Nom du besoin *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre besoin']"
      >
      </q-input>
      <q-input
        v-model="medic.nommedic"
        type="text"
        class="q-pa-md"
        label="Nom du medicament Voulu *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre medicament voulu']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="medic.phone"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="medic.wilayaselect" :options="medic.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="medic.isallergicselect" :options="medic.isallergic" label="Allergie au pénicilline ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre besoin, oubien plus de details à ajouter"
      hint="Description"
      v-model="medic.description"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <q-toggle v-model="medic.accept" class="q-pb-md" label="Sachez que l'alerte sera disponible seulement au Pharmacie !" />
      <div>
    <q-btn type="submit" push color="primary"  icon-right="send" label="Créer l'alerte" />
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
      medic: {
        nom: '',
        nommedic: '',
        phone: null,
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        isallergicselect: null,
        isallergic: [
          'Oui', 'Non'
        ],
        description: '',
        accept: false,
        ann_ou_bes: 0
      }
    }
  },

  methods: {
    ...mapActions('medicament', ['addmedic', 'cancelmedic']),
    onSubmit () {
      if (this.medic.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Vous devez accepter la condition'
        })
      } else {
        this.addmedic(this.medic)
        this.medic.nom = null
        this.medic.nommedic = null
        this.medic.phone = null
        this.medic.wilayaselect = null
        this.medic.isallergicselect = null
        this.medic.description = null
        this.medic.accept = false
        this.$q.notify({
          progress: true,
          color: 'green-4',
          textColor: 'white',
          icon: 'done',
          position: 'top-right',
          message: 'Alerte Crée',
          actions: [
            {
              label: 'Annuler',
              color: 'white',
              handler: () => {
                this.$q.notify({
                  message: 'Annulée.',
                  color: 'Black'
                })
                this.cancelmedic()
              }
            }
          ]
        })
        this.$router.push({ name: 'dashboard' })
      }
    },

    onReset () {
      this.medic.nom = null
      this.medic.nommedic = null
      this.medic.phone = null
      this.medic.wilayaselect = null
      this.medic.isallergicselect = null
      this.medic.description = null
      this.medic.accept = false
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
