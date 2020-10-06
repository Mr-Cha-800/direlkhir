<template>
  <q-btn push color="purple" round icon="notifications" class="q-ml-md float-right">
      <q-badge color="red" floating>4</q-badge>
        <q-tooltip anchor="top middle" content-class="bg-indigo" :offset="[10, 10]">
          Notifications
        </q-tooltip>
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list bordered>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="red" text-color="white" icon="warning" />
        </q-item-section>

        <q-item-section>ALERT! Besoin du sang (Alger)</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="blue" text-color="white" icon="info" />
        </q-item-section>

        <q-item-section>Nouveau donneur d'argent (Alger)</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="blue" text-color="white" icon="info" />
        </q-item-section>

        <q-item-section>Nouveau donneur d'argent (Oran)</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="red" text-color="white" icon="warning" />
        </q-item-section>

        <q-item-section>ALERT! Besoin d'argent (Alger)</q-item-section>
      </q-item>
      <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="blue" text-color="white" icon="info" />
        </q-item-section>

        <q-item-section>Nouveau donneur du sang (Skikda)</q-item-section>
      </q-item>

    </q-list>
        </q-menu>
    </q-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>
