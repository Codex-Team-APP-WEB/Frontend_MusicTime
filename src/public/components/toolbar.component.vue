<script>
import AuthenticationSection from "../../IAM/components/authentication-section.component.vue";

export default {
  name: "toolbar",
  components: {AuthenticationSection},
  data() {
    return {
      drawer: false,
      items: [
        {label: 'Home', to: '/home'},
        {label: 'About us', to: '/about'}
      ]
    }
  }
}
</script>

<template>
  <div class="toolbar">
    <pv-toolbar>
      <template #start>
        <pv-avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                   style="width: 32px; height: 32px"/>
      </template>
      <template #center>
      </template>
      <template #end>
        <authentication-section/>
        <div>
          <router-link to="/home">
            <pv-button label="Home" plain text/>
          </router-link>
          <router-link to="/Management">
            <pv-button label="Management" plain text/>
          </router-link>
          <router-link to="/about">
            <pv-button label="About us" plain text/>
          </router-link>
          <router-link to="/subscription">
            <pv-button label="Subscription" plain text/>
          </router-link>
          <router-link to="/contract-panel">
            <pv-button label="Contract Panel" plain text/>
          </router-link>
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


</style>