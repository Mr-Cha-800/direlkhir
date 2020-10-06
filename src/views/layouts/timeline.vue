<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>
        Dir El Khir est là
        <br>
      <h6>Guide d'utilisation !</h6>
      </q-timeline-entry>

      <q-timeline-entry
        title="Voue êtes un donneur oubien un pharmacien !"
        subtitle="Donneur"
        side="left"
        icon="info"
      >
        <div>
          En inscrivant sur la plateforme vous allez donner la chance aux gens qui sont besoin de votre service à vous trouver !
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Vous cherchez de l'aide"
        subtitle="Chercher un donneur"
        color="amber"
        icon="search"
        side="right"
      >
        <div>
        Afin que les donneur oubien les pharmaciens puissent vous aider , vous devez faire une recherche ou bien créer une alerte de besoin ! dans le domaine qui vous convient !
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Créer une alerte"
        subtitle="Cas urgent"
        side="left"
        color="red"
        icon="report_problem"
      >
        <div>
         Afin de faire une alerte , il vous faut une inscription ! veuillez suivre le lien en dessus!
         </div>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>
<script>
export default {
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
