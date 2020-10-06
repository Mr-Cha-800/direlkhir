<template>
  <div class="wpo-blog-area section-padding">
            <div class="container">
                <div class="row">
                     <div class="col-12">
                        <div class="wpo-section-title">
                            <span>Histoires partagées</span>
                            <h2>Les plus récentes</h2>
                        </div>
                    </div>
                 </div>
                <div class="row">
                    <div v-for="show in gethist" :key="show.id" class="col-lg-4 col-md-4 col-sm-6 col-12 custom-grid">
                        <div class="wpo-blog-item">
                            <div class="wpo-blog-img">
                              <img v-if="show.type === 'blood' " src="/assets/images/event/bloodbg.jpg" alt>
                              <img v-else-if="show.type === 'medics' " src="/assets/images/event/pharmacy.jpg" alt>
                              <img v-else-if="show.type === 'money' " src="/assets/images/event/support.jpg" alt>
                              <img v-else-if="show.type === 'materials' " src="/assets/images/event/materialbg.jpg" alt>
                              <img v-else src="/assets/images/event/foodbg.jpg" alt>
                            </div>
                            <div class="wpo-blog-content">
                                <span>{{ show.updated_at | moment("MMM D, YYYY") }}</span>
                                <router-link :to="{ name: 'histoire', params: { id: show.id }}"><h2>{{show.nom}}</h2></router-link>
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
    ...mapActions('general', ['getrecentstory']),
    ...mapGetters('general', ['gethistoires'])
  },
  computed: {
    gethist () {
      return this.gethistoires()
    }
  },
  created () {
    this.getrecentstory()
  }
}
</script>

<style>

</style>
