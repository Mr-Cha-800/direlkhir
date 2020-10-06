<template>

<div>
          <div class="wpo-breadcumb-area bgg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap" v-if="getblood.ann_ou_bes === 1">
                            <h2>Don du Sang</h2>
                            <ul>
                                <li><router-link to="index.html">Accueil</router-link></li>
                                <li><span>Annonce</span></li>
                                <li><span>Don du sang</span></li>
                            </ul>
                        </div>
                        <div class="wpo-breadcumb-wrap" v-else>
                            <h2>Besoin du sang</h2>
                            <ul>
                                <li><router-link to="/">Acceuil</router-link></li>
                                <li><span>Alerte</span></li>
                                <li><span>Besoin du sang</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->
        <!-- wpo-event-details-area start -->
        <div class="wpo-event-details-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-8">
                         <div class="wpo-event-item">
                            <div class="wpo-event-img">
                                <div class="thumb-text">
                                    <span>{{ getblood.updated_at | moment("D") }}</span>
                                    <span>{{ getblood.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-details-text">
                                <h2>{{getblood.nom}}</h2>
                            </div>
                            <div class="wpo-event-details-wrap">
                                <div class="wpo-event-details-tab">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a style="color:08cc7f;" data-toggle="tab" href="#Schedule">Détails</a></li>
                                    </ul>
                                </div>

       <div class="wpo-event-details-content">
                                    <div class="tab-content">
                                        <div id="Schedule" class="tab-pane active">

<div>

        <q-card-section v-if="!edit">
           <div class="text-h6 justify-center">Nom  </div>
          <div class="text-h6 text-primary justify-center ">
            {{getblood.nom}}
          </div>
           <div class="text-h6 justify-center ">Type</div>
          <div class="text-h6 text-primary justify-center ">
            {{getblood.type}}
          </div>
           <div class="text-h6 justify-center ">Rhésus</div>
          <div class="text-h6 text-primary  justify-center ">
            {{getblood.rhesus}}
          </div>
           <div class="text-h6 justify-center">Wilaya</div>
          <div class="text-h6 text-primary  justify-center ">
            {{getblood.wilaya}}
          </div>
           <div class="text-h6 justify-center ">Genre</div>
          <div class="text-h6 text-primary justify-center ">
            {{getblood.gender}}
          </div>
           <div class="text-h6  justify-center ">Déscription</div>
          <div class="text-caption text-primary justify-center ">
            {{getblood.description}}
            </div>
           <div class="text-h6  justify-center ">Num. tél</div>
          <div class="text-h6 text-primary  justify-center ">
           <a :href="`tel:${getblood.num_de_tel}`">{{getblood.num_de_tel}}</a>
          </div>

       </q-card-section>
        <q-card-actions v-else>

          <q-form
      @submit="onSubmit"
      class="justify-center "
    >
      <q-input
        v-model="nomm"
        type="text"
        class="q-pa-md"
        label="Nom du besoin *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre besoin']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="typee" :options="blood.optionblood" label="Type de sang"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="rhesuss" :options="blood.optionresus" label="Rhésus"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-select v-model="wilayaa" :options="blood.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-input
        v-model="phonee"
        label="Téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
      <q-radio v-model="genderr" val="Male" color="blue" label="Male"
      :rules="[val => !!val || 'Obligatoire']" />
      <q-radio v-model="genderr" val="Femele" color="pink" label="Femele"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center q-pa-md">
<q-input
      label="Veuillez décrire votre besoin"
      hint="Description"
      v-model="descriptionn"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <div>
    <q-btn type="submit" push color="primary " :loading="loading" :disabled="loading" icon-right="send" label="Modifier" >
            <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Chargement...
      </template>
    </q-btn>
    <q-btn @click="edit = false">Cancel</q-btn>
      </div>
    </q-form>
    </q-card-actions>
      <q-chip color="teal" v-if="getblood.confirmed && getuserinfo.id === getblood.owner" class="absolute-top-right" text-color="white" icon="done">
        Validé
      </q-chip>
      <q-chip color="red" v-else-if="getuserinfo.id === getblood.owner" class="absolute-top-right" text-color="white" icon="done">
        Pas encore validé
      </q-chip>
      </div>
      <q-separator />

      <q-card-actions v-if="getuserinfo.id === getblood.owner" align="right">
        <q-btn @click="fill" v-if="!edit" color="primary" >
        <b>Modifier</b>
        </q-btn>
        <q-btn @click="bar2 = true"  color="red" >
        <b>Supprimer</b>
        </q-btn>
      </q-card-actions>
    <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Voulez vous vraiment supprimer ?
        </q-card-section>

        <q-card-section class="q-pt-none float-right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Supprimer" v-close-popup @click="deletee(getblood.id)"  />
          </q-card-section>
      </q-card>
    </q-dialog>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      loading: false,
      id: '',
      nomm: '',
      typee: '',
      rhesuss: '',
      wilayaa: '',
      phonee: '',
      genderr: '',
      descriptionn: '',
      bar2: false,
      deleteid: '',
      edit: false,
      blood: {
        optionblood: [
          'A', 'B', 'AB', 'O'
        ],
        optionresus: [
          'positif (+)', 'négatif (-)'
        ],
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ]
      }
    }
  },
  methods: {
    ...mapActions('sang', ['getbloosd', 'getonebloosd', 'deleteblood', 'updateBlood']),
    ...mapGetters('sang', ['getBloodById']),
    ...mapGetters('auth', ['getuser']),
    deletee (id) {
      this.deleteblood(id)
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Supprimé'
      })
      this.getbloosd()
      this.$router.push({ name: 'dashboard' })
      // alert(this.$route.params.id)
    },
    fill () {
      this.edit = true
      this.id = this.getblood.id
      this.nomm = this.getblood.nom
      this.typee = this.getblood.type
      this.rhesuss = this.getblood.rhesus
      this.wilayaa = this.getblood.wilaya
      this.phonee = this.getblood.num_de_tel
      this.genderr = this.getblood.gender
      this.descriptionn = this.getblood.description
    },
    onSubmit () {
      this.loading = true
      this.edit = false
      // alert(this.id + this.nomm + this.typee + this.rhesuss + this.wilayaa + this.phonee + this.genderr + this.descriptionn)
      this.updateBlood({
        id: this.id,
        nom: this.nomm,
        type: this.typee,
        rhesus: this.rhesuss,
        wilaya: this.wilayaa,
        phone: this.phonee,
        gender: this.genderr,
        description: this.descriptionn
      })
        .then(response => {
          this.loading = false
          this.$q.notify({
            progress: true,
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            position: 'top-right',
            message: ' Modifié'
          })
        })
    },
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement d'annonces de sang </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
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

  computed: {
    getblood () {
      return this.getBloodById()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    // this.blood = this.getblood()
    // actions
    this.getonebloosd(this.$route.params.id)
    this.showLoading()
  }
}
</script>

<style style="scss" scoped>

.bgg{
  background-image: url("../../../images/bloodbg.jpg")
}
</style>
