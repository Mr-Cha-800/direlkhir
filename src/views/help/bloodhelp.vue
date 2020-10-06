<template>
  <div class="">
    <img class="fullscreen header-image" src="../../images/bloodbg.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card  shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Créer une annonce d'aide</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="justify-center q-pa-md"
    >
      <q-input
        v-model="blood.nom"
        type="text"
        class="q-pa-md"
        label="Nom d'annonce' *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre annonce']"
      >
      </q-input>

    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="blood.bloodselect" :options="blood.optionblood" label="Type de sang"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="blood.rhesusselect" :options="blood.optionresus" label="Rhésus"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="blood.wilayaselect" :options="blood.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="blood.phone"
        label="Téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-radio v-model="blood.shape" val="Male" color="blue" label="Male"
      :rules="[val => !!val || 'Obligatoire']" />
      <q-radio v-model="blood.shape" val="Femele" color="pink" label="Femele"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre besoin"
      hint="Description"
      v-model="blood.description"
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
      blood: {
        nom: '',
        bloodselect: null,
        optionblood: [
          'A', 'B', 'AB', 'O'
        ],
        rhesusselect: null,
        optionresus: [
          'positif (+)', 'négatif (-)'
        ],
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        phone: null,
        shape: 'line',
        description: '',
        ann_ou_bes: 1
      }
    }
  },

  methods: {
    ...mapActions('sang', ['addblood', 'cancelblood']),
    onSubmit (e) {
      e.preventDefault()
      this.addblood(this.blood)
      this.blood.nom = null
      this.blood.bloodselect = null
      this.blood.rhesusselect = null
      this.blood.wilayaselect = null
      this.blood.phone = null
      this.blood.description = null
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
              this.cancelblood()
            }
          }
        ]
      })
      this.$router.push({ name: 'dashboard' })
    },

    onReset () {
      this.blood.nom = null
      this.blood.bloodselect = null
      this.blood.rhesusselect = null
      this.blood.wilayaselect = null
      this.blood.phone = null
      this.blood.shape = null
      this.blood.description = null
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
.my-card::after{
  background-image: url('../../images/bloodbg.jpg');
    opacity:0.5;
    width: 100%;
  max-width: 700px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
