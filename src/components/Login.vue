<template>
  <v-card class="mx-auto card-login" max-width="400">
    <v-form>
      <v-text-field
        v-model="email"
        label="E-mail"
        solo
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPasword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPasword ? 'text' : 'password'"
        name="input-10-1"
        label="Insira sua senha"
        hint="Senha deve conter 8 caractes ou mais"

        @click:append="showPasword = !showPasword"
      ></v-text-field>


      <v-row align="end" justify="end"> 
        <a  href="">Esqueci minha senha</a>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
          depressed
          class="btn-submit"
          color="primary"
          horizontal
          @click="login()"
        >
          Entrar
        </v-btn>
      </v-row>

      <br />
      <span style="margin-left: 15%">
        Não tem conta?
        <router-link to="/home/sign-in">Faça seu cadastro.</router-link>
      </span>
    </v-form>
  </v-card>
</template>

<script>
import { authUser } from '../services/auth.js'
export default {
  name: "Login",

  data: () => ({
    email: '',
    password: '',
    strength: 0,
    showPasword: false

  }),
  methods: {
    login() {
       this.checkAuth()
    },

    checkAuth() {
      authUser(this.email, this.password).then((response) => {
        const {status} = response
        if (status === 200) {
          // login validado com sucesso
          console.log('----- login!');
          console.log(response.data.user);

          localStorage.userId = response.data.user.id;
          localStorage.userName = response.data.user.name;
          localStorage.userEmail = response.data.user.email;

          localStorage.token = response.data.token

          this.$router.push("dashboard");
        } else {
          // erro na validação
          console.log('----- login não foi realizado');

        }
      }, error => {
        console.log(error)
        alert("Erro ao fazer Login. tente novamente com email e senha válido!");
      })
    }
  },
};
</script>

<style>
  body {
    background: aquamarine;
  }
  .card-login {
    width: 66vh;
    padding: 27px;
    margin: 31vh 34vh 37vh 34vh;
  }
  .v-input__slot{
    border: solid 1px #382d2d42;
  }

  .v-btn {
    
    width: 30vh;
  }
  .row {
    padding: 15px 5px 5px;
  }
  
</style>