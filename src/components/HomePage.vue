


<template>
  <div class="home-page">
    <!-- Banner Section -->
    <div class="relative text-center overflow-hidden">
      <img src="@/assets/banner2.jpg" alt="Bannière" class="w-full h-96 object-cover text-center"/>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 class="text-3xl font-bold mb-8">{{ currentTitle }}<span class="cursor">|</span></h1>
        <router-link to="/events" class="bg-emerald-500 hover:bg-emerald-700 text-black font-bold py-3 px-6 rounded transition duration-300">Explorer</router-link>
      </div>
    </div>

    <!-- Category Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 mt-10">
      <CategoryItem v-for="category in categories" :key="category.name" :category="category" @categoryClicked="goToCategory" class="transform hover:scale-105 transition duration-300 ease-in-out bg-white rounded-lg shadow-lg overflow-hidden"/>
    </div>



    <!-- About Us Section -->
    <section class="py-12 bg-emerald-100">
      <div class="container mx-auto px-6 flex flex-wrap items-center">
        <div class="w-full md:w-1/2 px-8">
          <h2 class="text-3xl font-semibold mb-4 text-emerald-800">À propos de nous</h2>
          <p class="text-lg leading-relaxed text-gray-700">Notre mission est de vous fournir les meilleurs événements tout au long de l'année. Concerts, Spectacles, Conférences et Expositions, tout le monde peut trouver son bonheur d'activité sur notre plateforme 365 jours par an...</p>
        </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0 px-6">
        <img src="@/assets/logo365.png" alt="À propos" class="rounded-lg shadow-xl" />
      </div>
    </div>
  </section>


  <!-- Upcoming Events Section -->
  <section class="py-12 px-4 text-center">
    <div class="container mx-auto p-5">
      <div class="text-center mb-5">
        <h2 class="text-3xl font-bold mt-10">Rechercher des événements</h2>
        <p class="text-gray-600 mt-2">Trouvez des événements par lieu, date ou catégorie.</p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <input type="text" placeholder="Lieu" v-model="searchLocation" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
        <input type="date" v-model="searchDate" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
        <select v-model="searchCategory" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
          <option value="">Toutes catégories</option>
          <option value="Concerts">Concerts</option>
          <option value="Expositions">Expositions</option>
          <option value="Spectacles">Spectacles</option>
          <option value="Conférences">Conférences</option>
        </select>
        <button @click="performSearch" class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Rechercher</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        <div v-for="event in filteredEvents" :key="event.id" class="border border-gray-300 rounded overflow-hidden bg-emerald-100 text-center shadow-md mb-10">
          <img :src="event.imageUrl" alt="Image de l'événement" class="w-full event-image object-cover object-center"/>
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ event.title }}</h2>
            <p class="text-gray-600">{{ event.description }}</p>
            <h3 class="text-dark font-semibold">{{ event.date }}</h3>
            <p class="text-gray-500">{{ event.location }}</p>
            <router-link :to="`/events/${event.id}`" class="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 transition duration-300">Détails</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="py-12">
    <h2 class="text-4xl mb-8 font-semibold text-center">Galerie</h2>
    <div class="container mx-auto px-6 grid grid-cols-4 gap-8">
      <div v-for="image in galleryImages" :key="image.id" @click="openModal(image)" class="cursor-pointer">
        <img :src="image.src" alt="Image de l'événement" class="rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" @click="closeModal()">
      <img :src="selectedImage.src" class="max-w-full max-h-full" />
    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="bg-emerald-200 text-black py-12 text-center">
    <div class="container mx-auto">
      <h2 class="mb-4 text-3xl font-semibold">Restez Informés</h2>
      <p class="mb-6">Inscrivez-vous à la newsletter pour recevoir les dernières nouvelles et offres spéciales.</p>
      <form @submit.prevent="subscribeNewsletter" class="flex justify-center items-center mx-20">
        <input type="email" placeholder="Votre email" class="px-4 py-2 rounded-l-lg text-black font-semibold" />
        <button type="submit" class="bg-emerald-400 px-4 py-2 rounded-r-lg text-black font-semibold">S'abonner</button>
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
      searchLocation: '',
      searchDate: '',
      searchCategory: '',
      categories: [
        { name: "Concerts", imageUrl: concertImage },
        { name: "Expositions", imageUrl: expoImage },
        { name: "Spectacles", imageUrl: standupImage },
        { name: "Conférences", imageUrl: confImage },
        // autres catégories...
      ],
      galleryImages: [
        { id: 1, src: require('@/assets/concert3.jpg') },
        { id: 2, src: require('@/assets/standup2.jpg') },
        { id: 3, src: require('@/assets/conf3.jpg') },
        { id: 4, src: require('@/assets/standup4.jpg') },
      ],
      isModalOpen: false,
      selectedImage: null,
      events,

      currentTitle: "",
      titles: ["Vivez des expériences uniques", "Explorez de nouveaux horizons", "365 jours d'événements"],
      titleIndex: 0,
      letterIndex: 0
    };
  },
  methods: {
    goToCategory(categoryName) {
      this.$router.push({ name: 'CategoryPage', params: { categoryName } });
    },
    subscribeNewsletter() {
    // Logique pour simuler l'inscription à la newsletter
    alert("Merci de vous être inscrit à notre newsletter !");
    },
    openModal(image) {
    this.selectedImage = image;
    this.isModalOpen = true;
    },
    closeModal() {
    this.isModalOpen = false;
    },
    typeWriter() {
      if (this.letterIndex < this.titles[this.titleIndex].length) {
        this.currentTitle = this.titles[this.titleIndex].slice(0, ++this.letterIndex);
        requestAnimationFrame(this.typeWriter);
      } else {
        setTimeout(() => {
          this.letterIndex = 0;
          this.titleIndex = (this.titleIndex + 1) % this.titles.length;
          this.typeWriter();
        }, 3000); // Délai entre les titres
      }
    }
  },
  mounted() {
    this.typeWriter();
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        return (!this.searchLocation || event.location.includes(this.searchLocation)) &&
               (!this.searchDate || new Date(event.date).toISOString().split('T')[0] === this.searchDate) &&
               (!this.searchCategory || event.category === this.searchCategory);
      });
    }
  }
  };
</script>

<style>
.cursor {
  animation: blink 1s step-end infinite;
  color: rgb(5, 151, 102);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>