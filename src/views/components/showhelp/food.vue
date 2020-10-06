<template>

<div>
            <div class="wpo-breadcumb-area bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap" v-if="getrepas.ann_ou_bes === 1">
                            <h2>Don de repas</h2>
                            <ul>
                                <li><router-link to="index.html">Accueil</router-link></li>
                                <li><span>Annonce</span></li>
                                <li><span>Don de repas</span></li>
                            </ul>
                        </div>
                        <div class="wpo-breadcumb-wrap" v-else>
                            <h2>Besoin du repas</h2>
                            <ul>
                                <li><router-link to="/">Acceuil</router-link></li>
                                <li><span>Alerte</span></li>
                                <li><span>Besoin de repas</span></li>
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
                                    <span>{{ getrepas.updated_at | moment("D") }}</span>
                                    <span>{{ getrepas.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-details-text">
                                <h2>{{getrepas.nom}}</h2>
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
           <div class="text-h6" v-if="getrepas.ann_ou_bes === 1">Nom d'annonce</div>
           <div class="text-h6" v-else>Nom d'alerte</div>
          <div class="text-h6 text-primary">
            {{getrepas.nom}}
          </div>
           <div class="text-h6 ">Nbr de pérsonne</div>
          <div class="text-h6 text-primary">
            {{getrepas.nbr_personne}} Pérsonne (s)
          </div>
           <div class="text-h6 " v-if="getrepas.ann_ou_bes === 1">Date début</div>
          <div class="text-h6 text-primary" v-if="getrepas.ann_ou_bes === 1">
            {{getrepas.date_debut}}
          </div>
           <div class="text-h6 " v-if="getrepas.ann_ou_bes === 1">Date fin</div>
          <div class="text-h6 text-primary" v-if="getrepas.ann_ou_bes === 1">
            {{getrepas.date_fin}}
          </div>
           <div class="text-h6 ">Wilaya</div>
          <div class="text-h6 text-primary">
            {{getrepas.wilaya}}
          </div>
           <div class="text-h6 " v-if="getrepas.ann_ou_bes === 1">Sans gluten</div>
           <div class="text-h6 " v-else>Sans gluten</div>
          <div class="text-h6 text-primary">
            {{getrepas.sans_gluten}}
            </div>
           <div class="text-h6 " v-if="getrepas.ann_ou_bes === 1">Végétarien</div>
           <div class="text-h6 " v-else>Végétarien</div>
          <div class="text-h6 text-primary">
            {{getrepas.vegetarien}}
            </div>
           <div class="text-h6 ">Déscription</div>
          <div class="text-caption text-primary">
            {{getrepas.description}}
            </div>
           <div class="text-h6 ">Num. tél</div>
          <div class="text-h6 text-primary">
            <a :href="`tel:${getrepas.num_de_tel}`">{{getrepas.num_de_tel}}</a>
          </div>
        </q-card-section>

 <q-card-section v-else>

          <q-form
      @submit="onSubmit"
      class="justify-center "
    >
     <q-input
        v-model="nomm"
        type="text"
        class=""
        label="Nom d'annonce *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez taper le nom de votre annonce']"
      >
      </q-input>
    <div class="q-gutter-sm justify-center ">
      <q-input
        v-model="num_de_tell"
        label="Numéro de téléphone"
        mask="(##) ## ## ## ##"
        fill-mask
        hint="Aide: (##) ## ## ## ##"
        :rules="[val => !!val || 'Obligatoire']"
      />
    </div>
    <div class="q-gutter-sm justify-center ">
      <q-input
        v-model="nbr_personner"
        type="number"
        label="Nombre de personne"
        :rules="[val => !!val  && val.length > 0 || 'veuillez taper le nombre de personne']"

      />
    </div>

    <div class="q-gutter-sm justify-center " v-if="getrepas.ann_ou_bes">
      <q-input v-model="date_debutt" label="Date de debut de repas"  :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxyc" transition-show="scale" transition-hide="scale">
            <q-date v-model="date_debutt" @input="() => $refs.qDateProxyc.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    </div>
    <div class="q-gutter-sm justify-center " v-if="getrepas.ann_ou_bes">
      <q-input v-model="date_finn" label="Date de fin de repas" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date_finn" :options="optionsFn"  @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    </div>
    <div class="q-gutter-sm justify-center ">
      <q-select v-model="wilayaa" :options="food.wilaya" label="Wilaya"
      :rules="[val => !!val || 'Obligatoire']"/>
    </div>
    <div class="q-gutter-sm justify-center " v-if="getrepas.ann_ou_bes === 1">
      <q-select v-model="vegetarienn" :options="food.isvegeterien" label="Végétarien ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center " v-else>
      <q-select v-model="vegetarienn" :options="food.isvegeteriena" label="Végétarien ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center " v-if="getrepas.ann_ou_bes === 1">
      <q-select v-model="sans_glutenn" :options="food.issansgluten" label="Sans gluten ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center " v-else>
      <q-select v-model="sans_glutenn" :options="food.issansglutena" label="Sans gluten ou non ?"
      :rules="[val => !!val || 'Obligatoire']" />
    </div>
    <div class="q-gutter-sm justify-center ">
<q-input
      label="Veuillez décrire votre besoin"
      hint="Description"
      v-model="descriptionn"
      type="textarea"
      :rules="[val => !!val || 'Obligatoire']"
    />
    </div>
      <div>
    <q-btn type="submit" push color="primary" :loading="loading" :disabled="loading" icon-right="send" label="Modifier l'annonce" >
              <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Chargement...
      </template>
    </q-btn>
    <q-btn @click="edit = false">Cancel</q-btn>
    <q-btn label="Réinitialiser" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </q-card-section>

      <q-chip color="teal" v-if="getrepas.confirmed && getuserinfo.id === getblood.owner" class="absolute-top-right" text-color="white" icon="done">
        Validé
      </q-chip>
      <q-chip color="red" v-else-if="getuserinfo.id === getrepas.owner" class="absolute-top-right" text-color="white" icon="done">
        Pas encore validé
      </q-chip>
      </div>
      <q-separator />

      <q-card-actions v-if="getuserinfo.id === getrepas.owner"  align="right">
        <q-btn @click="fill" v-if="!edit" color="primary" >
        <b>Modifier</b>
        </q-btn>
        <q-btn @click="bar2 = true" color="red" >
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
          <q-btn flat label="Supprimer" v-close-popup @click="deletee(getrepas.id)"  />
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
      nomm: '',
      num_de_tell: '',
      nbr_personner: '',
      date_debutt: '',
      date_finn: '',
      wilayaa: '',
      sans_glutenn: '',
      vegetarienn: '',
      descriptionn: '',
      bar2: false,
      edit: false,
      food: {
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        isvegeterien: [
          'Disponible', 'Non Disponible'
        ],
        isvegeteriena: [
          'Oui', 'Non'
        ],
        issansgluten: [
          'Oui Disponible', 'Non Disponible'
        ],
        issansglutena: [
          'Oui', 'Non'
        ]
      }
    }
  },
  methods: {
    ...mapActions('repas', ['getfoosd', 'getonefoosd', 'deletefood', 'updateRepas']),
    ...mapGetters('repas', ['getRepasById']),
    ...mapGetters('auth', ['getuser']),
    deletee (id) {
      this.deletefood(id)
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Supprimé'
      })
      this.getfoosd()
      this.$router.push({ name: 'dashboard' })
      // alert(this.$route.params.id)
    },
    fill () {
      this.edit = true
      this.id = this.getrepas.id
      this.nomm = this.getrepas.nom
      this.num_de_tell = this.getrepas.num_de_tel
      this.nbr_personner = this.getrepas.nbr_personne
      this.date_debutt = this.getrepas.date_debut
      this.date_finn = this.getrepas.date_fin
      this.wilayaa = this.getrepas.wilaya
      this.sans_glutenn = this.getrepas.sans_gluten
      this.vegetarienn = this.getrepas.vegetarien
      this.descriptionn = this.getrepas.description
    },
    onSubmit () {
      this.loading = true
      this.edit = false
      // alert(this.id + this.nomm + this.typee + this.rhesuss + this.wilayaa + this.phonee + this.genderr + this.descriptionn)
      this.updateRepas({
        id: this.id,
        nom: this.nomm,
        numtel: this.num_de_tell,
        nbrpers: this.nbr_personner,
        datdeb: this.date_debutt,
        datfin: this.date_finn,
        wilaya: this.wilayaa,
        sansglut: this.sans_glutenn,
        veg: this.vegetarienn,
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
    optionsFn (datef) {
      return datef >= this.date_debutt
    },
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement d'annonces de repas </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
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
    getrepas () {
      return this.getRepasById()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    // this.blood = this.getblood()
    // actions
    this.getonefoosd(this.$route.params.id)
    this.showLoading()
  },
  watch: {

    date_debutt: function () {
      if (this.date_debutt > this.date_finn && this.date_finn) {
        this.date_finn = null
      }
    }
  }
}
</script>

<style style="scss">

.backg{
  background-color: #E9EBEE;
}
.bbgg{
  background-size: cover;
  background-position: 50% 50%;
  background-image: url("../../../images/foodbg.jpg");
}

.bg{
  background-image: url("../../../images/foodbg.jpg")
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
  min-height: 100vh;
  @media screen and (max-width: 580px)
    width: 100%
    height: 100%
  </style>
