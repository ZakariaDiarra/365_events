

<template>
  <div class="flex justify-center items-center h-screen">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Nom d'utilisateur
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Connexion
        </button>
      </div>
    </form>
    <div v-if="errors.length">
      <p class="text-red-500 text-xs italic">Corrigez les erreurs:</p>
      <ul>
        <li v-for="(error, index) in errors" :key="index" class="text-red-500 text-xs italic">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
  data() {
    return {
      username: '',
      password: '',
      errors: [],
    };
  },
  methods: {
    validateForm() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username required.");
      }
      if (!this.password) {
        this.errors.push("Password required.");
      }

      if (!this.errors.length) {
        return true;
      }
    },
    submitForm() {
      if (this.validateForm()) {
        // Soumettre le formulaire
      }
    }
  }
};
</script>

  <style scoped>
  /* Styles pour le formulaire de connexion */
  </style>
