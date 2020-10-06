<template>
<body>

    <parallax/>
        <!-- wpo-mission-area start -->
        <!-- wpo-mission-area end -->
        <missionc/>
        <!-- wpo-event-area start -->

        <recentneeds/>

        <!-- wpo-event-area end -->

        <!-- wpo-cta-area start -->

        <div v-if="!ifloggedIn" class="wpo-cta-area-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="wpo-cta-text">
                            <h2>Contribuer à aider les gens qui ont besoin</h2>
                            <p>En vous inscrivant sur la plateforme </p>
                            <div class="btns">
                                <router-link to="/signup" tag="button" class="theme-btn">S'inscrire</router-link>
                                <router-link to="/signin" tag="button" class="theme-btn-s2">S'identifier</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- wpo-cta-area end -->

        <!-- wpo-blog-area start -->

        <histoirerec/>
        <!-- wpo-blog-area end -->

    <!-- end of page-wrapper -->
</body>
</template>

<script>
import { mapGetters } from 'vuex'
import recentneeds from './MAIN/components/recentneeds'
import parallax from './layouts/parallaxmain'
import missionc from './MAIN/components/mission'
import histoirerec from './MAIN/components/histoirerec'
export default {
  components: {
    parallax,
    recentneeds,
    missionc,
    histoirerec
  },
  methods: {
    ...mapGetters('auth', ['loggedIn'])
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    }
  }
}
</script>

<style>

</style>
