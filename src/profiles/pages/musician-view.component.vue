<script>
import { MusicianApiService } from "../services/musician-api.service.js";
import AppMenu from "../../public/components/menu.component.vue";
export default {
  components: {AppMenu},
  props: ['term'],
  data() {
    return {
      value: {}, // Inicializa value como un objeto vacío
      musician: [],
      musicianService: new MusicianApiService()
    };
  },
  computed: {
    filteredMusicians() {
      if (!this.term) {
        return this.musician;
      }
      return this.musician.filter(musician => musician.name.includes(this.term));
    }
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
    <div v-if="filteredMusicians.length > 0">

      <div class="flex-container">
        <appMenu />
        <div class="card-container">
          <div v-for="musician in filteredMusicians" :key="musician.id">
            <pv-card style="margin-bottom: 20px;">
              <template #header>
                <div class="template-header">
                  <img :src="musician.image" alt="musician.name" style="width: 60%; height: 400px; object-fit: cover;" />
                </div>
              </template>
              <template #title>
                <span><strong>Name:</strong> {{ musician.fullName }}</span>
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
      </div>
    </div>
    <div v-else>
      <div class="center">
        <h2>No musicians found</h2>
      <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716827588/red-en-la-nube_nlt7ys.gif" alt="My Image" class = "logo" />
      </div>
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

.flex-container {
  display: flex;
  flex-direction: row;
}

.card-container {
  width: 100%;
  padding-left: 15px;
}
.logo {
  width: 100px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
}
</style>