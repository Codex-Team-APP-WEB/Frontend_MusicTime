<script>
import { MusicianApiService } from '../../profiles/services/musician-api.service.js';

export default {
  name: "music-edit-profile",
  data() {
    return {
      musician: {
        firstName: '',
        lastName: '',
        description: '',
        image: '',
        groupMusician: ''
      }
    }
  },
  methods: {
    async submitForm() {
      const apiService = new MusicianApiService();
      try {
        const response = await apiService.create(this.musician);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <p>First Name:</p>
    <pv-input-text id="firstName" v-model="musician.firstName" type="text" />

    <p>Last Name:</p>
    <pv-input-text id="lastName" v-model="musician.lastName" type="text" />

    <p>Description:</p>
    <pv-input-text id="description" v-model="musician.description" type="text" />

    <p>Image URL:</p>
    <pv-input-text id="image" v-model="musician.image" type="text" />

    <p>Group Musician:</p>
    <pv-input-text id="groupMusician" v-model="musician.groupMusician" type="text" />

    <pv-button label="Submit" @click="submitForm" />
  </form>
</template>

<style scoped>
/* Tus estilos aquí */
</style>