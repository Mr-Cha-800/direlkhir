<template>
<body>
        <!-- .wpo-breadcumb-area start -->
        <div class="wpo-breadcumb-area ggb">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>Aides</h2>
                            <ul>
                                <li><router-link to="/">Accueil</router-link></li>
                                <li><span>Aides</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->

        <!-- wpo-event-area start -->
        <div class="wpo-event-area-2 section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-section-title">
                            <span>Tous les annonces d'aide validées</span>
                            <h2>Des gens qui peuvent vous aider !</h2>
                        </div>
                    </div>
                </div>
                <div class="wpo-section-title">
                          <div class="q-pa-md q-gutter-sm">

    <div>
      <q-toggle
        v-model="all"
        checked-icon="check"
        color="green"
        label="Afficher Tous"
        unchecked-icon="clear"
      />
      <q-toggle
        v-model="medics"
        checked-icon="local_hospital"
        color="green"
        label="Médicament"
        unchecked-icon="local_hospital"
      />
      <q-toggle
        v-model="materials"
        checked-icon="devices"
        color="primary"
        label="Matériels"
        unchecked-icon="devices"
      />
      <q-toggle
        v-model="blood"
        checked-icon="invert_colors"
        color="red"
        label="Sang"
        unchecked-icon="invert_colors"
      />
      <q-toggle
        v-model="money"
        checked-icon="attach_money"
        color="blue"
        label="Argent"
        unchecked-icon="attach_money"
      />
      <q-toggle
        v-model="food"
        checked-icon="fastfood"
        color="amber"
        label="Repas"
        unchecked-icon="fastfood"
      />
      <q-select filled v-model="model" hint="Filtre par Wilaya" fill-input :options="options" dense options-dense>
        <template v-slot:prepend>
          <q-icon name="room" />
        </template>
      </q-select>
    </div>
  </div>
                </div>
<div class="row" v-if="all">
                    <template v-for="showz in showhelps.materials" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model "  :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/materialbg.jpg" alt="">
                                <div class="thumb-text">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}
                                </h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.type_de_meteriel}}</p>
                                <router-link :to="{ name: 'materiel', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-for="showz in showhelps.sangs" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model "  :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/bloodbg.jpg" alt="">
                                <div class="thumb-text-2">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.type}} {{showz.rhesus}} </p>
                                <router-link :to="{ name: 'sang', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-for="showz in showhelps.money" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model "  :key="showz.id"  class=" col-md-4 col-sm-6 col-12 custom-grid wpo-event-item">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/support.jpg" alt="">
                                <div class="thumb-text-3">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}} </h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.somme}} DA à donner</p>
                                <router-link :to="{ name: 'argent', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-for="showz in showhelps.medicals" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div   v-if="model === 'Tous' || showz.wilaya === model " :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/pharmacy.jpg" alt="">
                                <div class="thumb-text-4">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom_ann_oubes}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.nom_medic}}</p>
                                <router-link :to="{ name: 'medicament', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    <template v-for="showz in showhelps.repas" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model " :key="showz.id" class="col-md-4 col-sm-6 col-12 custom-grid wpo-event-item">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/foodbg.jpg" alt="">
                                <div class="thumb-text-5">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>Pour {{showz.nbr_personne}} personne (s)</p>
                                <router-link :to="{ name: 'repas', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                </div>
                <div  v-if="materials && !all">
                    <template v-for="showz in showhelps.materials" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div v-if="model === 'Tous' || showz.wilaya === model "  :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/materialbg.jpg" alt="">
                                <div class="thumb-text">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.type_de_meteriel}}</p>
                                <router-link :to="{ name: 'materiel', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    </div>
                <div  v-if="blood && !all">
                    <template v-for="showz in showhelps.sangs" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model " :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/bloodbg.jpg" alt="">
                                <div class="thumb-text-2">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.type}} {{showz.rhesus}} </p>
                                <router-link :to="{ name: 'sang', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    </div>
                <div  v-if="money && !all">
                    <template v-for="showz in showhelps.money" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model " :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/support.jpg" alt="">
                                <div class="thumb-text-3">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}} </h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.somme}} DA à donner</p>
                                <router-link :to="{ name: 'argent', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    </div>
                <div  v-if="medics && !all">
                    <template v-for="showz in showhelps.medicals" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div  v-if="model === 'Tous' || showz.wilaya === model " :key="showz.id"  class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/pharmacy.jpg" alt="">
                                <div class="thumb-text-4">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom_ann_oubes}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>{{showz.nom_medic}}</p>
                                <router-link :to="{ name: 'medicament', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    </div>
                <div  v-if="food && !all">
                    <template v-for="showz in showhelps.repas" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div v-if="model === 'Tous' || showz.wilaya === model "  :key="showz.id" class="wpo-event-item col-md-4 col-sm-6 col-12 custom-grid">
                            <div class="wpo-event-img">
                                <img src="assets/images/event/foodbg.jpg" alt="">
                                <div class="thumb-text-5">
                                    <span>{{ showz.updated_at | moment("D") }}</span>
                                    <span>{{ showz.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{showz.nom}}</h2>
                                <ul>
                                    <li><a :href="`tel:${showz.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{showz.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{showz.wilaya}}</li>
                                </ul>
                                <p>Pour {{showz.nbr_personne}} personne (s)</p>
                                <router-link :to="{ name: 'repas', params: { id: showz.id }}">En savoir plus...</router-link>
                            </div>
                        </div>
                    </template>
                    </div>

            </div>
        </div>
        <!-- wpo-event-area end -->
</body>

</template>

<script>
import * as moment from 'moment'
import 'moment/locale/fr'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      all: true,
      medics: true,
      materials: true,
      blood: true,
      money: true,
      food: true,
      model: 'Tous',
      options: [
        'Tous', 'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
      ]
    }
  },
  components: {
  },
  methods: {
    ...mapActions('general', ['gethelpss']),
    ...mapGetters('general', ['gethelps']),
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement d'annonces de don </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
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
    showhelps () {
      return this.gethelps()
    }
  },
  watch: {
    // whenever question changes, this function will run
    all: function () {
      this.medics = this.all
      this.materials = this.all
      this.blood = this.all
      this.money = this.all
      this.food = this.all
    }
    /* food: function () {
      if (this.food === false) {
        this.all = false
      }
    } */
  },
  created () {
    moment.locale('fr')
    // this.blood = this.getblood()
    // actions
    this.gethelpss()
    this.showLoading()
  }
}
</script>

<style lang="scss" scoped>
.ggb{
  background-image: url("../../images/carousel2.jpg")
}
</style>
