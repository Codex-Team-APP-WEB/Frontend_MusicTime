<script>
export default {
  name: "app-menu",
  data() {
    return {
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
            {
              label: 'Search',
              icon: 'pi pi-search',
            }
          ]
        },
        {
          label: 'Profile',
          items: [
            {
              label: 'Settings',
              icon: 'pi pi-cog',
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
      ]
    };
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
      <template #item="{ item, props }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <pv-badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        </a>
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