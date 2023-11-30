

<template>
    <div>
      <h1>Catégorie: {{ categoryName }}</h1>
      <div v-for="event in filteredEvents" :key="event.category" class="event">
        <img :src="event.imageUrl" alt="Image de l'événement" class="event-image" />
        <h2>{{ event.title }}</h2>
        <p>{{ event.description }}</p>
        <!-- Affichez d'autres détails de l'événement ici -->
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
  /* Ajoutez vos styles ici */
</style>
