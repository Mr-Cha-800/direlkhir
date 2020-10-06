<template>
  <div class="">
    <img class="fullscreen header-image" src="../../images/foodbg.jpg" >

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
        v-model="food.nom"
        type="text"
        class="q-pa-md"
        label="Nom d'annonce *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre annonce']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="food.phone"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="food.nbrpersonne"
        type="number"
        label="Nombre de personne"
        :rules="[val => !!val  && val.length > 0 || 'veuillez taper le nombre de personne',
                 val => val && val > 0 || 'veuillez taper un nombre positif']"

      />
    </div>

    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input v-model="food.dated" label="Date de debut de repas"  :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxyc" transition-show="scale" transition-hide="scale">
            <q-date v-model="food.dated" @input="() => $refs.qDateProxyc.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input v-model="food.datef" label="Date de fin de repas" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="food.datef" :options="optionsFn"  @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>

    </q-input>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="food.wilayaselect" :options="food.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="food.isvegeterienselect" :options="food.isvegeterien" label="Végétarien ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="food.issansglutenselect" :options="food.issansgluten" label="Sans gluten ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre besoin"
      hint="Description"
      v-model="food.description"
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
      food: {
        nom: '',
        phone: null,
        nbrpersonne: null,
        dated: '',
        datef: '',
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        isvegeterienselect: null,
        isvegeterien: [
          'Disponible', 'Non Disponible'
        ],
        issansglutenselect: null,
        issansgluten: [
          'Oui Disponible', 'Non Disponible'
        ],
        description: '',
        ann_ou_bes: 1

      }
    }
  },

  methods: {
    ...mapActions('repas', ['addfood', 'cancelfood']),
    onSubmit () {
      this.addfood(this.food)
      this.food.nom = null
      this.food.phone = null
      this.food.nbrpersonne = null
      this.food.wilayaselect = null
      this.food.dated = null
      this.food.datef = null
      this.food.isvegeterienselect = null
      this.food.issansglutenselect = null
      this.food.description = null
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
              this.cancelfood()
            }
          }
        ]
      })
      this.$router.push({ name: 'dashboard' })
    },

    onReset () {
      this.food.nom = null
      this.food.phone = null
      this.food.nbrpersonne = null
      this.food.wilayaselect = null
      this.food.dated = null
      this.food.datef = null
      this.food.isvegeterienselect = null
      this.food.issansglutenselect = null
      this.food.description = null
    },
    optionsFn (datef) {
      return datef >= this.food.dated
    }
  },
  watch: {
    // whenever question changes, this function will run
    food: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler (val) {
        if (val.dated > val.datef && val.datef) {
          val.datef = null
        }
      }
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
