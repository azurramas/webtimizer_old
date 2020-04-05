import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    error: false,
  },
  mutations: {
    addImage(state, file) {
      state.images.push(file);
    },
    setError(state) {
      state.error = !state.error;
    },
    clearAll(state) {
      state.images = [];
    },
  },
  actions: {
    uploadImages({ commit }, files) {
      files.forEach((file) => {
        if (file.type.includes("image/")) {
          if (!this.state.images.some((item) => item.path === file.path)) {
            commit("addImage", file);
          }
        } else {
          commit("setError");
        }
      });
    },
  },
  modules: {},
  getters: {
    getImages(state) {
      return state.images;
    },
    getError(state) {
      return state.error;
    },
  },
});
