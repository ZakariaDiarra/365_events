

<template>
  <div class="container mx-auto p-6">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-96 object-cover"/>
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">{{ event.title }}</h2>
        <p class="text-gray-700">{{ event.description }}</p>
        <div class="flex justify-between items-center mt-4">
          <router-link :to="`/payment/${event.id}`" class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Réservation</router-link>
          <button class="hover:text-emerald-700">
            <font-awesome-icon icon="heart" /> Favoris
          </button>
          <button class="text-green-500 hover:text-green-700">
            <font-awesome-icon icon="thumbs-up" /> J'aime
          </button>
          <button class="text-blue-500 hover:text-blue-700">
            <font-awesome-icon icon="comment" /> Commenter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { events as eventsData } from '@/data/events.js';

export default {
  name: "EventDetail",
  data() {
    return {
      event: null
    };
  },
  created() {
    const eventId = this.$route.params.id; // Récupération de l'ID de l'événement
    this.event = eventsData.find(event => event.id === parseInt(eventId)); // Trouver l'événement correspondant
  }
};
</script>

<style scoped>

</style>
