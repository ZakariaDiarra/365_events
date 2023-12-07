

<template>
  <div class="grid justify-center items-center">
    <h1 class="text-2xl mb-8 mt-10" v-if="eventDetails">Réservation pour : {{ eventDetails.title }}</h1>
    <h1 class="text-2xl mb-8" v-else>Événement introuvable</h1>
    <form v-if="eventDetails" @submit.prevent="submitReservation" class="space-y-4">
      <div>
        <label class="block">Nom complet</label>
        <input type="text" v-model="reservation.name" class="mt-1 block w-full bg-emerald-200 rounded-md border-gray-300 shadow-sm" required>
      </div>
      <div>
        <label class="block">Email</label>
        <input type="email" v-model="reservation.email" class="mt-1 block w-full bg-emerald-200 rounded-md border-gray-300 shadow-sm" required>
      </div>
      <div>
        <label class="block">Nombre de billets</label>
        <input type="number" v-model="reservation.tickets" class="mt-1 block w-full bg-emerald-200 rounded-md border-gray-300 shadow-sm" min="1" required>
      </div>
      <button type="submit" class="bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">Réserver</button>
    </form>
    <h3 class="mt-40 text-center">Connectez-vous pour pouvoir réserver !</h3>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      eventDetails: null,
      reservation: {
        name: '',
        email: '',
        tickets: 2
      },
    };
  },
  props: {
    eventId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.fetchEventDetails();
  },
  methods: {
    fetchEventDetails() {
      axios.get(`http://127.0.0.1:8000/api/events/${this.eventId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      .then(response => {
        this.eventDetails = response.data;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des détails de l'événement:", error);
      });
    },
    submitReservation() {
      const userId = localStorage.getItem('userId');
      axios.post('http://127.0.0.1:8000/api/reservations/', {
        user: userId,
        event: this.eventId,
        name: this.reservation.name,
        email: this.reservation.email,
        tickets: this.reservation.tickets
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      .then(() => {
        alert(`Réservation pour ${this.reservation.tickets} billet(s) effectuée !`);
        this.$router.push('/userdashboard');
      })
      .catch(error => {
        console.error("Erreur lors de la création de la réservation:", error);
      });
    },
  }
};
</script>