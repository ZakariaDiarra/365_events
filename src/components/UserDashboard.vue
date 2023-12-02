

<template>
  <div class="p-5">
    <h1 class="text-3xl font-bold mb-10 text-center">Tableau de bord</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in userEvents" :key="event.id" class="border border-gray-300 rounded overflow-hidden shadow-lg p-4">
        <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-40 object-cover rounded-lg mb-3" />
        <h3 class="text-xl font-semibold">{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <div class="flex items-center justify-between mt-3">
          <button @click="likeEvent(event.id)" class="text-blue-500 hover:text-blue-700">
            <font-awesome-icon icon="thumbs-up" /> J'aime
          </button>
          <button @click="openCommentModal(event.id)" class="text-green-500 hover:text-green-700">
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
  name: "UserDashboard",
  data() {
    return {
      userEvents: eventsData,
    };
  },
  methods: {
    likeEvent(eventId) {
      // Logique pour gérer les likes
      console.log("Event liked:", eventId);
    },
    openCommentModal(eventId) {
      // Logique pour ouvrir un modal de commentaire
      console.log("Open comment modal for event:", eventId);
    },
  },
};
</script>


<style scoped>

</style>
