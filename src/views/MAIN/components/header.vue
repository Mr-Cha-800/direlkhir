<template>
<div>
  <header id="header" class="wpo-site-header wpo-header-style-3">
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col col-md-6 col-sm-7 col-12">
                            <div class="contact-intro">
                                <ul>
                                    <li><i class="fi flaticon-envelope"></i> contact@direlkhir.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-md-6 col-sm-5 col-12">
                            <div class="contact-info">
                                <ul>
                                    <li v-if="ifloggedIn"><router-link to="/dashboard">{{getuserinfo.name}} | Dashboard</router-link></li>
                                    <li v-if="!ifloggedIn" ><router-link to="/signin">Se connecter</router-link></li>
                                    <li v-if="!ifloggedIn"><router-link to="/signup">S'inscrire</router-link></li>
                                    <li v-if="ifloggedIn"><router-link to="/logout">Log Out</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end topbar -->
            <nav class="navigation navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" @click="drawer = !drawer" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <router-link class="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="logo"></router-link>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
                        <button class="close-navbar"><i class="ti-close"></i></button>
                        <ul class="nav navbar-nav">
                            <li><router-link to="/">Accueil</router-link></li>
                            <li><router-link to="/about">A propos</router-link></li>
                            <li class="menu-item-has-children">
                                <a href="#">Annonces</a>
                                <ul class="sub-menu">
                                    <li><router-link to="/alertes">Alérte de besoin</router-link></li>
                                    <li><router-link to="/aides">Annonce d'aide</router-link></li>
                                </ul>
                            </li>
                            <li><router-link to="/histoires">Histoire</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </div><!-- end of nav-collapse -->
                    <div class="cart-search-contact">
                        <div class="header-search-form-wrapper">
                            <button class="search-toggle-btn"><i class="fi flaticon-magnifying-glass"></i></button>
                            <div class="header-search-form">
                                <form>
                                    <div>
                                        <input type="text" class="form-control" placeholder="Search here...">
                                        <button type="submit"><i class="fi flaticon-magnifying-glass"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><!-- end of container -->
                {{getuserinfo}}
            </nav>
        </header>
          <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        class="displayy"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list >

            <q-item  to="/" clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Accueil
              </q-item-section>
            </q-item>

            <q-item to="/about"  clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>
                A propos
              </q-item-section>
            </q-item>
            <q-item  to="/alertes" clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="warning" />
              </q-item-section>
              <q-item-section>
                Alértes de besoin
              </q-item-section>
            </q-item>
            <q-item  to="/aides" clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="announcement" />
              </q-item-section>
              <q-item-section>
                Annonces d'aide
              </q-item-section>
            </q-item>
            <q-item  to="/histoires" clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="history_edu" />
              </q-item-section>
              <q-item-section>
                Histoire
              </q-item-section>
            </q-item>
            <q-item  to="/contact" clickable :active="label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon name="contact_mail" />
              </q-item-section>
              <q-item-section>
                Contact
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    ...mapGetters('auth', ['loggedIn', 'getuser']),
    ...mapActions('auth', ['setuser'])
  },
  computed: {
    ifloggedIn () {
      return this.loggedIn()
    },
    getuserinfo () {
      return this.getuser()
    }
  },
  created () {
    this.setuser()
  }
}
</script>

<style lang="scss" scoped>
    @import url("../../../../public/assets/css/bootstrap.min.css");
    @import url("../../../../public/assets/css/themify-icons.css");
    @import url("../../../../public/assets/css/font-awesome.min.css");
    @import url("../../../../public/assets/css/flaticon.css");
    @import url("../../../../public/assets/css/animate.css");
    @import url("../../../../public/assets/css/slick.css");
    @import url("../../../../public/assets/css/slick-theme.css");
    @import url("../../../../public/assets/css/swiper.min.css");
    @import url("../../../../public/assets/css/owl.transitions.css");
    @import url("../../../../public/assets/css/jquery.fancybox.css");
    @import url("../../../../public/assets/css/odometer-theme-default.css");
    @import url("../../../../public/assets/css/nice-select.css");
    @import url("../../../../public/assets/css/style.css");

    @media screen and (min-width: 992px) {
    .displayy{
      display: none;
      }
}
</style>
