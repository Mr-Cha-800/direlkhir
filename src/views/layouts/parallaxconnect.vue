<template>
  <div class="container">
    <q-parallax  :height="200" :speed="1.2">
      <template v-slot:media>
        <img src="../../images/carousel1.jpg">
      </template>

      <h1 class="text-white">Se Connecter !</h1>
      <h5 class="text-white">Trouver des gens à aider sur tous le térritoire Algérien</h5>
    </q-parallax>
  </div>
</template>
<style lang="scss" scoped>
h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    color: #212121;
    font-weight: 700;
}
</style>
