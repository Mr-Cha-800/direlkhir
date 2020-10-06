<template>
  <div class="widget recent-post-widget">
    <h3>Annonces de don récentes</h3>
    <div class="posts">
        <div class="post" v-for="show in showrecent" :key="show.id">
            <div class="img-holder">
              <img v-if="show.rhesus" src="/assets/images/event/bloodbg.jpg" alt>
              <img v-else-if="show.nom_du_materiel" src="/assets/images/event/materialbg.jpg" alt>
              <img v-else src="/assets/images/event/foodbg.jpg" alt>
            </div>
            <div class="details">
                <h4 v-if="show.rhesus"><router-link :to="{ name: 'sang', params: { id: show.id }}">{{show.nom}}</router-link></h4>
                <h4 v-else-if="show.nom_du_materiel"><router-link :to="{ name: 'materiel', params: { id: show.id }}">{{show.nom}}</router-link></h4>
                <h4 v-else><router-link :to="{ name: 'repas', params: { id: show.id }}">{{show.nom}}</router-link></h4>
                <span class="date">{{ show.updated_at | moment("D MMM YYYY") }}</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  methods: {
    ...mapActions('general', ['getrecents']),
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
    this.getrecents()
  }
}
</script>

<style>

</style>
