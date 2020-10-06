<template>
  <div class="">

  <div class="vertical-middle q-pa-md">
    <q-card class="my-card q-pa-sm shadow-box shadow-20">
      <q-card-section>
        <div class="text-h4 text-center">Tell us your story !</div>
        <div class="text-subtitle2 text-center">veuillez remplir les champs</div>
      </q-card-section>

      <q-card-section>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="justify-center q-pa-sm"
    >
      <q-input
        v-model="histoire.nom"
        type="text"
        class="q-pa-md"
        label="Nom de votre histoire *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom']"
      >
      </q-input>
      <q-input
        v-model="histoire.sujet"
        type="text"
        class="q-pa-md"
        label="Sujet de votre histoire *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le sujet en résumé']"
      >
      </q-input>

    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select
        v-model="histoire.typeselect"
        :options="histoire.type"
        label="Type de votre histoire"
        emit-value
        map-options
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="histoire.wilayaselect" :options="histoire.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
<div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez nous raconter votre histoire"
      hint="Histoire"
      v-model="histoire.description"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <q-toggle v-model="histoire.accept" class="q-pb-md" label="Accépter de partager votre histoire en public" />

      <div>
    <q-btn type="submit" push color="primary "  icon-right="send" label="Valider" />
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
      histoire: {
        nom: '',
        sujet: '',
        description: '',
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        typeselect: null,
        type: [
          {
            label: 'Don/Besoin du médicaments',
            value: 'medics'
          },
          {
            label: 'Don/Besoin du matériels',
            value: 'materials'
          },
          {
            label: 'Don/Besoin du sang',
            value: 'blood'
          },
          {
            label: "Don/Besoin d'argent",
            value: 'money'
          },
          {
            label: 'Don/Besoin de repas',
            value: 'food'
          }
        ],
        accept: false
      }

    }
  },

  methods: {
    ...mapActions('general', ['addhistoire']),
    onSubmit (e) {
      e.preventDefault()
      if (this.histoire.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Vous devez accepter de la partager! Otherwise why sharing ??'
        })
      } else {
        this.addhistoire(this.histoire)
        this.histoire.nom = ''
        this.histoire.sujet = ''
        this.histoire.description = ''
        this.histoire.typeselect = null
        this.histoire.wilayaselect = null
        this.histoire.accept = false
        this.$q.notify({
          progress: true,
          color: 'green-4',
          textColor: 'white',
          icon: 'done',
          position: 'top-right',
          message: 'Validé',
          actions: [
            {
              label: 'Annuler',
              color: 'white',
              handler: () => {
                this.$q.notify({
                  message: 'Annulée.',
                  color: 'Black'
                })
              }
            }
          ]
        })
        this.$router.push({ name: 'dashboard' })
      }
    },
    onReset () {
      this.histoire.nom = ''
      this.histoire.sujet = ''
      this.histoire.description = ''
      this.histoire.typeselect = null
      this.histoire.wilayaselect = null
      this.histoire.accept = false
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
