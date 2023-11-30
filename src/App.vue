

<template>
  <SiteHeader />
  <router-view />
  <SiteFooter />
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
/* Vos styles globaux ici */
body {
  font-family: 'Open Sans', sans-serif;
}

.events {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px; /* Espace entre les éléments de la grille */
  padding: 20px;
}

.event {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center; /* Centrer le texte */
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  margin-bottom: 10px;
}

.event-image {
  width: 100%; /* Utilisez la pleine largeur du conteneur de l'événement */
  height: 600px; /* Hauteur fixe pour toutes les images */
  object-fit: cover; /* S'assure que l'image couvre tout l'espace sans déformation */
  object-position: center; /* Centre l'image dans le cadre */
}


</style>
