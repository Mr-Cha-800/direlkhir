<template>
  <div class="widget search-widget">
    <h3>Cherchez ici</h3>
    <form @submit.prevent="onSubmit">
        <div>
            <input v-model="search" type="text" class="form-control" placeholder="Chercher histoire..">
            <button type="submit"><i class="ti-search"></i></button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('general', ['gethistoiressearched']),
    ...mapGetters('general', ['gethistoires']),
    onSubmit () {
      this.gethistoiressearched(this.search)
        .then(() => {
          this.$router.replace({
            name: 'histoirescherche'
          })
        }).catch(() => {
          console.log('failed')
        })
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'search',
        message: 'Voici les résultats !'
      })
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
