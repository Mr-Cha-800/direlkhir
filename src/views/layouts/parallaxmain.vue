<template>
  <div >
    <q-parallax  :height="400" :speed="1.2">
      <template v-slot:media>
        <img src="assets/images/slider/img-2.png">
      </template>

      <h1 class="text-white">Dir El Khir !</h1>
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
