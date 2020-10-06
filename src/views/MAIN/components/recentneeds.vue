<template>

        <div class="wpo-event-area section-padding">
            <div class="container">
                <div class="row">
                     <div class="col-12">
                        <div class="wpo-section-title">
                            <span>Annonces récentes</span>
                            <h2>Des gens qui ont besoin</h2>
                        </div>
                    </div>
                 </div>
                <div class="row">
                    <div v-for="show in showrecent" :key="show.id" class="col-md-4 col-sm-6 col-12 custom-grid">
                        <div class="wpo-event-item">
                            <div v-if="show.rhesus" class="wpo-event-img">
                                <img src="assets/images/event/bloodbg.jpg" alt="">
                                <div class="thumb-text-2">
                                    <span>{{ show.updated_at | moment("D") }}</span>
                                    <span>{{ show.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div v-else-if="show.nom_du_materiel" class="wpo-event-img">
                                <img src="assets/images/event/materialbg.jpg" alt="">
                                <div class="thumb-text">
                                    <span>{{ show.updated_at | moment("D") }}</span>
                                    <span>{{ show.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div v-else class="wpo-event-img">
                                <img src="assets/images/event/foodbg.jpg" alt="">
                                <div class="thumb-text-5">
                                    <span>{{ show.updated_at | moment("D") }}</span>
                                    <span>{{ show.updated_at | moment("MMM") }}</span>
                                </div>
                            </div>
                            <div class="wpo-event-text">
                                <h2>{{ show.nom }}</h2>
                                <ul>
                                    <li><a :href="`tel:${show.num_de_tel}`"><i class="fa fa-mobile" aria-hidden="true"></i>{{show.num_de_tel}}</a> </li>
                                    <li><i class="fi flaticon-pin"></i>{{ show.wilaya }}</li>
                                </ul>
                                <p v-if="show.type_de_meteriel">{{show.type_de_meteriel}}</p>
                                <p v-else-if="show.rhesus">{{show.type}} {{show.rhesus}} </p>
                                <p v-else>Pour {{show.nbr_personne}} personne (s)</p>
                <a v-if="show.rhesus"><router-link :to="{ name: 'sang', params: { id: show.id }}">En savoir plus...</router-link></a>
                <a v-else-if="show.nom_du_materiel"><router-link :to="{ name: 'materiel', params: { id: show.id }}">En savoir plus...</router-link></a>
                <a v-else><router-link :to="{ name: 'repas', params: { id: show.id }}">En savoir plus...</router-link></a>
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

  methods: {
    ...mapActions('general', ['getrecentns']),
    ...mapGetters('general', ['getrecent'])
  },
  computed: {
    showrecent () {
      return this.getrecent()
    }
  },
  created () {
    // this.blood = this.getblood()
    // actions
    this.getrecentns()
  }
}
</script>

<style>

</style>
