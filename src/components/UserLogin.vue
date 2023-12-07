

<template>
  <div class="grid justify-center items-start py-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-10">Connexion</h2>
    </div>
    <form class="bg-emerald-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom d'utilisateur
        </label>
        <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**************">
      </div>
      <div class="flex items-center justify-center">
        <button @click="submitForm" class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Connexion
        </button>
      </div>
      <div v-if="loginError" class="text-emerald-800 mt-2">
        {{ loginErrorMessage }}
      </div>
    </form>
    <div class="text-center mt-10">
      <router-link to="/userregister" class="text-black-500 hover:text-emerald-800">Pas encore inscrit ? Créer un compte.</router-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default {
  data() {
    return {
      username: '',
      password: '',
      loginError: false,
      loginErrorMessage: ''
    };
  },
  validations() {
    return {
      username: { required },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    validateForm() {
      this.loginError = false;
      this.loginErrorMessage = '';
      return this.v$.$validate();
    },
    async submitForm() {
      if (await this.validateForm()) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', {
            username: this.username,
            password: this.password
          });
          const token = response.data.access;
          localStorage.setItem('authToken', token);

          const userDetailsResponse = await axios.get('http://127.0.0.1:8000/api/user_details', {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          localStorage.setItem('userId', userDetailsResponse.data.id);
          this.$store.dispatch('loginUser', { username: this.username });

          this.$router.push('/userdashboard');
        } catch (error) {
          this.loginError = true;
          this.loginErrorMessage = error.response ? error.response.data.detail : 'Erreur de connexion au serveur';
      }
      }
    }
  },
  setup() {
    return { v$: useVuelidate() };
  }
};
</script>

<style scoped>

</style>
