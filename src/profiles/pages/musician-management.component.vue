<script>
import DataManager from "../../shared/components/data-manager.component.vue";
import MusicianItemCreateAndEditDialog from "../components/musician-item-create-and-edit-dialog.component.vue";
import {Musician} from "../models/musician.entity.js";
import {MusicianApiService} from "../services/musician-api.service.js";

export default {
  name: "musician-management",
  components: {MusicianItemCreateAndEditDialog, DataManager},
  data() {
    return {
      title: { singular: 'Musician', plural: 'Musicians' },
      musicians: [],
      musician: {},
      selectedMusicians: [],
      statuses: [{label: 'Available', value: 'available'}, {label: 'Unavailable', value: 'unavailable'}],
      musicianService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false
    }
  },
  methods: {

    //#region Helper Methods

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    // Get the severity color according to status
    getSeverity(status) {
      switch (status) {
        case 'Available': return 'success';
        case 'Unavailable': return 'info';
        default:  return null;
      }
    },

    findIndexById(id) {
      return this.musicians.findIndex((musician) => musician.id === id);
    },

    //#endregion Helper Methods

    //#region Data Manager Event Handlers

    onNewItemEventHandler() {
      this.musician = {};
      this.submitted = false;
      this.isEdit = false;
      this.createAndEditDialogIsVisible = true;
    },

    onEditItemEventHandler(item) {
      this.musician = item;
      this.submitted = false;
      this.isEdit = true;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.musician = item;
      this.deleteMusician();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedMusicians = selectedItems;
      this.deleteSelectedMusicians();
    },

    //#endregion Data Manager Event Handlers

    //#region Musician Item Create and Edit Dialog Event Handlers

    onCanceledEventHandler() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.musician && this.musician.title && this.musician.title.trim()) {
        if (item.id) {
          this.updateMusician();
        } else {
          this.createMusician();
        }
      }
      this.createAndEditDialogIsVisible = false;
      this.isEdit = false;
    },

    //#endregion Musician Item Create and Edit Dialog Event Handlers

    //#region Data Actions

    // Create a new item

    createMusician() {
      this.musician.id = 0;
      this.musician = Musician.fromDisplayableMusician(this.musician);
      this.musicianService.create(this.musician)
          .then((response) => {
            this.musician = Musician.toDisplayableMusician(response.data);
            this.musicians.push(this.musician);
            this.notifySuccessfulAction("Musician created");
          });
    },

    // Update an existing item

    updateMusician() {
      this.musician = Musician.fromDisplayableMusician(this.musician);
      this.musicianService
          .update(this.musician.id, this.musician)
          .then((response) => {
            this.musicians[this.findIndexById(response.data.id)] =
                Musician.toDisplayableMusician(response.data);
            this.notifySuccessfulAction("Musician Updated");
          });
    },

    // Delete a item

    deleteMusician() {
      this.musicianService.delete(this.musician.id)
          .then(() => {
            this.musicians = this.musicians.filter((t) => t.id !== this.musician.id);
            this.musician = {};
            this.notifySuccessfulAction("Musician Deleted");
          });
    },

    // Delete selected musicians

    deleteSelectedMusicians() {
      this.selectedMusicians.forEach((musician) => {
        this.musicianService.delete(musician.id).then(() => {
          this.musicians = this.musicians.filter((t) => t.id !== this.musician.id);
        });
      });
      this.notifySuccessfulAction("Musician Deleted");
    }

    //#endregion Data Actions
  },
  created() {
    this.musicianService = new MusicianApiService();

    this.musicianService.getAll().then((response) => {
      console.log(response.data);
      let musicians = response.data;
      this.musicians = musicians.map((musician) => Musician.toDisplayableMusician(musician));
    });
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Musician Data Manager -->
    <data-manager
        :title=title
        v-bind:items="musicians"
        v-on:new-item="onNewItemEventHandler"
        v-on:edit-item="onEditItemEventHandler($event)"
        v-on:delete-item="onDeleteItemEventHandler($event)"
        v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)">
      <template #custom-columns>
        <pv-column :sortable="true" field="id"          header="Id"           style="min-width: 12rem"/>
        <pv-column :sortable="true" field="name"       header="Name"        style="min-width: 16rem"/>
        <pv-column :sortable="true" field="description" header="Description"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="status"      header="Status"       style="min-width: 16rem">
          <template #body="slotProps">
            <pv-tag :severity="getSeverity(slotProps.data.status)" :value="slotProps.data.status"/>
          </template>
        </pv-column>
      </template>
    </data-manager>
    <!-- Musician Item Create and Edit Dialog -->
    <musician-item-create-and-edit-dialog
        :statuses="statuses"
        :item="musician"
        :edit="isEdit"
        :visible="createAndEditDialogIsVisible"
        v-on:canceled="onCanceledEventHandler"
        v-on:saved="onSavedEventHandler($event)"/>

  </div>

</template>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 960px) {
  :deep(.p-toolbar) {
    flex-wrap: wrap;

  }
}

@media (min-width: 1024px) {
  .musicians {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
