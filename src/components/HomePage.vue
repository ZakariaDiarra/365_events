


<template>
  <div class="home-page">
    <!-- Banner Section -->
    <div class="relative text-center overflow-hidden">
      <img src="@/assets/banner2.jpg" alt="Bannière" class="w-full" style="height: 26rem; object-fit: cover; object-position: center; filter: brightness(75%);"/>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 class="text-4xl font-bold mb-4">365 jours d'événements par an</h1>
        <p class="mb-6">Découvrez les derniers événements et activités culturelles près de chez vous!</p>
        <router-link to="/events" class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300">Explorer</router-link>
      </div>
    </div>

    <!-- Category Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 font-semibold">
      <CategoryItem v-for="category in categories" :key="category.name" :category="category" @categoryClicked="goToCategory" />
    </div>


    <!-- About Us Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-6 flex flex-wrap items-center">
        <div class="w-full md:w-1/2 px-6">
          <h2 class="text-3xl font-semibold mb-4">À propos de nous</h2>
          <p class="text-lg leading-relaxed">Découvrez qui nous sommes et ce que nous faisons. Notre mission est de vous fournir les meilleurs événements tout au long de l'année.</p>
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0 px-6">
          <img src="@/assets/logo365.png" alt="À propos" class="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-12 px-4 text-center">
      <h2 class="text-3xl mb-4 font-semibold mb-10">Événements à venir</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
        <div v-for="event in events" :key="event.id" class="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
          <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-64 object-cover"/>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
            <p class="text-gray-700 mb-4">{{ event.description }}</p>
            <div class="text-gray-600 mb-2">{{ event.date }}</div>
            <router-link :to="'/events/' + event.id" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Détails</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-12">
      <h2 class="text-3xl mb-4 font-semibold text-center">Galerie</h2>
      <div class="container mx-auto px-6 grid grid-cols-3 gap-4">
        <img src="@/assets/concert3.jpg" alt="Image de l'événement" class="rounded-lg shadow-lg" />
        <img src="@/assets/standup2.jpg" alt="Image de l'événement" class="rounded-lg shadow-lg" />
        <img src="@/assets/conf3.jpg" alt="Image de l'événement" class="rounded-lg shadow-lg" />
        <!-- More images here -->
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-black text-white py-12 text-center">
      <div class="container mx-auto">
        <h2 class="mb-4 text-3xl font-semibold">Restez Informés</h2>
        <p class="mb-6">Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles et offres spéciales.</p>
        <form class="flex justify-center items-center mx-20">
          <input type="email" placeholder="Votre email" class="px-4 py-2 rounded-l-lg" />
          <button type="submit" class="bg-emerald-700 px-4 py-2 rounded-r-lg">S'abonner</button>
        </form>
      </div>
    </section>
  </div>
</template>


<script>

import { events } from '@/data/events.js'

import CategoryItem from './CategoryItem.vue';

import concertImage from '@/assets/concert1.jpg';
import expoImage from '@/assets/expo1.jpg';
import standupImage from '@/assets/standup5.jpg';
import confImage from '@/assets/conf1.jpg';


export default {
  // Logique de composant ici...
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
      ],

      events
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

</style>
