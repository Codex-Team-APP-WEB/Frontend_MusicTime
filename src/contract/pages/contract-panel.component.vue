<script>
import { ContractApiService } from '../services/contract-api.service.js';

export default {
  name: 'contract-panel',
  data() {
    return {
      contracts: [],
      search: '',
      columns: [
        {field: 'id', header: 'ID'},
        {field: 'name', header: 'Name'},
        {field: 'status', header: 'Status'},
        {field: 'date', header: 'Date'},
      ],
      contractService: new ContractApiService()
    };
  },
  computed: {
    filteredContracts() {
      return this.contracts.filter(contract => {
        return contract.name.includes(this.search);
      });
    }
  },
  methods: {
    fetchData() {
      this.contractService.getAll()
          .then(response => {
            this.contracts = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    viewContract(contract) {
      console.log(contract);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>

  <div>
    <h2 class="title">Contracts panel</h2>
    <div class="search-container">
      <input class="search-bar" type="text" v-model="search" placeholder="Search..." />
    </div>
    <pv-data-table :value="filteredContracts">
      <pv-column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header"></pv-column>
      <pv-column header="">
        <template #body="slotProps">
          <router-link :to="`/contract-view/${contracts.id}`">
          <pv-button label="View" @click="viewContract(slotProps.data)"></pv-button>
          </router-link>
        </template>
      </pv-column>
    </pv-data-table>
  </div>

</template>

<style scoped>
.search-bar {
  width: 500px;
  height: 40px;
  margin-bottom: 20px;

}
.search-container {
  display: flex;
  justify-content: center;
}
</style>