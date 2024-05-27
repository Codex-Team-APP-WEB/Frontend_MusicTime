<script>
export default {
  name: "costumer-edit-profile",
  components: {},
  data() {
    return {
      profile: {
        id: 1,
        name: "Pedro",
        surname: "Perez Perez",
        phone: "987654321",
        dni: "12345678",
        email: "prueba12345@gmail.com",
        password: "123456",
        plan: "Basic",
        planId: "0"
      }
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