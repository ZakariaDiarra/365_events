


<template>
  <div class="home-page">
    <div class="banner">
      <img src="@/assets/banner.jpg" alt="Bannière" class="banner-image" />
      <div class="banner-text">
        <h1>Vos Événements 365 jours par an</h1>
        <p>Découvrez les derniers événements et activités culturelles et sociales près de chez vous!</p>
        <router-link to="/events" class="cta-button">Explorer</router-link>
      </div>
    </div>

    <div class="category-grid">
      <CategoryItem v-for="category in categories" :key="category.name" :category="category" @categoryClicked="goToCategory" />
    </div>

    <!-- Autres sections de la page d'accueil ici... -->
  </div>
</template>

<script>

import CategoryItem from './CategoryItem.vue';

import concertImage from '@/assets/banner.jpg';
import expoImage from '@/assets/banner.jpg';
import standupImage from '@/assets/banner.jpg';
import confImage from '@/assets/banner.jpg';


export default {
  // Votre logique de composant ici...
  name: "HomePage",
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: [
        { name: "Concerts", imageUrl: concertImage },
        { name: "Expositions", imageUrl: expoImage },
        { name: "Spectacles", imageUrl: standupImage },
        { name: "Conférences", imageUrl: confImage },
        // autres catégories...
      ]
    };
  },
  methods: {
    goToCategory(categoryName) {
      this.$router.push({ name: 'CategoryPage', params: { categoryName } });
    }
  }
  };
</script>

<style>
.banner {
  position: relative;
  text-align: center;
  overflow: hidden; /* Empêche les débordements */
}

.banner-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  filter: brightness(0.7); /* Assombrit l'image pour améliorer la visibilité du texte */
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ajoute une ombre pour améliorer la lisibilité */
  margin-bottom: 10px;
}

.cta-button {
  background-color: #0590a8;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none; /* Enlever le soulignement par défaut des liens */
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #024855;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colonnes */
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 100px;
}
.category-item {
  position: relative;
  cursor: pointer;
  overflow: hidden; /* Cache le débordement pour les animations */
  border-radius: 10px; /* Bordures arrondies */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajoute une légère ombre */
}

.category-item:hover img {
  transform: scale(1.1); /* Effet de zoom sur l'image au survol */
  transition: transform 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colonnes pour les écrans plus petits */
  }
}


/* Styles supplémentaires pour les autres sections */
</style>
