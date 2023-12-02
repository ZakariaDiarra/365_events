

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <router-link to="/" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <img src="@/assets/logo365.png" alt="Logo" class="h-14 w-14 mr-2"/>
          </router-link>
        </div>
        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link to="/" class="py-5 px-3 text-black hover:text-emerald-800">Accueil</router-link>
          <router-link to="/events" class="py-5 px-3 text-black hover:text-emerald-800">Événements</router-link>
          <router-link v-if="isLoggedIn" to="/userdashboard" class="py-5 px-3 text-black hover:text-emerald-800">Mon profil</router-link>
          <a v-if="isLoggedIn" @click="logout" class="py-5 px-3 cursor-pointer text-black hover:text-emerald-800">Déconnexion</a>
          <router-link v-else to="/userlogin" class="py-2 px-3 bg-emerald-500 hover:bg-emerald-700 text-white rounded transition duration-300">Connexion</router-link>
        </div>
        <!-- mobile button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path :class="{'hidden': isOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path :class="{'hidden': !isOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden text-center">
      <router-link to="/" class="block py-2 px-4 text-sm hover:bg-gray-200" @click="closeMenu">Accueil</router-link>
      <router-link to="/events" class="block py-2 px-4 text-sm hover:bg-gray-200" @click="closeMenu">Événements</router-link>
      <router-link v-if="isLoggedIn" to="/userdashboard" class="block py-2 px-4 text-sm hover:bg-gray-200" @click="closeMenu">Mon profil</router-link>
      <a v-if="isLoggedIn" class="block py-2 px-4 text-sm hover:bg-gray-200" @click="logoutAndCloseMenu">Déconnexion</a>
      <router-link v-else to="/userlogin" class="block py-2 px-4 text-sm hover:bg-gray-200" @click="closeMenu">Connexion</router-link>
    </div>
  </nav>
</template>

<script>
import { store } from '@/components/Store';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      return store.user !== null;
    }
  },
  methods: {
    logout() {
      store.logout();
      this.$router.push('/');
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
    this.isOpen = false;
    },
    logoutAndCloseMenu() {
      this.logout();
      this.closeMenu();
    },
  },
};
</script>

<style>

</style>
