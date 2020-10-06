<template>
<div class="backggg">
  <paralla/>
  <div  v-if="type === 1">
   <h1>{{type}}</h1>
   <h1>{{id}}</h1>
<blood/>
</div>
  <div  v-else-if="type === 2">
<food/>
</div>
  <div v-else-if="type === 3">
<material/>
</div>
  <div v-else-if="type === 4">
<medic/>
</div>
  <div  v-else-if="type === 5">
<money/>
</div>

  <paralla/>
</div>
</template>

<script>
import paralla from '../layouts/parallaxshow'
import blood from './showhelp/blood'
import food from './showhelp/food'
import material from './showhelp/material'
import medic from './showhelp/medic'
import money from './showhelp/money'
export default {
  data () {
    return {
      type: ''
    }
  },
  components: {
    paralla,
    blood,
    food,
    material,
    medic,
    money
  },
  created () {
    this.type = this.$route.params.type
    this.id = this.$route.params.id
  }
}
</script>
<style lang="sass" scoped>

.backg
  background-color: #E9EBEE;
.my-card
  margin: auto
  margin-top: 50px
  margin-bottom: 50px
  width: 100%
  max-width: 500px

.backggg
  background-color: #E9EBEE;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 580px)
    margin: auto
    margin-top: 20px
    width: 100%
    max-width: 350px
.backggg
  background-color: #E9EBEE;
  width: 100%;
  min-height: 100vh;
  </style>
