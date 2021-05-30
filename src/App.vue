<template>
  <v-app class=" template-style">
    <!-- If using vue-router -->
    <div align="center" justify="center">
    <router-view></router-view>

    </div>
    
    
    <v-footer padless style="background: rgb(243, 150, 0);">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>R2S tec.</strong>
      </v-col>
    </v-footer>
  
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
<style >
  template-style {
    
      background: #2193b0;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }

</style>
