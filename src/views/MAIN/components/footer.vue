<template>
   <div class="wpo-ne-footer">
            <!-- start wpo-news-letter-section -->
            <section class="wpo-news-letter-section">
                <div class="container">
                    <div class="row">
                        <div class="col col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div class="wpo-newsletter">
                                <h3>Abonnez vous pour recevoir de nouvel notifications</h3>
                                <div class="wpo-newsletter-form">
                                    <form>
                                        <div>
                                            <input type="text" placeholder="Veuillez taper votre email..." class="form-control">
                                            <button type="submit">S'abonner</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end container -->
            </section>
            <!-- end wpo-news-letter-section -->
            <!-- start wpo-site-footer -->
            <footer class="wpo-site-footer">
                <div class="wpo-upper-footer">
                    <div class="container">
                        <div class="">
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget about-widget">
                                    <div class="logo widget-title">
                                        <img src="/assets/images/logo-2.png" alt="blog">
                                    </div>
                                    <p>Notre but est de construire une société uni ! et votre contribuion aide à le faire </p>
                                    <ul>
                                        <li><a href="#"><i class="ti-facebook"></i></a></li>
                                        <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                                        <li><a href="#"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget link-widget">
                                    <div class="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><router-link to="/">Accueil</router-link></li>
                                        <li><router-link to="/about">A propos</router-link></li>
                                        <li><router-link to="/alertes">Alertes de besoin</router-link></li>
                                        <li><router-link to="/aides">Annonces de don</router-link></li>
                                        <li><router-link to="/histoires">Histoires et Expériences</router-link></li>
                                        <li><router-link to="/contact">Contact</router-link></li></ul>
                                </div>
                            </div>
                            <div class="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
                                <div class="widget market-widget wpo-service-link-widget">
                                    <div class="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <p>En cas de question ou plus d'informations</p>
                                    <div class="contact-ft">
                                        <ul>
                                            <li><i class="fi flaticon-envelope"></i>contact@direlkhir.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end container -->
                </div>
                <div class="wpo-lower-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <p class="copyright">&copy; 2020 Direlkhir. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- end wpo-site-footer -->
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    //@import url("../../../../public/assets/css/bootstrap.min.css");
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
</style>
