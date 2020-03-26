<template>
  <v-app>
    <v-content >
      <Main />
    </v-content>
  </v-app>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
   created () {
      
    },
};
</script>

