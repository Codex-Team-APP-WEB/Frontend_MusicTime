<script>
import { CustomerApiService } from "../services/customer-api.service.js";

export default {
  name: "customer-edit-profile",
  data() {
    return {
      customer: {
        id: '1',
        firstName: '',
        lastName: '',
        street: '',
        number: '',
        city: '',
        postalCode: '',
        country: '',
      }
    }
  },
  methods: {
    async submitForm() {
      const apiService = new CustomerApiService();
      try {
        const response = await apiService.update(this.customer.id, this.customer);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <p>First Name:</p>
      <pv-input-text id="name" v-model="customer.firstName" type="text" />

      <p>Last Name:</p>
      <pv-input-text id="surname" v-model="customer.lastName" type="text" />

      <p>Street:</p>
      <pv-input-text id="phone" v-model="customer.street" type="text" />

      <p>Number:</p>
      <pv-input-text id="dni" v-model="customer.number" type="text" />

      <p>City:</p>
      <pv-input-text id="email" v-model="customer.city" type="text" />

      <p>Postal Code:</p>
      <pv-input-text id="password" v-model="customer.postalCode" type="text" />

      <p>Country:</p>
      <pv-input-text id="password" v-model="customer.country" type="text" />

      <pv-button label="Submit" @click="submitForm"/>
    </form>
  </div>
</template>

<style scoped>

</style>