<template>
<div class="container">
  <div class="q-pa-md row items-start q-gutter-md justify-evenly"  >
      <!-- blood-->
     <q-card class="my-card" >
         <q-tooltip content-class="bg-red" content-style="font-size: 11px" :offset="[10, 10]">
         Don du sang
        </q-tooltip>
      <img src="../../images/helpblood.jpg"/>

        <div class="text-h5 absolute-bottom text-left">
   <q-card-actions vertical>
        <q-btn
          :icon="expandedblood ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expandedblood = !expandedblood"
        />
      </q-card-actions>

<q-slide-transition>
        <div v-show="expandedblood">
          <q-separator />
          <q-card-section  class="q-pa-md  q-gutter-md justify-evenly">
    <q-btn push @click="$router.replace('/don_du_sang/donneur')" color="green" label="Don" />
    <q-btn push @click="$router.replace('/don_du_sang/chercher')" color="orange" label="Besoin" />
    <q-btn push @click="$router.replace('/don_du_sang/alerte')" color="red" label="Alerte" />

          </q-card-section>
        </div>
      </q-slide-transition>
        </div>
    </q-card>

 <!--// blood-->
  <!-- food-->
   <q-card class="my-card" >
         <q-tooltip content-class="bg-red" content-style="font-size: 11px" :offset="[10, 10]">
         Don de repas
        </q-tooltip>
      <img src="../../images/helpfood.jpg"/>

        <div class="text-h5 absolute-bottom text-left">
   <q-card-actions vertical>
        <q-btn
          :icon="expandedfood ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expandedfood = !expandedfood"
        />
      </q-card-actions>

<q-slide-transition>
        <div v-show="expandedfood">
          <q-separator />
          <q-card-section  class="q-pa-md  q-gutter-md justify-evenly">
    <q-btn push @click="$router.replace('/don_de_repas/donneur')" color="green" label="Don" />
    <q-btn push @click="$router.replace('/don_de_repas/chercher')" color="orange" label="Besoin" />
    <q-btn push @click="$router.replace('/don_de_repas/alerte')" color="red" label="Alerte" />

          </q-card-section>
        </div>
      </q-slide-transition>
        </div>
    </q-card>
  <!-- //food-->

  <!-- material-->
    <q-card class="my-card" >
         <q-tooltip content-class="bg-red" content-style="font-size: 11px" :offset="[10, 10]">
         Don du matériel
        </q-tooltip>
      <img src="../../images/helpmaterial.jpg"/>

        <div class="text-h5 absolute-bottom text-left">
   <q-card-actions vertical>
        <q-btn
          :icon="expandedmaterial ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expandedmaterial = !expandedmaterial"
        />
      </q-card-actions>

<q-slide-transition>
        <div v-show="expandedmaterial">
          <q-separator />
          <q-card-section  class="q-pa-md  q-gutter-md justify-evenly">
    <q-btn push @click="$router.replace('/don_du_materiel/donneur')" color="green" label="Don" />
    <q-btn push @click="$router.replace('/don_du_materiel/chercher')" color="orange" label="Besoin" />
    <q-btn push @click="$router.replace('/don_du_materiel/alerte')" color="red" label="Alerte" />

          </q-card-section>
        </div>
      </q-slide-transition>
        </div>
    </q-card>
  <!-- //material-->
  </div>
   <div class="q-pa-md row items-start q-gutter-md justify-evenly">
  <!-- medicament-->
  <q-card class="my-card" >
         <q-tooltip content-class="bg-red" content-style="font-size: 11px" :offset="[10, 10]">
         Don du médicament
        </q-tooltip>
      <img src="../../images/helpmedics.jpg"/>

        <div class="text-h5 absolute-bottom text-left">
   <q-card-actions vertical>
        <q-btn
          :icon="expandedmedics ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expandedmedics = !expandedmedics"
        />
      </q-card-actions>

<q-slide-transition>
        <div v-show="expandedmedics">
          <q-separator />
          <q-card-section  class="q-pa-md  q-gutter-md justify-evenly">
    <q-btn push @click="$router.replace('/don_du_medicament/donneur')" color="green" label="Don" />
    <q-btn push @click="$router.replace('/don_du_medicament/chercher')" color="orange" label="Besoin" />
    <q-btn push @click="$router.replace('/don_du_medicament/alerte')" color="red" label="Alerte" />

          </q-card-section>
        </div>
      </q-slide-transition>
        </div>
    </q-card>
  <!--// medicament-->

  <!-- argent-->
  <q-card class="my-card" >
         <q-tooltip content-class="bg-red" content-style="font-size: 11px" :offset="[10, 10]">
         Don d'argent
        </q-tooltip>
      <img src="../../images/helpmoney.jpg"/>

        <div class="text-h5 absolute-bottom text-left">
   <q-card-actions vertical>
        <q-btn
          :icon="expandedmoney ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expandedmoney = !expandedmoney"
        />
      </q-card-actions>

<q-slide-transition>
        <div v-show="expandedmoney">
          <q-separator />
          <q-card-section  class="q-pa-md  q-gutter-md justify-evenly">
    <q-btn push @click="$router.replace('/don_dargent/donneur')" color="green" label="Don" />
    <q-btn push @click="$router.replace('/don_dargent/chercher')" color="orange" label="Besoin" />
    <q-btn push @click="$router.replace('/don_dargent/alerte')" color="red" label="Alerte" />

          </q-card-section>
        </div>
      </q-slide-transition>
        </div>
    </q-card>
  <!--//argent-->
    </div>
    </div>
    </template>
<script>
export default {
  data () {
    return {
      expandedblood: false,
      expandedfood: false,
      expandedmaterial: false,
      expandedmedics: false,
      expandedmoney: false,
      lorem: 'hqsbdqsbdjsd kqsndhjqsbdjbd sdbqjdbqsjd'
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 320px;
  }
.mycard:hover{
  width: 90%;
  max-width: 450px;

}
.text-h5 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    color: #6f8aff;
    font-weight: 700;
}
</style>
