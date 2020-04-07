<template>
  <v-container>
    <v-row class="text-center justify-center">
      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Webtimizer</h1>

        <h2 class="subheading font-weight-light">Compress and optimize your images for web.</h2>
      </v-col>
    </v-row>
    <v-row class="text-center justify-center">
      <Upload />
    </v-row>
    <v-row v-if="this.$store.state.images.length" class="text-center transition justify-center">
      <v-col class="col-6 col-sm-4 col-md-2">
        <v-btn class="mt-4" @click="clearDialog = true" color="error">Clear All</v-btn>
      </v-col>
      <v-col class="col-6 col-sm-4 col-md-2">
        <v-btn @click="compressDialog = true" class="mt-4" color="success">Compress!</v-btn>
      </v-col>
    </v-row>
    
    <Images class="transition" />

    <v-dialog persistent v-model="clearDialog" style="background-color: #0c233e;" max-width="500">
      <ClearDialog @closeDialog="clearDialog = false" @clearAll="clearImages" />
    </v-dialog>

    <v-dialog persistent v-model="compressDialog" style="background-color: #ffff;" max-width="800">
      <Compress @closeDialog="compressDialog = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import Upload from "../components/Upload";
import Images from "../components/Images";
import ClearDialog from "../components/ClearDialog";
import Compress from "../components/Compress";

export default {
  data() {
    return {
      clearDialog: false,
      compressDialog: false
    };
  },
  components: {
    Upload,
    Images,
    ClearDialog,
    Compress
  },
  mounted() {},
  methods: {
    clearImages: function() {
      this.$store.commit("clearAll");
      this.clearDialog = false;
    }
  }
};
</script>

<style scoped>
.transition {
  transition: all 0.3s ease-in-out;
}
</style>
