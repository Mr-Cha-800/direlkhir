<template>
<body>
        <!-- .wpo-breadcumb-area start -->
        <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>à propos</h2>
                            <ul>
                                <li><a href="index.html">Accueil</a></li>
                                <li><span>à propos</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->
        <!-- wpo-about-video-area end -->
        <!-- wpo-mission-area start -->
        <!-- wpo-mission-area end -->
        <missionc/>
        <!-- wpo-about-area start -->
        <div class="wpo-about-area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 colsm-12">
                        <div class="wpo-about-text">
                            <div class="wpo-section-title">
                                <span>Qui sommes nous ?</span>
                                <h2>Cette plateforme est dedié au gens qui ont besoin d'aide</h2>
                            </div>
                            <p>une plate-forme à but non lucratif pour aider les gens sur tout le territoire algérien afin d'atteindre d'autres personnes pour obtenir de l'aide et aussi aider les autres qui sont dans le besoin</p>
                            <p>nous vous invitons à rejoindre cette communauté pour encourager l'esprit d'aide et partager vos expériences sur le bénévolat et l'aide ou même vos histoires lorsque d'autres vous ont aidé lorsque vous étiez dans le besoin</p>
                            <div class="btns">
                                <router-link to="/signup" tag="button" tabindex="0" class="theme-btn">S'inscrire</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 colsm-12">
                        <div class="wpo-about-img-3">
                            <img src="assets/images/about3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- wpo-about-area end -->
</body>
</template>

<script>
import missionc from './components/mission'
export default {
  components: {
    missionc
  }
}
</script>

<style lang="scss" scoped>

</style>
