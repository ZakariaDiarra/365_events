

import { reactive } from 'vue';

export const store = reactive({
  user: null,

  setUser(userData) {
    this.user = userData;
  },

  logout() {
    this.user = null;
  }
});
