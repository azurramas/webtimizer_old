<template>
  <v-card>
    <v-card-title class="headline">Confirm action</v-card-title>
    <v-card-text>Clear all imported images from the selection?</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" text @click="closeDialog">No</v-btn>
      <v-btn color="success" text @click="clearAll">Yes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    clearAll() {
      this.$emit("clearAll");
    }
  }
};
</script>