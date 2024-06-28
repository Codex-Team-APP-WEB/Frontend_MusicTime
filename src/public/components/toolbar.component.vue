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
        <pv-avatar image="https://res.cloudinary.com/djia8bsvr/image/upload/v1719565156/Logo_Music-Time_tbakdm.png"
                   style="width: 155px; height: 52px"/>
      </template>
      <template #center>
      </template>
      <template #end>
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
        <authentication-section/>
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