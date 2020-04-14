<template>
  <v-card>
    <v-container>
      <v-row class="justify-center">
        <v-card-title class="headline">You're almost there. Just a few more steps!</v-card-title>
        <v-col class="col-11">
          <v-file-input
            :error-messages="inputErrMsg"
            :error="inputErr"
            @change="getFolder"
            @click="onInputClick"
            webkitdirectory
            label="Select your output directory"
          ></v-file-input>
        </v-col>
        <v-col class="col-11">
          <v-subheader>Compression ratio</v-subheader>

          <v-slider
            v-model="compressionRatio"
            :tick-labels="ticksLabels"
            :max="1"
            step="0.25"
            ticks="always"
            tick-size="3"
          ></v-slider>
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
      exportPath: "",
      compressionRatio: 0.5,
      inputErr: false,
      inputErrMsg: ""
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    onInputClick: function(e) {
      e.target.value = "";
      this.inputErr = false;
      this.inputErrMsg = "";
    },
    getFolder(e) {
      var folder = e.path;
      console.log(folder);
      this.exportPath = folder;
    },
    compress() {
      var fs = require("fs");
      var exportPath = this.exportPath;
      var quality = 1 - this.compressionRatio;

      if (exportPath === "") {
        this.inputErr = true;
        this.inputErrMsg = "You must choose an output directory";
        return;
      } else {
        this.$emit("openProgress");
        let length = this.images.length;
        let i = 1;
        let main = this;

        this.images.forEach((image, index) => {
          setTimeout(() => {
            new Compressor(image, {
              quality: quality,
              maxWidth: 1920,
              success(result) {
                var reader = new FileReader();
                reader.readAsArrayBuffer(result);
                reader.onload = function() {
                  var s = image.name;
                  var fileName =
                    s.substring(0, s.lastIndexOf(".")) +
                    "_compressed" +
                    s.substring(s.lastIndexOf("."));
                  var buffer = new Buffer(reader.result);
                  fs.writeFile(
                    exportPath + "\\" + fileName,
                    buffer,
                    {},
                    err => {
                      if (err) {
                        console.error(err);
                        return;
                      }
                      console.log(i);
                      if (i === length) {
                        main.$emit("updateProgress");
                        return;
                      }
                      i++;
                    }
                  );
                };
              },
              error(err) {
                console.log(err.message);
              }
            });
          }, 200 * index);
        });
      }
    }
  },
  computed: {
    images() {
      return this.$store.getters.getImages;
    }
  }
};
</script>