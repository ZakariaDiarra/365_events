

<template>
    <div class="register-container">
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <input type="text" placeholder="Nom d'utilisateur" v-model="username" />
        <input type="email" placeholder="Adresse e-mail" v-model="email" />
        <input type="password" placeholder="Mot de passe" v-model="password" />
        <input type="password" placeholder="Confirmez le mot de passe" v-model="confirmPassword" />
        <button type="submit">S'inscrire</button>
      </form>
      <router-link to="/userlogin">Déjà inscrit ? Se connecter</router-link>
    </div>
  </template>

  <script>
  export default {
    name: "UserRegister",
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        // Implémenter la logique d'inscription ici
      }
    }
  };
  </script>

  <style scoped>
  /* Styles pour le formulaire d'inscription */
  </style>
