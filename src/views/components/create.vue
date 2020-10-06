<template>

      <q-card class="q-pa-md q-gutter-sm">
    <q-btn push color="red" label="Créer une alerte" @click="radio"/>
    <q-btn push color="primary" label="Aider des gens"  @click="radioo"/> <br>
    <q-form
      @submit.prevent="onSubmit"
      class="justify-center" >
     <q-input bottom-slots v-model="phonee" label="Ajouter un numéro" required>
        <template v-slot:before>
          <q-btn round dense flat icon="phone" />
        </template>
          <q-btn type="submit" :loading="loading" :disabled="loading" class="q-pa-xs" v-slot:after round dense flat icon="send" >
      </q-btn>
      </q-input>
      </q-form>
    <notifications/>
      </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import notifications from './notifications'
export default {
  data () {
    return {
      phonee: '',
      loading: false
    }
  },
  components: {
    notifications
  },
  methods: {
    ...mapActions('phone', ['addphone']),
    onSubmit () {
      this.loading = true
      this.addphone(this.phonee)
        .then(response => {
          this.phonee = ''
          this.loading = false
          this.$q.notify({
            progress: true,
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            position: 'top-right',
            message: 'Bien recu'
          })
        })
        .catch(error => {
          this.loading = false
          if (error !== '') {
            this.phonee = ''
            this.$q.notify({
              progress: true,
              color: 'red-4',
              textColor: 'white',
              icon: 'clear',
              position: 'top-right',
              message: 'veuillez réessayer'
            })
          }
        })
    },
    radio () {
      this.$q.dialog({
        title: 'Options',
        message: 'Veuillez choisir une option:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Besoin du sang', value: 'opt1', color: 'red' },
            { label: "Besoin d'un repas", value: 'opt2', color: 'amber' },
            { label: 'Besoin du matériel', value: 'opt3', color: 'blue' },
            { label: 'Besoin du médicaments', value: 'opt4', color: 'green' },
            { label: "Besoin d'argent", value: 'opt5', color: '#85bb65' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        if (data === 'opt1') {
          this.$router.push('besoin-sang')
        } else if (data === 'opt2') {
          this.$router.push('besoin-repas')
        } else if (data === 'opt3') {
          this.$router.push('besoin-materiel')
        } else if (data === 'opt4') {
          this.$router.push('besoin-medicament')
        } else if (data === 'opt5') {
          this.$router.push('besoin-argent')
        }
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    radioo () {
      this.$q.dialog({
        title: 'Options',
        message: 'Veuillez choisir une option:',
        options: {
          type: 'radio',
          model: 'opt1',
          // inline: true
          items: [
            { label: 'Donneur du sang', value: 'opt1', color: 'red' },
            { label: 'Donneur de repas', value: 'opt2', color: 'amber' },
            { label: 'Donneur du matériel', value: 'opt3', color: 'blue' },
            { label: 'Donneur du médicaments', value: 'opt4', color: 'green' },
            { label: "Donneur d'argent", value: 'opt5', color: '#85bb65' }
          ]
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        if (data === 'opt1') {
          this.$router.push('aider-sang')
        } else if (data === 'opt2') {
          this.$router.push('aider-repas')
        } else if (data === 'opt3') {
          this.$router.push('aider-materiel')
        } else if (data === 'opt4') {
          this.$router.push('aider-medicament')
        } else if (data === 'opt5') {
          this.$router.push('aider-argent')
        }
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>

<style>

</style>
