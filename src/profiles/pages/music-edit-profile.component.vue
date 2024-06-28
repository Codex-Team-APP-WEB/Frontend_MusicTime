<script>
import { MusicianApiService } from '../services/musician-api.service.js';

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
    <label>
      First Name:
      <input type="text" v-model="musician.firstName">
    </label>
    <label>
      Last Name:
      <input type="text" v-model="musician.lastName">
    </label>
    <label>
      Description:
      <textarea v-model="musician.description"></textarea>
    </label>
    <label>
      Image URL:
      <input type="text" v-model="musician.image">
    </label>
    <label>
      Group Musician:
      <input type="text" v-model="musician.groupMusician">
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
/* Tus estilos aquí */
</style>