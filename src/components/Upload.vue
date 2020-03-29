<template>
  <v-col class="col-12 col-sm-10 col-md-8 col-lg-6">
    <a
      href="#"
      @click="upload"
      @dragover.prevent
      @drop="dragdrop"
      class="uploadFile d-flex flex-column align-center justify-center blue-grey--text text--lighten-4"
    >
      <div class="material-icons">cloud_upload</div>
      <p class="font-weight-light">Upload or drop images</p>
    </a>
    <v-dialog v-model="error" style="background-color: #0c233e;" max-width="500">
      <NotImage @closeDialog="error = false" />
    </v-dialog>
  </v-col>
</template>

<script>
import NotImage from "./NotImage.vue";
export default {
  data() {
    return {
      error: false,
      images: []
    };
  },
  components: {
    NotImage
  },
  methods: {
    upload: function() {
      const { remote } = require("electron");
      const dialog = remote.dialog;
      const dialogOptions = {
        filters: [{ name: "Images", extensions: ["jpg", "png", "jpeg"] }],
        properties: ["multiSelections"]
      };

      dialog.showOpenDialog(dialogOptions, files => {
        let images = files.filter(image => !this.images.includes(image));
        this.images = this.images.concat(images);
        console.log(this.images);
      });
    },
    dragdrop: function(e) {
      let files = e.dataTransfer.files;

      files.forEach(file => {
        if (
          file.type === "image/jpg" ||
          file.type === "image/jpeg" ||
          file.type === "image/png"
        ) {
          this.error = false;
          if (!this.images.includes(file.path)) {
            this.images.push(file.path);
          }
          console.log(this.images);
        } else {
          this.error = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.uploadFile {
  text-decoration: none;
  height: 15rem;
  background: #46596f;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.material-icons {
  transition: all 0.2s ease-in-out;
  font-size: 12rem;
}

.uploadFile:hover {
  -webkit-box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
  -moz-box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
  box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
}
</style>
