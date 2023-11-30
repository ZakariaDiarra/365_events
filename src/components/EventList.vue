

<template>
    <div class="events">
      <div v-for="event in events" :key="event.id" class="event">
        <img :src="event.imageUrl" alt="Image de l'événement" class="event-image" />
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <router-link :to="'/events/' + event.id" class="details-button">Détails</router-link>
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
.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.event {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.event-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.details-button {
  background-color: #0590a8;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  text-decoration: none;
}

.details-button:hover {
  background-color: #024855;
}
</style>
