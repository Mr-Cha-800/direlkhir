<template>
  <q-layout view="lHh Lpr lFf" >
    <headerc/>
    <qdrawar/>
    <q-page-container>
        <router-view />
    </q-page-container>
    <footerc/>
  </q-layout>
</template>

<script>
import headerc from './views/MAIN/components/header'
import qdrawar from './views/MAIN/components/qdrawar'
import footerc from './views/MAIN/components/footer'
export default {
  name: 'MainLayout',
  components: {
    headerc,
    qdrawar,
    footerc
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>
<style lang="scss">

    @import url("../public/assets/css/themify-icons.css");
    @import url("../public/assets/css/font-awesome.min.css");
    @import url("../public/assets/css/flaticon.css");
    @import url("../public/assets/css/animate.css");
    @import url("../public/assets/css/slick.css");
    @import url("../public/assets/css/slick-theme.css");
    @import url("../public/assets/css/swiper.min.css");
    @import url("../public/assets/css/owl.transitions.css");
    @import url("../public/assets/css/jquery.fancybox.css");
    @import url("../public/assets/css/odometer-theme-default.css");
    @import url("../public/assets/css/nice-select.css");
    @import url("../public/assets/css/style.css");
.menu-list .q-item{

  border-radius: 0 32px 32px 0
}
</style>
