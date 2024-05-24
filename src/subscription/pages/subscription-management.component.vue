<template>
  <div class="container">
    <pv-card v-for="(plan, index) in plans" :key="index" style="width: 25rem; overflow: hidden;margin: 20px">
      <template #header>
        <img :alt="'user header ' + index" :src="plan.image" style="width: 100%; height: 200px; object-fit: cover;" />
      </template>
      <template #title>{{ 'Subscription - ' + plan.name }}</template>
      <template #subtitle>{{ plan.message }}</template>
      <template #content>
        <ul>
          <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex">{{ feature }}</li>
        </ul>
      </template>
      <template #footer>
        <div class="footer-content">
          <div class="price-info">
            <p style="font-weight: bold; font-size: 2.5em; margin-bottom: 0;">{{ '$' + plan.price }}</p>
            <p style="margin-top: 0; color: gray;">{{ plan.price_per_month }}</p>
          </div>
          <div class="button-container">
            <pv-button @click="goToPaymentGateway">{{ buttonText(index) }}</pv-button>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "SubscriptionManagement",
  data() {
    return {
      plans: [],
      buttonTexts: []
    }
  },
  methods: {
    goToPaymentGateway() {
      this.$router.push('/payment');
    },
    buttonText(index) {
      return 'Subscribe';
    }
  },
  mounted() {
    fetch(import.meta.env.VITE_API_BASE_URL + '/plans')
        .then(response => response.json())
        .then(data => {
          this.plans = data;
          this.buttonTexts = new Array(data.length).fill('Subscribe');
        })
        .catch(error => {
          console.error(error);
        });
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.button-container {
  text-align: right;
}

</style>