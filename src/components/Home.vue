<template>
  <v-container fluid class="container-master">
    <router-view></router-view>

  </v-container>


</template>

<script>
export default {
  name: "Home",

 data () {   
  },
  methods: {
    login() {
      this.$router.push('dashboard')
    }
  }
};
</script>

<style>
  .container-master {
    background: #2193b0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 92vh;
  }
  .card-login {
    padding: 10px
  }
</style>