<template>
  <v-card>
    <v-container>
      <v-row class="justify-center">
        <v-card-title class="headline">{{finished.message}}</v-card-title>
        <v-progress-linear v-if="!finished.button" indeterminate></v-progress-linear >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="finished.button" color="success" text @click="closeDialog">Finish!</v-btn>
        </v-card-actions>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["finished"],
  data() {
    return {
     
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  },
  computed: {}
};
</script>