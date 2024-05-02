<script>
import http from '../services/http-common';

const defaultStyle = { width: '450px'};

export default {
  name: "create-and-edit",
  props: { entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default' },
  methods: {
    onCancel() {
      this.$emit('canceled');
    },
    async onSave() {
      try {
        if (this.edit) {
          // Update existing entity
          await http.put(`/${this.entityName}/${this.entity.id}`, this.entity);
        } else {
          // Create new entity
          console.log('status')
          console.log(this.entity.status)
          await http.post(`/${this.entityName}`, this.entity);
        }
        this.$emit('saved', this.entity);
      } catch (error) {
        console.error('Error saving entity:', error);
      }
    },
    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} ${this.entityName}`;
    },
    getSubmitLabel() {
      return this.edit ? 'Update' : 'Create';
    },
    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px'} : dialogStyle;
      dialogStyle = this.size === 'large' ? { width: '900px'} : dialogStyle;
      return dialogStyle;
    }
  }
}
</script>

<template>
  <!-- Create / Update Dialog -->
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="p-fluid" :header="entityName">
    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSave"/>
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times" @click="onCancel"/>
      </div>
    </template>
  </pv-dialog>
</template>
