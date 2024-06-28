<script>
import {useRouter} from "vue-router";

export default {
  name: "app-menu",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  data() {
    return {
      searchQuery: '',
      items: [
        {
          separator: true
        },
        {
          label: 'Filter',
          items: [
            {
              label: 'Gender',
              icon: 'pi pi-globe',
            },
            {
              label: 'Author',
              icon: 'pi pi-users',
            },
            {
              label: 'Good Score',
              icon: 'pi pi-crown',
            },
          ]
        },
        {
          label: 'Profile',
          items: [
            {
              label: 'SettingsCos',
              icon: 'pi pi-cog',
              command: () => this.handleSettingsClick()
            },
            {
              label: 'SettingsMus',
              icon: 'pi pi-cog',
              command: () => this.handleSettingsClickMu()
            },
            {
              label: 'SettingsEnt',
              icon: 'pi pi-cog',
              command: () => this.handleSettingsClickEnt()
            },
            {
              label: 'Logout',
              icon: 'pi pi-sign-out',
            }
          ]
        },
        {
          separator: true
        }
      ],
      filteredItems: [],
    };
  },
  watch: {
    searchQuery(newVal) {
      this.performSearch(newVal);
    }
  },
  methods: {
    performSearch(query) {
      this.filteredItems = this.items.filter(item => item.label.includes(query));
    },
    handleSettingsClick() {
      this.router.push({ name: 'customer-edit-profile' });
    },
    handleSettingsClickMu() {
      this.router.push({ name: 'music-edit-profile' });
    },
    handleSettingsClickEnt() {
      this.router.push({ name: 'enterprise-edit-profile' });
    },
  },
  created() {
    this.filteredItems = this.items;
  }
};
</script>

<template>

  <div class="card flex justify-content-left">
    <pv-menu :model="items" class="w-full md:w-15rem">
      <template #start>
                <span class="inline-flex align-items-center gap-1 px-2 py-2">
                    <pv-image src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716477202/MusicTime-Logo_nihbnp.jpg" alt="Image" width="45" />
                    <span class="font-medium text-xl font-semibold">Music<span class="text-primary">Time</span></span>
                </span>
      </template>
      <template #submenuheader="{ item }">
        <span class="text-primary font-bold">{{ item.label }}</span>
      </template>
      <template #end>
        <pv-button v-ripple class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
          <pv-avatar image="https://res.cloudinary.com/djia8bsvr/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1714744341/eddy_herrera_h309en.jpg" class="mr-2" shape="circle" />
          <span class="inline-flex flex-column">
                        <span class="font-bold">Jeff Camizan</span>
                        <span class="text-sm">Musician</span>
                    </span>
        </pv-button>
      </template>
    </pv-menu>
  </div>
</template>

<style scoped>

</style>