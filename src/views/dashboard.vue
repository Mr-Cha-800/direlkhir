<template>

  <div>

        <q-tabs
          v-model="tab"
          horizental
          class="text-white bg-primary"
        >
          <q-tab name="Profile" icon="account_box">
            <q-tooltip anchor="top middle" content-class="bg-indigo" :offset="[10, 10]">
          Profile
        </q-tooltip>
        </q-tab>
          <q-tab name="alarms" icon="live_help">
            <q-tooltip anchor="top middle" content-class="bg-indigo" :offset="[10, 10]">
          Raconter mon histoire
        </q-tooltip>
          </q-tab>
          <q-tab name="movies" icon="settings">
            <q-tooltip anchor="top middle" content-class="bg-indigo" :offset="[10, 10]">
          Mes Alertes
        </q-tooltip>
          </q-tab>
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
        >
          <q-tab-panel name="Profile" class="backg">
            <div class="">
    <div class="row float-right q-pr-xl">
</div>

    <div class="row q-px-lg ">
      <div  class=" q-px-lg hi">
      <q-card class="q-pa-lg justify ">
         <img  style="height: 200px; max-width: 200px" src="../images/avatar.png" >
         <q-icon class="absolute all-pointer-events" size="32px" name="add_a_photo" color="white" style="top: 25px; left: 25px">
            <q-tooltip>
              changer image de profile
            </q-tooltip>
          </q-icon>
      </q-card>
</div>

      <div  class="justify">
        <profileinfo/>
</div>
      <div class="col ">
         <div class="q-pl-xl ">
  </div>
      </div>

    <create/>
    </div>

    <div class="row ">
      <tablee/>
    </div>
    <div class="row ">
    </div>
      </div>
      </q-tab-panel>

          <q-tab-panel name="alarms" class="backg">
            <storyform/>
           </q-tab-panel>

          <q-tab-panel name="movies" class="backg">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>

  </div>
</template>

<script>
import { QSpinnerHearts } from 'quasar'
import create from './components/create'
import profileinfo from './components/profileinfo'
import tablee from './components/tablealerts'
import storyform from './MAIN/components/storyform'
export default {
  components: {
    create,
    tablee,
    profileinfo,
    storyform
  },
  created () {
    this.$q.loading.show({
      message: 'Chargement, Veuillez patienter',
      spinnerColor: 'red',
      spinner: QSpinnerHearts
    })
    setTimeout(() => {
      this.$q.loading.hide()
    }, 4000)

    this.ifconfirmed()
  },
  computed: {
    getuserinfo () {
      return this.getuser()
    }
  },
  props: {
    dataSuccessMessage: {
      type: String
    }
  },
  methods: {
    ifconfirmed () {
      if (this.getuserinfo.confirmed === 0) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'clear',
          message: 'Profile non validé! veuillez vérifier votre email !'
        })
      }
    }
  },
  data () {
    return {
      tab: 'Profile',
      splitterModel: 20
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
.hi{
  display: none;
}
.hii{
  margin-left: auto;
  margin-right: auto;
}
.row > div.divv{
  padding: 1px 1.5px;
  }
}
.row > div.divv{
  padding: 10px 15px;
  }
.row + .row{
  margin-top: 1rem

}

.header-image{
height: 100%;
width:100%;
z-index: -1;
}
.backg{
  background-color: #E9EBEE;
  //background-image: url('../images/backg.png');
 // background-position: center;
//  background-repeat: no-repeat;
 // background-size: cover;
}
</style>
