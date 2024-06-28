<script>
import { MusicianApiService } from "../../profiles/services/musician-api.service.js";
import FeedbackProfile from "../../feedback/components/feedback-profile.component.vue";

export default {
  name: "musician",
  components: {
    FeedbackProfile
  },
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
            <img :src="musician.image" alt="musician.name" style="width: 60%; height: 400px; object-fit: cover;"/>
          </div>
        </template>
        <template #title>
          <span><strong>Name:</strong> {{ musician.fullName }}</span>
        </template>
        <template #content>
          <p><strong>Description:</strong> {{ musician.description }}</p>
        </template>
        <template #footer>
          <router-link :to="`/contract/${musician.id}`">
            <pv-button label="Hire" plain text/>
          </router-link>
        </template>
      </pv-card>
      <FeedbackProfile/>
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