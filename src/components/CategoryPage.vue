

<template>
  <div class="container mx-auto p-5 mb-20">
    <h1 class="text-3xl font-bold mb-10 text-center">{{ categoryName }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div v-for="event in filteredEvents" :key="event.id" class="bg-emerald-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img :src="event.imageUrl" alt="Image de l'événement" class="w-full event-image object-cover object-center" />
        <div class="p-4 text-center">
          <h2 class="text-xl font-semibold mb-2">{{ event.title }}</h2>
          <p class="text-gray-700 mb-4">{{ event.description }}</p>
          <router-link :to="`/events/${event.id}`" class="inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 transition duration-300">Détails</router-link>
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
