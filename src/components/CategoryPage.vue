

<template>
  <div class="container mx-auto p-5">
    <h1 class="text-2xl font-bold mb-5">{{ categoryName }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div v-for="event in filteredEvents" :key="event.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-58 object-cover" />
        <div class="p-4 text-center">
          <h2 class="text-xl font-semibold">{{ event.title }}</h2>
          <p class="text-gray-700">{{ event.description }}</p>
          <router-link :to="'/events/' + event.id" class="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 transition duration-300">Détails</router-link>
          <!-- Autres détails de l'événement ici -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { events as eventsData } from '@/data/events.js';

export default {
    name: "CategoryPage",
    props: {
    categoryName: String
    },
    data() {
    return {
        eventsData,
    };
    },
    computed: {
    filteredEvents() {
        return this.eventsData.filter(event => event.category === this.categoryName);
    }
    }
};
</script>

<style>

</style>
