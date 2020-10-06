<template>
<body>
        <!-- .wpo-breadcumb-area start -->
        <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>Histoire</h2>
                            <ul>
                                <li><router-link to="/">Accueil</router-link></li>
                                <li><span>Histoire</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->
        <!-- start wpo-blog-single-section -->
        <section class="wpo-blog-single-section section-padding">
            <div class="container">
<div class="">
<div class="col col-md-8">
<div class="wpo-wpo-blog-content clearfix" v-for="gethissst in gethisto" :key="gethissst.id"  >
<div v-if="!edit" class="post" >
    <div class="entry-media">
        <img v-if="gethissst.type === 'blood' " src="/assets/images/event/bloodbg.jpg" alt>
        <img v-else-if="gethissst.type === 'medics' " src="/assets/images/event/pharmacy.jpg" alt>
        <img v-else-if="gethissst.type === 'money' " src="/assets/images/event/support.jpg" alt>
        <img v-else-if="gethissst.type === 'materials' " src="/assets/images/event/materialbg.jpg" alt>
        <img v-else src="/assets/images/event/foodbg.jpg" alt>
    </div>
    <ul class="entry-meta">
        <li><router-link to="#"><img src="/assets/images/blog/admin.jpg" > By {{gethissst.name}}</router-link></li>
        <li><router-link to="#"><i class="ti-calendar"></i>{{ gethissst.updated_at | moment("MMM, D YYYY") }}</router-link></li>
        <li  v-if="ifloggedIn" style="padding-left:20px;padding-right:20px;"><q-rating
              v-model="model3"
              max="1"
              size="25px"
              color="red"
              color-selected="red-9"
              icon="favorite_border"
              icon-selected="favorite"
              icon-half="favorite"
              no-dimming
              v-if="!loading2"
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
              <q-icon name="favorite" style="padding-left:20px;padding-right:20px;font-size: 25px;" class="text-red" />
            <template v-for="like in counts">
              <template v-if="like.likesss === 0 || like.likesss === 1"> {{like.likesss}} personne aime ça</template>
              <template v-else-if="like.likesss > 1"> {{like.likesss}} personnes aiment ça</template>
            </template>
            <q-tooltip  color="black" :offset="[20, 20]">
              Veuillez s'identifier pour réagir
            </q-tooltip>
          </li>
    </ul>
    <h2>{{gethissst.nom}}</h2>
    <p>{{gethissst.sujet}}</p>
    <p>{{gethissst.description}}</p>
</div>
<div v-if="getuserinfo.id === gethissst.owner" align="right">
    <q-btn  v-if="!edit" @click="fill" color="primary" >
    <b>Modifier</b>
    </q-btn>
    <q-btn @click="bar2 = true"  color="red" >
    <b>Supprimer</b>
    </q-btn>
</div>
<q-form v-if="edit"
@submit="onSubmit"
class="justify-center q-pa-sm"
>
<q-input
    v-model="histoire.nom"
    type="text"
    class="q-pa-md"
    label="Nom de votre histoire *"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'veuillez taper le nom']"
>
</q-input>
<q-input
    v-model="histoire.sujet"
    type="text"
    class="q-pa-md"
    label="Sujet de votre histoire *"
    lazy-rules
    :rules="[ val => val && val.length > 0 || 'veuillez taper le sujet en résumé']"
>
</q-input>

<div class="q-gutter-sm justify-center q-pa-md">
<q-select
    v-model="histoire.typeselect"
    :options="histoire.type"
    label="Type de votre histoire"
    emit-value
    map-options
:rules="[val => !!val || 'Obligatoire']"/>
</div>
<div class="q-gutter-sm justify-center q-pa-md">
<q-select v-model="histoire.wilayaselect" :options="histoire.wilaya" label="Wilaya"
:rules="[val => !!val || 'Obligatoire']"/>
</div>
<div class="q-gutter-sm justify-center q-pa-md">
<q-input
label="Veuillez nous raconter votre histoire"
hint="Histoire"
v-model="histoire.description"
type="textarea"
:rules="[val => !!val || 'Obligatoire']"
/>
</div>
<q-toggle v-model="histoire.accept" class="q-pb-md" label="Accépter de partager votre histoire en public" />

<div>
<q-btn type="submit"  :loading="loading" :disabled="loading"  push color="primary "  icon-right="send" label="Valider" >
       <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn>
    <q-btn @click="edit = false">Cancel</q-btn>
</div>
</q-form>
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
        <q-btn flat label="Supprimer" v-close-popup @click="deletee(gethissst.id)"  />
        </q-card-section>
    </q-card>
</q-dialog>
<div class="tag-share clearfix">
    <div class="tag">
        <ul>
        </ul>
    </div>
    <div class="share">
        <ul>
            <li><router-link to="#"><i class="ti-facebook"></i></router-link></li>
            <li><router-link to="#"><i class="ti-twitter-alt"></i></router-link></li>
            <li><router-link to="#"><i class="ti-instagram"></i></router-link></li>
        </ul>
    </div>
</div>
</div>

          <comments :getcommentssss="getcommentssss"/>

</div>
                    <div class="col col-md-4">
                        <div class="wpo-blog-sidebar">
                            <searchc/>
                            <histoirerecent/>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-blog-single-section -->
</body>

</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import searchc from './components/search'
import histoirerecent from './components/histoirerecent'
import comments from './components/comments'
export default {
  data () {
    return {
      loading: false,
      loading2: false,
      counts: '',
      model3: 1,
      edit: false,
      bar2: false,
      histoire: {
        id: '',
        nom: '',
        sujet: '',
        description: '',
        wilayaselect: null,
        wilaya: [
          'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi-Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saida', 'Skikda', 'Sidi-Bel-Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El-Bayadh', 'Illizi', 'Bordj-Bou-Arreridj', 'Boumerdès', 'El-Tarf', 'Tindouf', 'Tissemsilt', 'El-Oued', 'Khenchela', 'Souk-Ahras', 'Tipaza', 'Mila', 'Aïn-Defla', 'Naâma', 'Aïn-Témouchent', 'Ghardaia', 'Relizane'
        ],
        typeselect: null,
        type: [
          {
            label: 'Don/Besoin du médicaments',
            value: 'medics'
          },
          {
            label: 'Don/Besoin du matériels',
            value: 'materials'
          },
          {
            label: 'Don/Besoin du sang',
            value: 'blood'
          },
          {
            label: "Don/Besoin d'argent",
            value: 'money'
          },
          {
            label: 'Don/Besoin de repas',
            value: 'food'
          }
        ],
        accept: false
      }
    }
  },
  components: {
    searchc,
    histoirerecent,
    comments

  },
  methods: {
    ...mapActions('general', ['getonehistoire', 'deletehistoires', 'updateHistoire']),
    ...mapActions('comments', ['getcommentss', 'addcomment']),
    ...mapGetters('general', ['gethistoires']),
    ...mapGetters('comments', ['getcomments']),
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    deletee (id) {
      this.deletehistoires(id)
      this.$q.notify({
        progress: true,
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        position: 'top-right',
        message: ' Supprimé'
      })
      this.$router.push({ name: 'dashboard' })
    },
    fill () {
      this.edit = true
      this.histoire.id = this.gethisto[0].id
      this.histoire.nom = this.gethisto[0].nom
      this.histoire.sujet = this.gethisto[0].sujet
      this.histoire.description = this.gethisto[0].description
      this.histoire.typeselect = this.gethisto[0].type
      this.histoire.wilayaselect = this.gethisto[0].wilaya
    },
    onSubmit () {
      this.loading = true
      // alert(this.id + this.nomm + this.typee + this.rhesuss + this.wilayaa + this.phonee + this.genderr + this.descriptionn)
      if (this.histoire.accept === false) {
        this.$q.notify({
          progress: true,
          color: 'red-4',
          textColor: 'white',
          icon: 'warning',
          message: ' Veuillez accepter'
        })
        this.loading = false
      } else {
        this.edit = false
        this.updateHistoire({
          id: this.histoire.id,
          nom: this.histoire.nom,
          sujet: this.histoire.sujet,
          description: this.histoire.description,
          type: this.histoire.typeselect,
          wilaya: this.histoire.wilayaselect
        })
          .then(response => {
            this.loading = false
            this.$q.notify({
              progress: true,
              color: 'green-4',
              textColor: 'white',
              icon: 'done',
              position: 'top-right',
              message: ' Modifié'
            })
          })
      }
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
    },
    showLoading () {
      this.$q.loading.show({
        message: "<b>Chargement des histoires partagées </b>.<br/><span class='text-green'>Veuillez patienter...</span>"
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
  watch: {
    // whenever question changes, this function will run
    model3: function () {
      if (this.model3 === 1) {
        this.like(this.gethisto[0].id)
      } else if (this.model3 === 0) {
        this.unlike(this.gethisto[0].id)
      }
    }
  },
  computed: {
    gethisto () {
      return this.gethistoires()
    },
    getcommentssss () {
      return this.getcomments()
    },
    getuserinfo () {
      return this.getuser()
    },
    ifloggedIn () {
      return this.loggedIn()
    }
  },
  created () {
    this.getonehistoire(this.$route.params.id)
    this.count(this.$route.params.id)
    this.getcommentss(this.$route.params.id)
    this.checkifliked(this.$route.params.id)
    this.showLoading()
  }
}
</script>

<style lang="scss" scoped>

</style>
