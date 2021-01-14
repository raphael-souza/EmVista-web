<template>
  <v-card class="mx-auto card-login" max-width="400">
    <v-form>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
        filled
        dense
        rounded
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Senha"
        filled
        dense
        rounded
        required
      ></v-text-field>
      <a style="margin-left: 60%" href="">Esqueci minha senha</a>
      <br />
      <v-btn
        depressed
        style="margin-left: 30%"
        color="primary"
        horizontal
        @click="login()"
      >
        Entrar
      </v-btn>
      <br />
      <span style="margin-left: 15%">
        Não tem conta?
        <router-link to="/home/sign-in">Faça seu cadastro</router-link>
      </span>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
    email: '',
    password: ''
   }
  },
  methods: {
    login() {
      this.$router.push("dashboard");
    },
  },
};
</script>

<style>
.card-login {
  padding: 10px;
}
</style>