<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignUpRequest} from "../model/sign-up.request.js";


export default {
  name: "sign-up",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSignUp() {
      let authenticationStore = useAuthenticationStore();
      let signUpRequest = new SignUpRequest(this.username, this.password);
      authenticationStore.signUp(signUpRequest, this.$router);
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-form">
      <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716789390/conciertos-recomendaciones_ofnkkx.jpg" alt="Logo" class="background-image" />
      <div class="login-card">
        <div class="login-header">
          <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1716477202/MusicTime-Logo_nihbnp.jpg" alt="MusicTime Logo" class="logo" />
          <i class="pi pi-music" style="font-size: 2em;"></i>
          <h2>Sign Up</h2>
          <p>Welcome to MusicTime!!</p>
        </div>
        <form @submit.prevent="onSignUp">
          <div class="p-fluid">
            <div class="field mt-5">
              <pv-float-label>
                <label for="username">Username</label>
                <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
                <small v-if="!username" class="p-invalid">Username is required</small>
              </pv-float-label>
            </div>
            <div class="field mt-5">
              <pv-float-label>
                <label for="password">Password</label>
                <pv-password id="password" v-model="password" :class="{'p-invalid': !password}" type="password" />
                <small v-if="!password" class="p-invalid">Password is required</small>
              </pv-float-label>
            </div>
            <div class="field mt-5">
              <button type="submit" class="p-button p-button-primary">Sign Up</button>
            </div>
          </div>
        </form>
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

.p-fluid {
  margin-bottom: 1em;
}

.logo {
  width: 100px;
}

.p-button-primary {
  background-color: #00236c;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>