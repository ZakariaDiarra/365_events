

<template>
    <div>
      <h1>{{ event.name }}</h1>
      <p>{{ event.description }}</p>
      <!-- D'autres détails sur l'événement comme la date, le lieu, etc. -->
    </div>
  </template>

  <script>
  export default {
    name: "EventDetail",
    // Autres options si nécessaire
    data() {
      return {
        event: {} // Cet objet sera rempli avec les détails de l'événement spécifique
      }
    }
  }
  </script>

  <style scoped>
  /* Styles pour la page de détail de l'événement */
  </style>
