<template>
   <div class="table"  v-if="getfood">
    <div class="row header amber">
      <div class="cell">
        Nom d'alerte
      </div>
      <div class="cell">
        Num. Tél
      </div>
      <div class="cell">
        Nbr. Pérsonne
      </div>
      <div class="cell">
        Wilaya
      </div>
      <div class="cell">
        Végétarien
      </div>
      <div class="cell">
        Sans Gluten
      </div>
      <div class="cell">

      </div>
    </div>
    <div v-for="(food, index) in getfood" :key="food.id" class="row">
      <div class="cell" data-title="Username">
        {{food.nom}}
      </div>
      <div class="cell" data-title="Email">
        {{food.num_de_tel}}
      </div>
      <div class="cell" data-title="Password">
        {{food.nbr_personne}}
      </div>
      <div class="cell" data-title="Active">
        {{food.wilaya}}
      </div>
      <div class="cell" data-title="Active">
        {{food.vegetarien}}
      </div>
      <div class="cell" data-title="Active">
        {{food.sans_gluten}}
      </div>
      <div class="cell" data-title="Location">
      <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" v-if="food.confirmed === 1" color="green" size="16px" flat dense round icon="done" >
              <q-tooltip content-class="bg-green" :offset="[10, 10]">
          Validé
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" v-if="food.confirmed === 0" color="green" size="16px" flat dense round icon="hourglass_empty" >
              <q-tooltip content-class="bg-green" :offset="[10, 10]">
          Pas encore validé
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" v-if="food.confirmed === 2" color="red" size="16px" flat dense round icon="highlight_off" >
              <q-tooltip content-class="bg-red" :offset="[10, 10]">
          Annonce réjeté veuillez modifier
        </q-tooltip>
            </q-btn>
            <q-btn  @click="show(food.id)" class="gt-xs" color="primary" size="16px" flat dense round icon="update" >
              <q-tooltip content-class="bg-primary" :offset="[10, 10]">
          Voir
        </q-tooltip>
            </q-btn>
            <q-btn @click="deletee(food.id,index)" class="gt-xs" color="red" size="16px" flat dense round icon="delete">
              <q-tooltip content-class="bg-red" :offset="[10, 10]">
          Supprimer
        </q-tooltip>
            </q-btn>
          </div>
          </div>
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
          <q-btn flat label="Supprimer" v-close-popup @click="deletes()"  />
          </q-card-section>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      bar2: false,
      deleteid: '',
      food: []
    }
  },
  methods: {
    ...mapActions('repas', ['getfoosd', 'deletefood', 'getonefoosd']),
    ...mapGetters('repas', ['getfoods']),
    deletee  (id, index) {
      this.bar2 = true
      this.deleteid = id
    },
    deletes () {
      this.deletefood(this.deleteid)
      this.getfoods()
      this.$q.notify({
        message: 'Supprimé.',
        color: 'Black'
      })
    },
    show (id) {
      this.getonefoosd(id)
      this.$router.push({ name: 'repas', params: { id: id } })
    }
  },
  computed: {
    /* getfood () {
      return this.$store.getters['repas/getfoods']
    } */
    getfood: function () {
      return this.$store.getters['repas/getfoods'].filter(function (u) {
        return !u.ann_ou_bes
      })
    }
  },
  created () {
    // actions
    this.getfoosd()
    // getters
    this.getfoods()
  }
}
</script>

<style lang="sass" scoped>
body
  font-family: 'Helvetica Neue', Helvetica, Arial
  font-size: 14px
  line-height: 20px
  font-weight: 400
  color: #3b3b3b
  -webkit-font-smoothing: antialiased
  font-smoothing: antialiased
  background: #2b2b2b

  @media screen and (max-width: 580px)
    font-size: 16px
    line-height: 22px

.wrapper
  margin: 0 auto
  padding: 40px
  max-width: 100%

.table
  margin: 0 0 40px 0
  width: 100%
  box-shadow: 0 1px 3px rgba(0,0,0,0.2)
  display: table
  @media screen and (max-width: 580px)
    display: block

.row
  display: table-row
  background: #f6f6f6

  &:nth-of-type(odd)
    background: #e9e9e9

  &.header
    font-weight: 900
    color: #ffffff
    background: #ea6153

  &.green
    background: #27ae60

  &.blue
    background: #2980b9

  &.amber
    background: #F2C037

  &.primary
    background: #027BE3

  @media screen and (max-width: 580px)
    padding: 14px 0 7px
    display: block

    &.header
      padding: 0
      height: 6px

      .cell
        display: none

    .cell
      margin-bottom: 10px

      &:before
        margin-bottom: 3px
        content: attr(data-title)
        min-width: 98px
        font-size: 10px
        line-height: 10px
        font-weight: bold
        text-transform: uppercase
        color: #969696
        display: block

.cell
  padding: 6px 12px
  display: table-cell
  @media screen and (max-width: 580px)
    padding: 2px 16px
    display: block
</style>
