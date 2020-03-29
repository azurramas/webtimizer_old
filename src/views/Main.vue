<template>
  <v-container>
    <v-row class="text-center justify-center">
      <v-col cols="12" class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Webtimizer</h1>

        <h2 class="subheading font-weight-light">Compress and optimize your images for web.</h2>
      </v-col>

      <Upload />
    </v-row>
  </v-container>
</template>

<script>
import Upload from "../components/Upload";
export default {
  components: {
    Upload
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {}
  },

  data: () => ({})
};
</script>
