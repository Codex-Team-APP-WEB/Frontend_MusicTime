<script>
export default {
  name: "SubscriptionManagement",
  data() {
    return {
      buttonText1: 'Subscribe',
      buttonText2: 'Subscribe'
    }
  },
  methods: {
    activateSubscription1() {
      if (this.buttonText1 === 'Subscribe') {
        console.log('Subscription 1 activated');
        this.buttonText1 = 'activated';
        this.$router.push('/payment'); // Navega a la página de pago
      } else {
        console.log('Subscription 1 deactivated');
        this.buttonText1 = 'Subscribe';
      }
    },
    activateSubscription2() {
      if (this.buttonText2 === 'Subscribe') {
        console.log('Subscription 2 activated');
        this.buttonText2 = 'Activated';
        this.$router.push('/payment'); // Navega a la página de pago
      } else {
        console.log('Subscription 2 deactivated');
        this.buttonText2 = 'Subscribe';
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <pv-card style="width: 25rem; overflow: hidden;margin: 20px">
      <template #header>
        <img alt="user header" src="https://res.cloudinary.com/drkelnilg/image/upload/v1714552043/tlv0hxvu9ni2vuncz2jy.jpg" />
      </template>
      <template #title>Subscription - MusicBusiness</template>
      <template #subtitle>Get the features now!!!!</template>
      <template #content>
        <ul>
          <li>Promote your presentations</li>
          <li>Contract management</li>
          <li>International exhibition</li>
          <li>Monetization Potential</li>
        </ul>
      </template>
      <template #footer>
        <div class="button-container">
          <pv-button @click="activateSubscription1">{{ buttonText1 }}</pv-button>
        </div>
      </template>
    </pv-card>

    <pv-card style="width: 25rem; overflow: hidden; margin: 20px">
      <template #header>
        <img alt="user header" src="https://res.cloudinary.com/drkelnilg/image/upload/v1714551882/melavsafwien50g2svpw.jpg" />
      </template>
      <template #title>Subscription - Enterprise</template>
      <template #subtitle>Get the features now!!!!</template>
      <template #content>
        <ul>
          <li> Greater number of contracts</li>
          <li> Largest choice catalog</li>
          <li>Quick contracts</li>
          <li>Full features</li>
        </ul>
      </template>
      <template #footer>
        <div class="button-container">
          <pv-button @click="activateSubscription2">{{ buttonText2 }}</pv-button>
        </div>
      </template>
    </pv-card>
  </div>
</template>

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