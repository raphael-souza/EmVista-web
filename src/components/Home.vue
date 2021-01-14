<template>
  <v-container fluid style="min-height: 92vh;">
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
  .card-login {
    padding: 10px
  }
</style>