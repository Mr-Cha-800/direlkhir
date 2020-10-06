<template>
  <q-list bordered class=" bg-white rounded-borders q-pa-md tablealert">
      <q-item-label header class="text-h4" >Mes annonces de dons</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="accessibility_new" color="green" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2">
          <q-item-label class="q-mt-sm ">Besoin d'argent</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">bonjour nous sommes à la recherche d'une somme d'argent </span>
            <span class="text-grey-8"> - Wilaya Skikda</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #3: > Generic type parameter for props
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Ouvrir l'annonce</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" color="red" size="16px" flat dense round icon="delete">
              <q-tooltip content-class="bg-red" :offset="[10, 10]">
          Supprimer
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" color="primary" size="16px" flat dense round icon="update" >
              <q-tooltip content-class="bg-primary" :offset="[10, 10]">
          Mettre à jour
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" color="green" size="16px" flat dense round icon="hourglass_empty" >
              <q-tooltip content-class="bg-green" :offset="[10, 10]">
          Pas encore validé
        </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="accessibility_new" color="green" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2">
          <q-item-label class="q-mt-sm ">Besoin d'argent</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">bonjour nous sommes à la recherche d'une somme d'argent </span>
            <span class="text-grey-8"> - Wilaya Skikda</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #3: > Generic type parameter for props
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Ouvrir l'annonce</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" color="red" size="16px" flat dense round icon="delete">
              <q-tooltip content-class="bg-red" :offset="[10, 10]">
          Supprimer
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" color="primary" size="16px" flat dense round icon="update" >
              <q-tooltip content-class="bg-primary" :offset="[10, 10]">
          Mettre à jour
        </q-tooltip>
            </q-btn>
            <q-btn class="gt-xs" color="green" size="16px" flat dense round icon="done" >
              <q-tooltip content-class="bg-green" :offset="[10, 10]">
          Validé
        </q-tooltip>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (max-width: 768px) {
.tablealert{
  max-width:300px;
}
}
@media screen and (min-width: 768px) {
.tablealert{
  min-width:800px;
}
}
</style>
