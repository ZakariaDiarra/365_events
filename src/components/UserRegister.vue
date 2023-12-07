

<template>
  <div class="grid justify-center items-start py-8">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-center mb-10">Créer un compte</h2>
    </div>
    <form @submit.prevent="register" class="grid grid-cols-1 bg-emerald-200 shadow-md rounded px-6 pt-6 pb-8 max-w-xs">
      <div class="mb-4">
        <input v-model="form.username" type="text" placeholder="Nom d'utilisateur" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <div v-if="v$.form.username.$error" class="text-red-500">
          Nom d'utilisateur requis.
        </div>
      </div>
      <div class="mb-4">
        <input v-model="form.email" type="email" placeholder="E-mail" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <div v-if="v$.form.email.$error" class="text-red-500">
          L'email n'est pas valide.
        </div>
      </div>
      <div class="mb-4">
        <input v-model="form.password" type="password" placeholder="Mot de passe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="mb-4">
        <input v-model="form.confirmPassword" type="password" placeholder="Confirmez le mot de passe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        <div v-if="v$.form.confirmPassword.$error" class="text-red-500">
          Les mots de passe ne correspondent pas.
        </div>
      </div>
      <div class="mb-6">
        <input type="file" @change="onFileChange" />
          Votre photo de profil.
      </div>
      <div class="flex items-center justify-center">
        <button type="submit" class="bg-emerald-500 hover:bg-emerald-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          S'inscrire
        </button>
      </div>
      <div v-if="registerError" class="text-red-500 mt-2">
        {{ registerErrorMessage }}
      </div>
    </form>
    <div class="text-center mt-10">
      <router-link to="/userlogin" class="text-black-500 hover:text-emerald-800">Déjà inscrit ? Cliquer ici.</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { required, email, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  name: "UserRegister",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: null,
      },
      registerError: false,
      registerErrorMessage: ''
    };
  },
  validations() {
    return {
      form: {
        username: { required },
        email: { required, email },
        password: { required, minLength: minLength(8) },
        confirmPassword: {
          required,
          sameAsPassword: (value) => value === this.form.password
        },
      }
    }
  },
  methods: {
    onFileChange(e) {
      this.form.photo = e.target.files[0];
    },
    async register() {
      this.v$.$validate()
      if (!this.v$.$error) {
        const formData = new FormData();
        formData.append('username', this.form.username);
        formData.append('email', this.form.email);
        formData.append('password', this.form.password);
        if (this.form.photo) {
        formData.append('photo', this.form.photo);
        }
        try {
          const response = await axios.post('http://127.0.0.1:8000/auth/users/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          localStorage.setItem('userId', response.data.id);

          // Redirection après l'inscription
          this.$router.push('/userlogin');
        } catch (error) {
          this.registerError = true;
          this.registerErrorMessage = error.response ? error.response.data : "L'inscription n'a pas fonctionné";
        }
      }
    }
  },
  setup() {
    return { v$: useVuelidate() };
  }
};
</script>
