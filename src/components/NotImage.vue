<template>
  <v-card>
    <v-card-title class="headline">File type not an image!</v-card-title>
    <v-card-text>One or more files were detected not to be an image file type. Please only import image file types.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog">Okay</v-btn>
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