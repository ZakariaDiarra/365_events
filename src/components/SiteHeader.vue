


<template>
  <nav class="header-nav">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </router-link>
    <ul class="nav-links">
      <li><router-link to="/" class="hover:text-gray-300">Accueil</router-link></li>
      <li><router-link to="/events" class="hover:text-gray-300">Evènements</router-link></li>
      <li v-if="userLoggedIn"><router-link to="/dashboard" class="hover:text-gray-300">Tableau de bord</router-link></li>
      <li v-if="userLoggedIn" @click="logout" class="hover:text-gray-300 cursor-pointer">Déconnexion</li>
      <li v-else><router-link to="/userlogin" class="login-button">Connexion</router-link></li>
    </ul>
  </nav>
</template>

  <script>
  export default {
    name: "SiteHeader",
    data() {
      return {
        // Supposons que cela détermine si l'utilisateur est connecté
        userLoggedIn: false,
      };
    },
    methods: {
      // Ici, vous pouvez ajouter des méthodes pour la gestion de l'utilisateur, comme la connexion ou la déconnexion
      logout() {
      // Implémenter la logique de déconnexion ici
      // Par exemple, supprimer les données de l'utilisateur du stockage local/session, etc.
      this.userLoggedIn = false;
    }
    }
  }
  </script>

<style scoped>
.header-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo {
  width: 80px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  font-weight: 500;
}

.nav-links a {
  text-decoration: none;
  color: black;
}

.login-button {
  background-color: #0590a8;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  text-decoration: none;
}

.login-button:hover {
  background-color: #024855;
  color: antiquewhite;
}

</style>
