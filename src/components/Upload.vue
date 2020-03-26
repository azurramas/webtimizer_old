<template>
  <v-col class="col-12 col-sm-10 col-md-8 col-lg-6">
    <a
      href="#"
      v-on:click="upload"
      class="uploadFile d-flex flex-column align-center justify-center blue-grey--text text--lighten-4"
    >
      <div class="material-icons">cloud_upload</div>
      <p class="font-weight-light">Upload or drop images</p>
    </a>
  </v-col>
</template>

<script>
export default {
  methods: {
    upload: function() {
      const { remote } = require("electron");
      const dialog = remote.dialog;
      dialog.showOpenDialog();
      console.log("test");
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

/* .uploadFile:hover {
  font-size: 110%;
} */
</style>
