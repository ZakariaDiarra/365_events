

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
    </form>
    <div class="text-center mt-10">
      <router-link to="/userregister" class="text-black-500 hover:text-emerald-800">Pas encore inscrit ? Créer un compte.</router-link>
    </div>
  </div>
</template>



<script>
import { store } from '@/components/Store.js';

import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'


  export default {
  data() {
    return {
      username: '',
      password: '',
      errors: [],
    };
  },
  validations() {
    return {
      username: { required },
      password: { required, minLength: minLength(6) }
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  methods: {
    validateForm() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Nom d'utilisateur requis.");
      }
      if (!this.password) {
        this.errors.push("Mot de passe requis.");
      }
      return this.errors.length === 0;
    },
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$invalid) {
        // Simuler la connexion
        const userData = { username: this.username };
        store.setUser(userData);
        // Après une connexion réussie :
        this.$router.push('/userdashboard'); // Redirige vers le tableau de bord
      }
    }
  }
};
</script>

  <style scoped>

  </style>
