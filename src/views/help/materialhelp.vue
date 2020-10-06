<template>
  <div class="">
    <img class="fullscreen header-image" src="../../images/materialbg.jpg" >

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card  shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Créer une annonce</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="justify-center q-pa-md"
    >
     <q-input
        v-model="material.nom"
        type="text"
        class="q-pa-md"
        label="Nom d'annonce *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Veuillez taper le nom de votre annonce']"
      >
      </q-input>
      <q-input
        v-model="material.nommateriel"
        type="text"
        class="q-pa-md"
        label="Nom du matériel à donner *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Veuillez taper le nom du matériel']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="material.phone"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="material.wilayaselect" :options="material.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="material.materieltypeselect" :options="material.materieltype" label="Type du matériel"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre aide, oubien plus de details à ajouter à propos du materiel"
      hint="Description"
      v-model="material.description"
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
      material: {
        nom: '',
        nommateriel: '',
        phone: null,
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        materieltypeselect: null,
        materieltype: [
          'Oui', 'Non'
        ],
        description: '',
        ann_ou_bes: 1
      }
    }
  },

  methods: {
    ...mapActions('materiel', ['addmaterial', 'cancelmateriel']),
    onSubmit (e) {
      e.preventDefault()
      this.addmaterial(this.material)
      this.material.nom = null
      this.material.nommateriel = null
      this.material.phone = null
      this.material.wilayaselect = null
      this.material.materieltypeselect = null
      this.material.description = null
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
              this.cancelmateriel()
            }
          }
        ]
      })
      this.$router.push({ name: 'dashboard' })
    },
    onReset () {
      this.nom = null
      this.nommateriel = null
      this.phone = null
      this.wilayaselect = null
      this.materieltypeselect = null
      this.materieltype = null
      this.description = null
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
