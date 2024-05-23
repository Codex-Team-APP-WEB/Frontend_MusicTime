<script>
import { MusicianApiService } from "../services/musician-api.service.js";
export default {
  components: {},
  data() {
    return {
      value: {}, // Inicializa value como un objeto vacío
      musician: [],
      musicianService: new MusicianApiService()
    };
  },

  mounted() {
    this.musicianService.getAll().then(response => {
      this.musician = response.data;
      this.musician.forEach(musician => {
        this.value[musician.id] = 0; // Asigna un valor inicial a cada músico en el objeto value
      });
    }).catch(e => {
      console.error(e);
    });
  }
};
</script>

<template>

  <div>
    <div v-if="musician.length > 0">
      <div v-for="musician in musician" :key="musician.id">
        <pv-card style="margin-bottom: 20px;">
          <template #header>
            <div class="template-header">
            <img :src="musician.image" alt="musician.name" style="width: 60%; height: 400px; object-fit: cover;" />
            </div>
          </template>
          <template #title>
            <span><strong>Name:</strong> {{ musician.name }}</span>
          </template>
          <template #content>
            <p><strong>Description:</strong> {{ musician.description }}</p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <router-link :to="`/musician/${musician.id}`">
                <pv-button label="View profile" plain text />
              </router-link>
            <div class = "rating">
              <pv-rating v-model="value[musician.id]" /> <!-- Utiliza value[musician.id] como el modelo para pv-rating -->
            </div>
              </div>
          </template>
        </pv-card>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>

</template>

<style scoped>
.rating {
  display: flex;
  align-items: center;
}

.template-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
}
</style>