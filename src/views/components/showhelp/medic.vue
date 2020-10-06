<template>

<div>
            <div class="wpo-breadcumb-area  bgggg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap" v-if="getmedic.ann_ou_bes === 1">
                            <h2>Don du médicaments</h2>
                            <ul>
                                <li><router-link to="index.html">Accueil</router-link></li>
                                <li><span>Annonce</span></li>
                                <li><span>Don du médicaments</span></li>
                            </ul>
                        </div>
                        <div class="wpo-breadcumb-wrap" v-else>
                            <h2>Besoin du médicaments</h2>
                            <ul>
                                <li><router-link to="/">Acceuil</router-link></li>
                                <li><span>Alerte</span></li>
                                <li><span>Besoin du médicaments</span></li>
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
                                    <span>{{ getmedic.updated_at | moment("D") }}</span>
                                    <span>{{ getmedic.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-details-text">
                                <h2>{{getmedic.nom_ann_oubes}}</h2>
                            </div>
                            <div class="wpo-event-details-wrap">
                                <div class="wpo-event-details-tab">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#Schedule">Détails</a></li>
                                    </ul>
                                </div>

       <div class="wpo-event-details-content">
                                    <div class="tab-content">
                                        <div id="Schedule" class="tab-pane active">

<div>
        <q-card-section v-if="!edit"
      class="justify-center ">
           <div class="text-h6" v-if="getmedic.ann_ou_bes === 1">Nom d'annonce</div>
          <div class="text-h6 text-primary" v-if="getmedic.ann_ou_bes === 1">
            {{getmedic.nom_pharmacie}}
          </div>
           <div class="text-h6 " v-if="getmedic.ann_ou_bes === 1">Adresse pharmacie</div>
          <div class="text-h6 text-primary" v-if="getmedic.ann_ou_bes === 1">
            {{getmedic.addresse_pharm}}
          </div>
           <div class="text-h6" v-if="getmedic.ann_ou_bes === 1">Nom d'annonce</div>
           <div class="text-h6" v-else>Nom d'alerte</div>
          <div class="text-h6 text-primary">
            {{getmedic.nom_ann_oubes}}
          </div>
           <div class="text-h6" >Nom du médicament</div>
          <div class="text-h6 text-primary">
            {{getmedic.nom_medic}}
          </div>
           <div class="text-h6 ">Num. tél</div>
          <div class="text-h6 text-primary">
            {{getmedic.num_tel}}
          </div>
          <div class="text-h6 text-primary">
            {{getmedic.wilaya}}
          </div>
           <div class="text-h6 " v-if="getmedic.ann_ou_bes === 1">Contient du Peniciline</div>
           <div class="text-h6" v-else>Allérgie Peniciline</div>
          <div class="text-h6 text-primary">
            {{getmedic.peniciline}}
            </div>
           <div class="text-h6 ">Déscription</div>
          <div class="text-caption text-primary">
            {{getmedic.description}}
            </div>
           <div class="text-h6 ">Num. tél</div>
          <div class="text-h6 text-primary">
            <a :href="`tel:${getmedic.num_tel}`">{{getmedic.num_tel}}</a>

          </div>
        </q-card-section>
<q-card-section v-else>
        <q-form
      @submit="onSubmit"
      class="justify-center "
    >
     <q-input
     v-if="getmedic.ann_ou_bes === 1"
        v-model="nompharmaciee"
        type="text"
        class=""
        label="Nom du pharmacie *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre pharmacie']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center ">
<q-input
v-if="getmedic.ann_ou_bes === 1"
      label="Veuillez donner l'adresse complète de votre pharmacie"
      hint="Adresse de pharmacie"
      v-model="addressepharmaciee"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>

     <q-input
        v-model="nomm"
        type="text"
        class=""
        label="Nom d'annonce *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre annonce']"
      >
      </q-input>
      <q-input
        v-model="nommedicc"
        type="text"
        class=""
        label="Nom du medicament disponible *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom du medicament disponible']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center ">
      <q-input
        v-model="phonee"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
       <div class="q-gutter-sm justify-center ">
      <q-select v-model="wilayaselectt" :options="medic.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center ">
      <q-select v-model="isallergicselectt" :options="medic.isallergic" label="Contient du pénicilline ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center ">
<q-input
      label="Veuillez décrire votre besoin, oubien plus de details à ajouter"
      hint="Description"
      v-model="descriptionn"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <div>
    <q-btn type="submit" push color="primary" :loading="loading" :disabled="loading"  icon-right="send" label="Modifier l'annonce" >
          <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Chargement...
      </template>
    </q-btn>
    <q-btn @click="edit = false">Cancel</q-btn>
      </div>
    </q-form>
      </q-card-section>

      <q-chip color="teal" v-if="getmedic.confirmed && getuserinfo.id === getblood.owner" class="absolute-top-right" text-color="white" icon="done">
        Validé
      </q-chip>
      <q-chip color="red" v-else-if="getuserinfo.id === getmedic.owner" class="absolute-top-right" text-color="white" icon="done">
        Pas encore validé
      </q-chip>
      </div>
      <q-separator />

      <q-card-actions  v-if="getuserinfo.id === getmedic.owner" align="right">
        <q-btn @click="fill" v-if="!edit"  color="primary" >
        <b>Modifier</b>
        </q-btn>
        <q-btn  @click="bar2 = true" color="red" >
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
          <q-btn flat label="Supprimer" v-close-popup @click="deletee(getmedic.id)"  />
          </q-card-section>
      </q-card>
    </q-dialog>
               <!-- <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                            <ul>
                                                <li>The wise man therefore in these matters.</li>
                                                <li>In a free hour, when our power of choice  and when nothing.</li>
                                                <li>Else he  pains to avoid pains.</li>
                                                <li>We denounce with righteous indignation dislike men. </li>
                                                <li>Which is the same as saying through.</li>
                                                <li>The wise man therefore always holds in these matters.</li>
                                                <li>Power of choice  and when nothing.</li>
                                                <li>Pains to avoid worse pains.</li>
                                            </ul> -->
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
      nompharmaciee: '',
      addressepharmaciee: '',
      nomm: '',
      nommedicc: '',
      phonee: null,
      wilayaselectt: null,
      isallergicselectt: null,
      descriptionn: '',
      medic: {
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        isallergic: [
          'Oui', 'Non'
        ]
      },
      edit: false,
      bar2: false,
      blood: []
    }
  },
  methods: {
    ...mapActions('medicament', ['getonemedicamenst', 'getmedicamenst', 'deletemedic', 'updateMedic']),
    ...mapGetters('medicament', ['getMedicById']),
    ...mapGetters('auth', ['getuser']),
    deletee (id) {
      this.deletemedic(id)
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Supprimé'
      })
      this.getmedicamenst()
      this.$router.push({ name: 'dashboard' })
      // alert(this.$route.params.id)
    },
    fill () {
      this.edit = true
      this.id = this.getmedic.id
      this.nompharmaciee = this.getmedic.nom_pharmacie
      this.addressepharmaciee = this.getmedic.addresse_pharm
      this.nomm = this.getmedic.nom_ann_oubes
      this.nommedicc = this.getmedic.nom_medic
      this.phonee = this.getmedic.num_tel
      this.wilayaselectt = this.getmedic.wilaya
      this.isallergicselectt = this.getmedic.peniciline
      this.descriptionn = this.getmedic.description
    },
    onSubmit () {
      this.edit = false
      this.loading = true
      // alert(this.id + this.nomm + this.typee + this.rhesuss + this.wilayaa + this.phonee + this.genderr + this.descriptionn)
      this.updateMedic({

        id: this.id,
        nompharm: this.nompharmaciee,
        addresspharm: this.addressepharmaciee,
        nomm: this.nomm,
        nommedic: this.nommedicc,
        tel: this.phonee,
        wilayaselect: this.wilayaselectt,
        allergic: this.isallergicselectt,
        desc: this.descriptionn
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
        message: "<b>Chargement d'annonces de médicaments </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
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

    // this.$route.params.id
  },

  computed: {
    getmedic () {
      return this.getMedicById()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    // this.blood = this.getblood()
    // actions
    this.getonemedicamenst(this.$route.params.id)
    this.showLoading()
  }
}
</script>

<style style="scss">

.backg{
  background-color: #E9EBEE;
}
.gbb{
  background-size: cover;
  background-position: 50% 50%;
  background-image: url("../../../images/pharmacy.jpg");
}
.bgggg{
  background-image: url("../../../images/pharmacy.jpg")
}
</style>
<style lang="sass" scoped>

.backg
  background-color: #E9EBEE;
.my-card
  margin: auto
  margin-top: 50px
  margin-bottom: 50px
  width: 100%
  max-width: 500px
  border-radius: 0px 25px 25px 25px

.backggg
  background-color: #E9EBEE;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @media screen and (max-width: 580px)
    width: 100%
    height: 100%
  </style>
