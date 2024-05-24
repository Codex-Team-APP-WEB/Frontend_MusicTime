<template>
  <div>
    <h1>Payment Gateway</h1>
    <pv-card>
      <template #title>
        <div class="card-title">
          <h4>Credit or debit card</h4>
          <img src="https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png" alt="Visa" class="card-icon">
          <img src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign.png" alt="Mastercard" class="card-icon">
        </div>
      </template>
      <template #content>
        <form ref="paymentForm" @submit.prevent="submitPayment">
          <div class="p-field">
            <label for="name">Full name</label>
            <pv-input-text id="cardName" v-model="cardName" @input="validateCardName" required />
          </div>
          <div class="p-field">
            <label for="cardNumber">Card Number</label>
            <pv-input-text id="cardNumber" v-model="cardNumber" @input="validateCardNumber" required />
          </div>
          <div class="p-field flex-field">
            <div>
              <label for="expiryDate">Expiry Date</label>
              <pv-input-text id="expiryDate" v-model="expiryDate" @input="validateExpiryDate" required />
            </div>
            <div>
              <label for="cvv">CVV</label>
              <pv-input-text id="cvv" v-model="cvv" @input="validateCvv" required />
            </div>
          </div>
          <pv-button label="Pay" :disabled="!isFormValid" @click="checkFormValidity" />
        </form>
      </template>
    </pv-card>
    <pv-card>
      <template #title>
        <h2>QR YAPE</h2>
      </template>
      <template #content>
        <img src="https://res.cloudinary.com/drkelnilg/image/upload/v1716519397/imagen_2024-05-23_215633704_ktvbmi.png" @click="scanQR" alt="Scan QR Code" class="qr-code" />
      </template>
    </pv-card>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { required, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const isNumeric = value => /^\d+$/.test(value)
export default {
  data() {
    return {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  },
  validations() {
    return {
      cardNumber: { required, numeric: helpers.withMessage('Debe ser numérico', isNumeric) },
      expiryDate: { required, numeric: helpers.withMessage('Debe ser numérico', isNumeric) },
      cvv: { required, numeric: helpers.withMessage('Debe ser numérico', isNumeric) },
    }
  },
  setup() {
    const v$ = useVuelidate()
    const isFormValid = computed(() => v$.value.cardNumber.$model && v$.value.expiryDate.$model && v$.value.cvv.$model)
    const checkFormValidity = () => {
      v$.$validate()
      if (!isFormValid.value) {
        alert('Por favor, completa todos los campos con datos numéricos.');
      }
    }
    return {v$, isFormValid, checkFormValidity}
  },
  methods: {
    validateCardNumber() {
      this.cardNumber = this.cardNumber.replace(/\D/g, '')
    },
    validateExpiryDate() {
      this.expiryDate = this.expiryDate.replace(/\D/g, '')
    },
    validateCvv() {
      this.cvv = this.cvv.replace(/\D/g, '')
    },
  },
};
</script>

<style scoped>
.qr-code {
  width: 200px;
  height: 200px;
}
.card-title {
  display: flex;
  align-items: center;
}

.card-icon {
  margin-left: 500px;
  margin-right: -480px;
  width: 40px;
  height: 40px;
}
.flex-field {
  display: flex;
  justify-content: flex-start;
}

</style>
