

import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('setUser', user);
    },
    logoutUser({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isLoggedIn: state => !!state.user
  }
});