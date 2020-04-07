<template>
  <v-card>
    <v-card-title class="headline">You're almost there. Just a few more steps!</v-card-title>
    <v-container>
      <v-row>
        <v-col class="col-11">
          <v-file-input webkitdirectory label="Select your output directory"></v-file-input>
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
      <v-btn color="success" text>Compress!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      ticksLabels: ["low", "medium", "optimal", "high", "extreme"]
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>