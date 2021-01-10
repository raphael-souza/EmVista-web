<template>
  <v-app>
    <!-- If using vue-router -->
    <router-view></router-view>
    
    
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>R2S tec.</strong>
      </v-col>
    </v-footer>
  
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
