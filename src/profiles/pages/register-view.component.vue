<script>

export default {
  name: "login-view.component",
  components: {},
  data() {
    return {
      active: 0,
      name: null,
      email: null,
      password: null,
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      option6: false,
      option7: false,
      option8: false,
      option9: false,
      option10: false
    }
  }
}
</script>

<template>
  <div class="card flex justify-content-center">
    <pv-stepper v-model:activeStep="active">
      <pv-stepper-panel>
        <template #header="{ index, clickCallback }">
          <pv-button class="bg-transparent border-none inline-flex flex-column gap-2" @click="clickCallback">
                        <span :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-user" />
                        </span>
          </pv-button>
        </template>
        <template #content="{ nextCallback }">
          <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
            <div class="text-center mt-3 mb-3 text-xl font-semibold">Create your account</div>
            <div class="field p-fluid">
              <pv-icon-field>
                <pv-input-icon>
                  <i class="pi pi-user" />
                </pv-input-icon>
                <pv-input-text id="input" v-model="name" type="text" placeholder="Name" />
              </pv-icon-field>
            </div>
            <div class="field p-fluid">
              <pv-icon-field>
                <pv-input-icon>
                  <i class="pi pi-envelope" />
                </pv-input-icon>
                <pv-input-text id="email" v-model="email" type="email" placeholder="Email" />
              </pv-icon-field>
            </div>
            <div class="field p-fluid">
              <pv-password v-model="password" toggleMask placeholder="Password" />
            </div>
          </div>
          <div class="flex pt-4 justify-content-end">
            <pv-button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
          </div>
        </template>
      </pv-stepper-panel>
      <pv-stepper-panel>
        <template #header="{ index, clickCallback }">
          <pv-button class="bg-transparent border-none inline-flex flex-column gap-2" @click="clickCallback">
                        <span :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-star" />
                        </span>
          </pv-button>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
            <div class="flex flex-wrap justify-content-center gap-3">
              <pv-toggle-button v-model="option1" onLabel="Nature" offLabel="Nature" />
              <pv-toggle-button v-model="option2" onLabel="Art" offLabel="Art" />
              <pv-toggle-button v-model="option3" onLabel="Music" offLabel="Music" />
              <pv-toggle-button v-model="option4" onLabel="Design" offLabel="Design" />
              <pv-toggle-button v-model="option5" onLabel="Photography" offLabel="Photography" />
              <pv-toggle-button v-model="option6" onLabel="Movies" offLabel="Movies" />
              <pv-toggle-button v-model="option7" onLabel="Sports" offLabel="Sports" />
              <pv-toggle-button v-model="option8" onLabel="Gaming" offLabel="Gaming" />
              <pv-toggle-button v-model="option9" onLabel="Traveling" offLabel="Traveling" />
              <pv-toggle-button v-model="option10" onLabel="Dancing" offLabel="Dancing" />
            </div>
          </div>
          <div class="flex pt-4 justify-content-between">
            <pv-button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
            <pv-button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
          </div>
        </template>
      </pv-stepper-panel>
      <pv-stepper-panel>
        <template #header="{ index, clickCallback }">
          <pv-button class="bg-transparent border-none inline-flex flex-column gap-2" @click="clickCallback">
                        <span :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-id-card" />
                        </span>
          </pv-button>
        </template>
        <template #content="{ prevCallback }">
          <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
            <div class="text-center mt-3 mb-3 text-xl font-semibold">Account created successfully</div>
            <div class="text-center">
              <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
            </div>
          </div>
          <div class="flex pt-4 justify-content-start">
            <pv-button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
          </div>
        </template>
      </pv-stepper-panel>
    </pv-stepper>
  </div>
</template>

<style scoped>

</style>