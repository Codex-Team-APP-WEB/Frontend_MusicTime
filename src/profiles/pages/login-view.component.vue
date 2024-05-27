<script>
import { ref } from 'vue';

export default {
  name: 'login-view',
  components: {},
  setup() {
    const email = ref('');
    const password = ref('');

    const login = () => {
      // Lógica de inicio de sesión aquí
      console.log('Email:', email.value);
      console.log('Password:', password.value);
    };

    const loginWithGoogle = () => {
      // Lógica de inicio de sesión con Google aquí
      console.log('Login with Google');
    };

    return {
      email,
      password,
      login,
      loginWithGoogle
    };
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-form">
      <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716789390/conciertos_2_dwr1a6.jpg" class="background-image" />
      <div class="login-card">
        <div class="login-header">
          <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716477202/MusicTime-Logo_nihbnp.jpg" alt="MusicTime Logo" class="logo" />
          <i class="pi pi-music" style="font-size: 2em;"></i>
          <h2>Login</h2>
          <p>Welcome to MusicTime!!</p>
        </div>
        <div class="p-fluid">
          <div class="p-field">
            <pv-icon-field>
              <pv-input-icon>
                <i class="pi pi-envelope" />
              </pv-input-icon>
              <pv-input-text id="email" v-model="email" type="email" placeholder="Email" />
            </pv-icon-field>
          </div>
          <div class="p-field">
            <div class="field p-fluid">
              <pv-password v-model="password" toggleMask placeholder="Password" />
            </div>
          </div>
          <div class="p-field">
            <pv-button label="Enter your account" @click="login" />
          </div>
        </div>
         </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.login-card {
  background: rgb(255, 255, 255);
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
}

.login-header i {
  margin-bottom: 0.5em;
}

.login-header h2 {
  margin: 0;
}

.p-fluid .p-field {
  margin-bottom: 1em;
}

.logo {
  width: 100px;
}

</style>