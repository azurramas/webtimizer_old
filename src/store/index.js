import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function makeThumb(dataUrl, imageType, callback) {
  var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl, imageArguments;
  var newWidth = 370;
  // Provide default values
  imageType = imageType || "image/jpeg";
  imageArguments = 0.5;

  // Create a temporary image so that we can compute the height of the downscaled image.
  image = new Image();
  image.src = dataUrl;
  image.onload = function() {
    oldWidth = image.width;
    oldHeight = image.height;
    newHeight = Math.floor((oldHeight / oldWidth) * newWidth);

    // Create a temporary canvas to draw the downscaled image on.
    canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the downscaled image on the canvas and return the new data URL.
    ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    newDataUrl = canvas.toDataURL(imageType, imageArguments);
    callback(newDataUrl);
  };
}

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
            makeThumb(file.path, file.type, (thumb) => {
              file.min = thumb;
              commit("addImage", file);
            });
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
