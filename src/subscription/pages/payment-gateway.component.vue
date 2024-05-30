<template>
  <div>
    <h1>Payment gateway</h1>
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
          <div class="field">
            <label for="cardName">Full name</label>
            <pv-input-text id="cardName" v-model="cardName" @input="validateCardName" required class="half-width-input"/>
          </div>
          <div class="field">
            <label for="cardNumber">Card number</label>
            <pv-input-text id="cardNumber" v-model="cardNumber" v-the-mask="'####-####-####-####'" @input="validateCardNumber" required class="half-width-input"/>
          </div>
          <div class="flex-field">
            <div class="field">
              <label for="expiryDate">Expiry date</label>
              <pv-calendar id="birthdate" v-model="expiryDate" dateFormat="mm/yy"/>
            </div>
            <div class="field cvv-field">
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
import { TheMask } from 'vue-the-mask'

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
  directives:{
    'the-mask': TheMask
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
  margin-left: 20px;
  width: 40px;
  height: 40px;
}


.field label {
  width: 150px;
  margin-right: 0.2em;
}

.flex-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.half-width-input {
  width: 48.5%;
}

.cvv-field {
  margin-right: 600px;
}

</style>
