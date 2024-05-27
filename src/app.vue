<script>
import Toolbar from "./public/components/toolbar.component.vue";
import Footer from "./public/components/footer.component.vue";
import AppMenu from "./public/components/menu.component.vue";

export default {
  name: "app",
  components: { Toolbar, Footer, AppMenu },
}
</script>

<template>
  <Toolbar />
  <div class="margin">
    <div class="flex-container">
      <div class="card-container">
      <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin {
  margin-top: 80px;
}
.flex-container {
  display: flex;
  flex-direction: row;
}

.card-container {
  /* Ajusta estos valores según tus necesidades */

  width: 100%;
  padding-left: 15px;
}
</style>
