<template>
  <v-card>
    <v-card-title class="headline">File type not supported.</v-card-title>
    <v-card-text>One or more files were detected not to be an image. Please only import image file types.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>