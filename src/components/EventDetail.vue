

<template>
  <div class="container mx-auto p-6">
    <div v-if="event" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-auto object-cover"/>
      <div class="grid p-4">
        <h2 class="text-2xl font-bold mb-2">{{ event.title }}</h2>
        <p class="text-gray-800 mb-4">{{ event.description }}</p>
        <p class="text-gray-700 mb-2">Date : {{ event.date }}</p>
        <p class="font-bold mb-2">{{ event.location }}</p>
        <div class="flex justify-between items-center mt-4">
          <router-link :to="`/payment/${event.id}`" class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Réserver</router-link>
          <button class="hover:text-emerald-700">
            <font-awesome-icon icon="heart" />
          </button>
          <button class="text-green-500 hover:text-green-700">
            <font-awesome-icon icon="thumbs-up" />
          </button>
          <button class="text-blue-500 hover:text-blue-700">
            <font-awesome-icon icon="comment" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "EventDetail",
  data() {
    return {
      event: null
    };
  },
  created() {
    const eventId = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/events/${eventId}`)
         .then(response => {
             this.event = response.data;
         })
         .catch(error => {
             console.error("Erreur lors de la récupération de l'événement:", error);
         });
  }
};
</script>

<style scoped>

</style>
