<script>
export default {
  name: "SubscriptionManagement",
  data() {
    return {
      imagePath1: 'https://res.cloudinary.com/drkelnilg/image/upload/v1714552043/tlv0hxvu9ni2vuncz2jy.jpg',
      imagePath2: 'https://res.cloudinary.com/drkelnilg/image/upload/v1714551882/melavsafwien50g2svpw.jpg',
      buttonText1: 'Subscribe',
      buttonText2: 'Subscribe'
    }
  },
  methods: {
    activateSubscription1() {
      if (this.buttonText1 === 'Subscribe') {
        console.log('Subscription 1 activated');
        this.buttonText1 = 'activated';
      } else {
        console.log('Subscription 1 deactivated');
        this.buttonText1 = 'Subscribe';
      }
    },
    activateSubscription2() {
      if (this.buttonText2 === 'Subscribe') {
        console.log('Subscription 2 activated');
        this.buttonText2 = 'activated';
      } else {
        console.log('Subscription 2 deactivated');
        this.buttonText2 = 'Subscribe';
      }
    }
  }
}
</script>
<template>
  <div class="container text-center">
    <h1>Plans</h1>
    <div class="p-card custom-border mx-auto">
      <div class="p-card-body">
        <img class="card-image" :src="imagePath1" alt="subscription plan 1">
        <div class="text-container">
          <p>MusicBusiness</p>
          <ul class="description-list">
            <li>Promote your presentations</li>
            <li>Contract management</li>
            <li>International exhibition</li>
            <li>Monetization Potential</li>
          </ul>
        </div>
        <div class="button-container">
          <pv-button @click="activateSubscription1">{{ buttonText1 }}</pv-button>
        </div>
      </div>
    </div>
    <div class="p-card custom-border mx-auto">
      <div class="p-card-body">
        <img class="card-image" :src="imagePath2" alt="subscription plan 2">
        <div class="text-container">
          <p>Enterprise</p>
          <ul class="description-list">
            <li>Monetization Potential</li>
            <li>Largest choice catalog</li>
            <li>Quick contracts</li>
            <li>Full features</li>
          </ul>
        </div>
        <div class="button-container">
          <pv-button @click="activateSubscription2">{{ buttonText2 }}</pv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}

.p-card {
  border-radius: 0;
  width: calc(50% - 80px);
  margin-right: 10px;
  margin-bottom: 20px;
  border: 1px solid #000;
}

.text-container {
  text-align: left;
  color: blue;
  font-size: 25px;
  font-weight: bold;
}

.description-list {
  color: black;
  font-weight: normal;
  font-size: 20px;
}

.p-card-body {
  padding: 20px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-container {
  text-align: right;
}
</style>
