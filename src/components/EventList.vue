

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
      <div v-for="event in events" :key="event.id" class="border border-gray-300 rounded overflow-hidden text-center shadow-md mb-10">
        <img :src="event.imageUrl" alt="Image de l'événement" class="w-full event-image object-cover object-center"/>
        <div class="p-4">
          <h2 class="text-xl font-semibold">{{ event.title }}</h2>
          <p class="text-gray-600">{{ event.description }}</p>
          <h3 class="text-dark font-semibold">{{ event.date }}</h3>
          <p class="text-gray-500">{{ event.location }}</p>
          <router-link :to="'/events/' + event.id" class="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 transition duration-300">Détails</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { events as eventsData } from '@/data/events.js';

export default {
  name: 'EventList',
  data() {
    return {
      events: eventsData
    };
  }
};
</script>

<style>

</style>
