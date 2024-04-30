<script>
import Toolbar from "./public/components/toolbar.component.vue";
import Footer from "./public/components/footer.component.vue";
import Home from "./public/pages/home.component.vue";

export default {
  name: "app",
  components: { Toolbar, Footer, Home },
}
</script>

<template>

  <Toolbar />
  <Home />
  <router-view />
</template>

<style scoped>

</style>
