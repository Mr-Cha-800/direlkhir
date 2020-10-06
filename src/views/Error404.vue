<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="../images/404.jpg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      Sorry, nothing here...<strong>(404)</strong>
    </p>
    <q-btn
      color="primary"
      style="width:200px;"
      to="/"
      label="Go back"
    />
  </div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>

<style scoped>
.backg{
  background-color: #E9EBEE;

}
</style>
