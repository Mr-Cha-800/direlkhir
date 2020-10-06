<template>
<div v-if="hist.type === 'food' && food || hist.type === 'money' && money ||hist.type === 'blood' && blood ||hist.type === 'materials' && materials ||hist.type === 'medics' && medics "  class="wpo-wpo-blog-content">
    <div class="post format-standard-image">
        <div class="entry-media">
            <img v-if="hist.type === 'blood' " src="assets/images/event/bloodbg.jpg" alt>
            <img v-else-if="hist.type === 'medics' " src="assets/images/event/pharmacy.jpg" alt>
            <img v-else-if="hist.type === 'money' " src="assets/images/event/support.jpg" alt>
            <img v-else-if="hist.type === 'materials' " src="assets/images/event/materialbg.jpg" alt>
            <img v-else src="assets/images/event/foodbg.jpg" alt>
        </div>
        <ul class="entry-meta">
            <li><img src="assets/images/blog/admin.jpg" alt> Par {{hist.name}}</li>
            <li><i class="ti-calendar"></i> {{ hist.updated_at | moment("MMM, D YYYY") }}</li>
            <li  v-if="ifloggedIn"><q-rating
                  v-model="model3"
                  max="1"
                  size="25px"
                  color="red"
                  color-selected="red-9"
                  icon="favorite_border"
                  icon-selected="favorite"
                  icon-half="favorite"
                  no-dimming
                />
            <q-spinner-hearts
          color="red"
          size="2em"
          v-if="loading2"
              />
                <template v-for="like in counts">
                  <template v-if="like.likesss === 0 || like.likesss === 1"> {{like.likesss}} personne aime ça</template>
                  <template v-else-if="like.likesss > 1"> {{like.likesss}} personnes aiment ça</template>
                </template>
                </li>
              <li v-else>
                  <q-icon name="favorite" style="font-size: 25px;" class="text-red" />
                <template v-for="like in counts">
                  <template v-if="like.likesss === 0 || like.likesss === 1"> {{like.likesss}} personne aime ça</template>
                  <template v-else-if="like.likesss > 1"> {{like.likesss}} personnes aiment ça</template>
                </template>
                <q-tooltip  color="black" :offset="[20, 20]">
                  Veuillez s'identifier pour réagir
                </q-tooltip>
              </li>
        </ul>
        <h3 @click="show(hist.id)">{{hist.nom}}</h3>
        <p>{{hist.sujet}}</p>
        <router-link :to="{ name: 'histoire', params: { id: hist.id }}">En savoir plus...</router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    hist: {
      type: Object,
      required: true
    },
    all: {
      type: Boolean,
      required: true
    },
    food: {
      type: Boolean,
      required: true
    },
    medics: {
      type: Boolean,
      required: true
    },
    materials: {
      type: Boolean,
      required: true
    },
    blood: {
      type: Boolean,
      required: true
    },
    money: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      loading2: false,
      counts: '',
      model3: 1,
      ifliked: ''
    }
  },
  methods: {
    ...mapActions('general', ['gethistoiress']),
    ...mapGetters('general', ['gethistoires']),
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    show (id) {
      this.$router.push({ name: 'histoire', params: { id: id } })
    },
    count (id) {
      this.loading2 = true
      axios.get('/count/' + id)
        .then(response => {
          this.loading2 = false
          this.counts = response.data
        })
        .catch(error => {
          this.loading2 = false
          console.log(error)
        })
    },
    like (idliked) {
      this.loading2 = true
      axios.post('/like/' + this.getuserinfo.id + '/' + idliked)
        .then(response => {
          this.loading2 = false
          this.count(idliked)
        })
        .catch(error => {
          this.loading2 = false
          console.log(error)
        })
    },
    unlike (idliked) {
      this.loading2 = true
      axios.post('/unlike/' + this.getuserinfo.id + '/' + idliked)
        .then(response => {
          this.loading2 = false
          this.count(idliked)
        })
        .catch(error => {
          this.loading2 = false
          console.log(error)
        })
    },
    checkifliked (idliked) {
      axios.get('/check/' + idliked)
        .then(response => {
          this.ifliked = response.data[0].likesss
          if (this.ifliked === 0) {
            this.model3 = 0
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  watch: {
    // whenever question changes, this function will run
    model3: function () {
      if (this.model3 === 1) {
        this.like(this.hist.id)
      } else if (this.model3 === 0) {
        this.unlike(this.hist.id)
      }
    }
  },
  created () {
    this.count(this.hist.id)
    this.checkifliked(this.hist.id)
  }
}
</script>

<style>

</style>
