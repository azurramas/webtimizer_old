<template>
  <v-col class="col-12 col-sm-10 col-md-8 col-lg-6">
    <div
      href="#"
      @dragover.prevent
      @drop="upload"
      class="uploadFile d-flex flex-column align-center justify-center blue-grey--text text--lighten-4"
    >
      <input type="file" name="myImage" accept="image/*" multiple @change="upload" />

      <div class="material-icons">cloud_upload</div>
      <p class="font-weight-light">Upload or drop images</p>
    </div>
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
      error: false
    };
  },
  components: {
    NotImage
  },
  methods: {
    upload: function(e) {
      e.preventDefault();
      if (e.type === "change") {
        var files = e.target.files;
      } else {
        files = e.dataTransfer.files;
      }

      files.forEach(file => {
        if (file.type.includes("image/")) {
          this.error = false;
          if (!this.$store.state.images.some(item => item.path === file.path)) {
            this.$store.state.images.push(file);
          }
        } else {
          this.error = true;
        }
      });
      console.log(this.$store.state.images);
    }
    
  }
};
</script>

<style scoped>
.uploadFile {
  text-decoration: none;
  height: 10rem;
  background: #46596f;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.uploadFile input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}

.material-icons {
  transition: all 0.2s ease-in-out;
  font-size: 8rem;
}

.uploadFile:hover {
  -webkit-box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
  -moz-box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
  box-shadow: 0px 0px 15px 2px rgba(19, 59, 89, 1);
}
</style>
