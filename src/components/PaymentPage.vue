

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
  </div>
</template>

<script>
import { events } from '@/data/events.js';

export default {
  data() {
    return {
      eventDetails: {},
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
    const eventIdAsNumber = Number(this.eventId);
    this.eventDetails = events.find(event => event.id === eventIdAsNumber);
  },
  methods: {
    submitReservation() {
      // Traitement de la réservation
      alert(`Réservation pour ${this.reservation.tickets} billet(s) effectuée !`);
    },
  },
};
</script>
