

<template>
  <div class="container mx-auto p-5">
    <div class="text-center mb-5">
      <h2 class="text-3xl font-bold mt-10">Rechercher des événements</h2>
      <p class="text-gray-600 mt-2">Trouvez des événements par Lieu, Date ou Catégorie.</p>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
      <input type="text" placeholder="Lieu" v-model="searchLocation" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
      <input type="date" v-model="searchDate" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
      <!--<select v-model="searchCategory" class="p-2 border border-gray-300 rounded shadow-sm bg-emerald-100">
        <option value="">Toutes catégories</option>
        <option value="Concerts">Concerts</option>
        <option value="Expositions">Expositions</option>
        <option value="Spectacles">Spectacles</option>
        <option value="Conférences">Conférences</option>
      </select>-->
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
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventList',
  data() {
    return {
      events: [],
      searchLocation: '',
      searchDate: ''
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/events")
    .then(response => {
        this.events = response.data;
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des événements:", error);
         });
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        return (!this.searchLocation || event.location.includes(this.searchLocation)) &&
               (!this.searchDate || new Date(event.date).toISOString().split('T')[0] === this.searchDate)
      });
    }
  }
};
</script>

<style>

</style>
