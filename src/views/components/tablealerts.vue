<template >
<div class="q-gutter-y-md" style="max-width: 100%;margin:auto">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="white"
          indicator-color="white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" icon="warning" class="bg-red text-white shadow-2" label="Mes Alertes" />
          <q-tab name="alarms" icon="info" class="bg-primary text-white shadow-2" label="Mes Annonces" />
          <q-tab name="stories" icon="emoji_people" class="bg-green text-white shadow-2" label="Mes Histoires" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated
          transition-prev="jump-up"
          transition-next="jump-up">
          <q-tab-panel name="mails">
            <div class="text-h6">Alertes</div>
            <div class="wrapper">
            <div class="text-h6">Besoin du sang</div>
              <bloodalert/>
            <div class="text-h6">Besoin de repas</div>
              <foodalert/>
            <div class="text-h6">Besoin de matériel</div>
              <materialalert/>
            <div class="text-h6">Besoin de médicament</div>
              <medicalalert/>
            <div class="text-h6">Besoin d'argent</div>
              <moneyalert/>
              </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Annonces</div>
            <div class="wrapper">

            <div class="text-h6">Don du sang</div>
              <bloodhelp/>
            <div class="text-h6">Don de repas</div>
              <foodhelp/>
            <div class="text-h6">Don de matériel</div>
              <materialhelp/>
            <div class="text-h6">Don de médicament</div>
              <medicalhelp/>
            <div class="text-h6">Don d'argent</div>
              <moneyhelp/>
              </div>
          </q-tab-panel>
          <q-tab-panel name="stories">
            <div class="text-h6">Mes histoires</div>

            <div class="wrapper">

            <div class="text-h6">Histoires partagées</div>
            <tablestory/>
            </div>
            </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
</template>

<script>
import moneyalert from './tablealerts/moneyalert'
import materialalert from './tablealerts/materialalert'
import medicalalert from './tablealerts/medicalert'
import bloodalert from './tablealerts/bloodalert'
import foodalert from './tablealerts/foodalert'
import moneyhelp from './tablehelp/moneyhelp'
import materialhelp from './tablehelp/materialhelp'
import medicalhelp from './tablehelp/medichelp'
import bloodhelp from './tablehelp/bloodhelp'
import foodhelp from './tablehelp/foodhelp'
import tablestory from './tablehelp/tablestory'
export default {
  data () {
    return {
      tab: 'mails'
    }
  },
  components: {
    moneyalert,
    materialalert,
    medicalalert,
    bloodalert,
    foodalert,
    moneyhelp,
    materialhelp,
    medicalhelp,
    bloodhelp,
    foodhelp,
    tablestory
  }
}
</script>

<style lang="sass" scoped>
.hi
  margin: auto
.wrapper
  margin: 0 auto
  padding: 20px
  width: 100%

.table
  margin: 0 0 20px 0
  width: 100%
  box-shadow: 0 1px 3px rgba(0,0,0,0.2)
  display: table
  @media screen and (max-width: 580px)
    display: block

.row
  background: #f6f6f6

</style>
