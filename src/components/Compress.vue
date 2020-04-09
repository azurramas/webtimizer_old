<template>
  <v-card>
    <v-card-title class="headline">You're almost there. Just a few more steps!</v-card-title>
    <v-container>
      <v-row>
        <v-col class="col-11">
          <v-file-input
            @change="getFolder"
            @click="onInputClick"
            webkitdirectory
            label="Select your output directory"
          ></v-file-input>
        </v-col>
        <v-col class="col-11">
          <v-subheader>Compression ratio</v-subheader>

          <v-slider :tick-labels="ticksLabels" :max="4" step="1" ticks="always" tick-size="3"></v-slider>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" text @click="closeDialog">Close</v-btn>
      <v-btn color="success" @click="compress" text>Compress!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Compressor from "compressorjs";
export default {
  data() {
    return {
      ticksLabels: ["low", "medium", "optimal", "high", "extreme"],
      exportPath: ""
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    onInputClick: function(e) {
      e.target.value = "";
    },
    getFolder(e) {
      var folder = e.path;
      console.log(folder);
      this.exportPath = folder;
    },
    compress() {
      var fs = require("fs");
      var exportPath = this.exportPath;
      
      this.images.forEach(image => {
        new Compressor(image, {
          quality: 0.5,
          maxWidth: 1920,
          success(result) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(result);
            reader.onload = function() {
              var buffer = new Buffer(reader.result);
              fs.writeFile(exportPath + "\\" + image.name, buffer, {}, err => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log("image saved");
              });
            };
          },
          error(err) {
            console.log(err.message);
          }
        });
      });
    }
  },
  computed: {
    images() {
      return this.$store.getters.getImages;
    }
  }
};
</script>