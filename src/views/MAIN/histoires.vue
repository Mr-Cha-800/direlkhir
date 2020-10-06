<template>
<body>
       <!-- .wpo-breadcumb-area start -->
        <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>Vos Histoires</h2>
                            <ul>
                                <li><router-link to="/">Accueil</router-link></li>
                                <li><span>Histoires</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->

        <!-- start wpo-blog-pg-section -->
        <section class="wpo-blog-pg-section section-padding">
            <div class="container">
                <div class="q-pl-md">
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
    </div>
                <div class="col col-md-8">
                    <histoireitem v-for="hist in gethist" :key="hist.id" :all="all" :hist="hist" :food="food"  :medics="medics"  :materials="materials"  :blood="blood"  :money="money" />
                    </div>
                    <div class="col col-md-4">
                        <div class="wpo-blog-sidebar">
                            <searchc/>
                            <histoirerecent/>
                        </div>
                    </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-blog-pg-section -->
</body>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import searchc from './components/search'
import histoireitem from './components/histoireitem'
import histoirerecent from './components/histoirerecent'
export default {

  data () {
    return {
      all: true,
      medics: true,
      materials: true,
      blood: true,
      money: true,
      food: true
    }
  },
  components: {
    histoireitem,
    searchc,
    histoirerecent
  },
  methods: {
    ...mapActions('general', ['gethistoiress', 'like', 'unlike', 'count']),
    ...mapGetters('general', ['gethistoires', 'getonehist']),
    show (id) {
      this.getonehist(id)
      this.$router.push({ name: 'histoire', params: { id: id } })
    },
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement d'annonces d'argent </b>.<br/>  <b><span class='text-green'>Veuillez patienter...</span> </b>"
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
    gethist () {
      return this.gethistoires()
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
  },
  created () {
    this.gethistoiress()
    this.showLoading()
  }
}
</script>

<style lang="scss" scoped>

</style>
