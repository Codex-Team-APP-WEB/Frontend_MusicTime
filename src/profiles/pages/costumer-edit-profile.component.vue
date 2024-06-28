<script>
import { CustomerApiService } from "../services/customer-api.service.js";
export default {
  name: "costumer-edit-profile",
  components: {},
  data() {
    return {
      value: {},
      customer: [],
      customerService: new CustomerApiService()
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes hacer una petición a tu API para actualizar el perfil
      console.log(this.profile);
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <p>Nombre:</p>
      <pv-input-text id="name" v-model="profile.name" type="text" />

      <p>Apellido:</p>
      <pv-input-text id="surname" v-model="profile.surname" type="text" />

      <p>Teléfono:</p>
      <pv-input-text id="phone" v-model="profile.phone" type="text" />

      <p>DNI:</p>
      <pv-input-text id="dni" v-model="profile.dni" type="text" />

      <p>Email:</p>
      <pv-input-text id="email" v-model="profile.email" type="email" />

      <p>Contraseña:</p>
      <pv-password id="password" v-model="profile.password" />

      <pv-button label="Submit" />
    </form>
  </div>
</template>

<style scoped>

</style>