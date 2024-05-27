<script>
export default {
  name: "page-not-found",
  methods: {
    goHome() {
      this.$router.push('/home');
    }
  }
}
</script>

<template>

  <div class="center">
    <p>Lo sentimos, la página '{{ $route.fullPath }}' no se encontró.</p>
    <pv-button @click="goHome">Volver a Inicio</pv-button>
  </div>

</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

}
</style>