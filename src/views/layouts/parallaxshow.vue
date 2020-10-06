<template>
  <div class="container">
    <q-parallax  :height="200" :speed="1.2">
      <template v-slot:media>
        <img src="../../images/sand.jpg">
      </template>

      <h1 class="text-white">Dir El Khir !</h1>
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
