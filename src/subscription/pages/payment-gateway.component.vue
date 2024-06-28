<template>
  <div class="container">
    <h1>Payment gateway</h1>
    <pv-card class="payment-card">
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
            <pv-input-text id="cardName" v-model="cardName" @input="validateCardName" required class="full-width-input" placeholder="Enter your full name"/>
          </div>
          <div class="field">
            <label for="cardNumber">Card number</label>
            <pv-input-text id="cardNumber" v-model="cardNumber" @input="validateCardNumber" required class="full-width-input" placeholder="0000 0000 0000 0000"/>
          </div>
          <div class="field flex-field">
            <div class="expiry-field">
              <label for="expiryDate">Expiry date</label>
              <pv-calendar id="expiryDate" v-model="expiryDate" dateFormat="mm/yy" class="half-width-input" placeholder="01/23"/>
            </div>
            <div class="cvv-field">
              <label for="cvv">CVV</label>
              <pv-input-text id="cvv" v-model="cvv" @input="validateCvv" required class="cvv-input" placeholder="CVV"/>
            </div>
          </div>
          <div class="pay-button-container">
            <pv-button class="pay-button" label="Pay" :disabled="!isFormValid" @click="checkFormValidity" />
          </div>
        </form>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'; // Importa useRouter
import { required, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const isNumeric = value => /^\d+$/.test(value);
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
    };
  },
  setup() {
    const v$ = useVuelidate();
    const router = useRouter(); // Utiliza useRouter
    const isFormValid = computed(() => !v$.value.$error); // Comprueba si hay errores
    const checkFormValidity = () => {
      if (!isFormValid.value) {
        alert('Por favor, completa todos los campos con datos numéricos.');
      } else {
        router.push('/create-musician'); // Navega a la página de creación de perfil de músico
      }
    };
    return { v$, isFormValid, checkFormValidity };
  },
  methods: {
    validateCardNumber() {
      this.cardNumber = this.cardNumber.replace(/\D/g, '');
    },
    validateExpiryDate() {
      this.expiryDate = this.expiryDate.replace(/\D/g, '');
    },
    validateCvv() {
      this.cvv = this.cvv.replace(/\D/g, '');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
.payment-card {
  margin-top: 20px;
  background-color: #f9f9f9;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-icon {
  width: 40px;
  height: 40px;
}

.field label {
  display: block;
  margin-bottom: 0.5em;
}

.full-width-input {
  width: 100%;
}

.flex-field {
  display: flex;
  justify-content: space-between;
}

.expiry-field,
.cvv-field {
  width: 48%;
}

.cvv-input {
  width: 70px;
}

.pay-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pay-button {
  font-size: 20px;
  padding: 15px 30px;
  width: 200px;
  height: 60px;
}
</style>