<template>
  <v-col class="col-12 col-sm-10 col-md-8 col-lg-6">
    <a href="#" class="uploadFile d-flex align-center justify-center">
      <span class="material-icons white--text">cloud_upload</span>
    </a>
  </v-col>
</template>

<script>
export default {};
</script>

<style scoped>
.uploadFile {
  height: 15rem;
  background: #46596f;
  border-radius: 10px;
}

.material-icons {
  font-size: 12rem;
  transition: all 0.35ms ease-in-out;
}

.uploadFile:hover .material-icons {
  font-size: 13rem;
}
</style>
