

<template>
  <div class="p-5 bg-emerald-100">
    <!-- Titre du Tableau de Bord -->
    <h1 class="text-4xl font-bold mb-10 text-center text-emerald-800">Bonjour, {{ userProfile.username }}</h1>
    <div class="grid grid-cols-1 gap-4">
      <!-- Section Événements Réservés -->
      <section class="mb-10 p-4 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold text-emerald-700 mb-4">Mes Réservations</h2>
        <div v-for="reservation in reservations" :key="reservation.id" class="p-2 border-b gap-4">
          <p class="font-semibold mb-2">{{ reservation.event.title }}</p>
          <img :src="reservation.event.imageUrl" alt="Image de l'événement" class="h-60 w-80 object-cover rounded-lg mb-3" />
          <p>{{ reservation.event.date }}</p>
          <p class="font-semibold">{{ reservation.event.location }}</p>
        </div>
      </section>

      <!-- Section Gestion des Événements
      <section class="p-4 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold text-emerald-600 mb-4">Gérer mes Événements</h2>
        <button @click="showCreateEventModal = true; isEditMode = false; selectedEvent = null;" class="mb-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Créer un Événement</button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="event in userEvents" :key="event.id" class="border border-gray-300 rounded overflow-hidden shadow-lg p-4">
            <img :src="event.imageUrl" alt="Image de l'événement" class="w-full h-40 object-cover rounded-lg mb-3" />
            <h3 class="text-xl font-semibold">{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <div class="flex items-center justify-between mt-3">
              <button @click="editEvent(event)" class="text-yellow-500 hover:text-yellow-700">Modifier</button>
              <button @click="deleteEvent(event.id)" class="text-red-500 hover:text-red-700">Supprimer</button>
            </div>
          </div>
        </div>
      </section>
      -->
    </div>
    <!-- Formulaire de création/modification d'événement
    <CreateEvent v-if="showCreateEventModal" :isEditMode="isEditMode" :existingEventData="selectedEvent" @closeModal="showCreateEventModal = false" />
    -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "UserDashboard",
  data() {
    return {
      userProfile: {},
      reservations: [],
      userEvents: [],
    };
  },
  created() {
    this.fetchUserProfile();
    this.fetchUserEvents();
    this.fetchReservations();
  },
  methods: {
    fetchUserProfile() {
      const userId = localStorage.getItem('userId');
      axios.get(`http://127.0.0.1:8000/api/userprofile/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      .then(response => {
        this.userProfile = response.data;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération du profil utilisateur:", error);
      });
    },
    fetchUserEvents() {
      axios.get('http://127.0.0.1:8000/api/events', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      .then(response => {
        this.userEvents = response.data;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des événements:", error);
      });
    },
    fetchReservations() {
      axios.get('http://127.0.0.1:8000/api/reservations', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      .then(response => {
        this.reservations = response.data;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des réservations:", error);
      });
    },
  }
};
</script>

<style scoped>

</style>
