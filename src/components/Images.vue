<template>
<v-row class="text-center justify-center">
  <v-col class="col-2" :key="image.name"
      v-for="image in this.$store.state.images">
    <v-img transition="fade-transition" 
      height="8rem"
      
      :src="image.path"
    ></v-img>
  </v-col>
  </v-row>
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

<style scoped>
</style>