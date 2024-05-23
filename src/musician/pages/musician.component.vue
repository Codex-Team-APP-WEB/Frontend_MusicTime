<script>
import { MusicianApiService } from "../../profiles/services/musician-api.service.js";
export default {
  name: "musician",
  components: {},
  data() {
    return {
      musician: null,
      musicianService: new MusicianApiService()
    };
  },

  mounted() {
    const musicianId = this.$route.params.id;
    this.musicianService.getById(musicianId).then(response => {
      this.musician = response.data;
    }).catch(e => {
      console.error(e);
    });
  }
};
</script>

<template>
  <div>
    <div v-if="musician">
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
        </template>
      </pv-card>
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