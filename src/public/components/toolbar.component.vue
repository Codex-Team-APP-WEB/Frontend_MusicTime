<script>
export default {
  name: "toolbar",
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home'},
        { label: 'About', to: '/about'}


      ]
    }
}
}
</script>

<template>
  <div class="toolbar">
  <pv-toolbar>
    <template #start>
      <pv-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />

    </template>
    <template #center>

    </template>

    <template #end>
      <div>

        <router-link to="/home">
          <pv-button label="Home" plain text />
        </router-link>

        <router-link to="/musician">
          <pv-button label="Musician" plain text />
        </router-link>


        <pv-button label="Contact" plain text />

        <router-link to="/about">
          <pv-button label="About us" plain text />
        </router-link>

        <router-link to="/subscription">
          <pv-button label="Subscription" plain text />
        </router-link>



        <pv-button label="Support" plain text />
      </div>

      <div class="flex align-items-center gap-2">
        <pv-button class="button-margin" label="Login" severity="contrast" size="small" />
      </div>

      <div class="flex align-items-center gap-2">
        <pv-button class="button-margin" label="Sign up" severity="contrast" size="small" />
      </div>
    </template>
  </pv-toolbar>
  </div>
</template>

<style scoped>

.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

}

.button-margin {
  margin-right: 10px; /* Ajusta este valor según tus necesidades */
}

</style>