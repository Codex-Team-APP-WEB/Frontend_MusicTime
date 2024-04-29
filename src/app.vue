<script>
import Toolbar from "./public/components/toolbar.component.vue";
import Footer from "./public/components/footer.component.vue";
export default {
  name: "App",
  components: { Toolbar, Footer },
  data() {
    return {
      isLoading: true // Define la propiedad de datos isLoading
    };
  },
}
</script>

<template>
  <Toolbar />
</template>

<style scoped>

</style>
