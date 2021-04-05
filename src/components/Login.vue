<template>
  <v-card class="mx-auto card-login" max-width="400">
    <v-form>
      <v-text-field
        v-model="email"
        label="E-mail"
        solo
      ></v-text-field>

      <VuePassword
        v-model="password"
        :strength="validateStrongPassword()"
        type="password"
        placeholder="Senha"
        required
        outlined
      />
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
        <router-link to="/home/sign-in">Faça seu cadastro</router-link>
      </span>
    </v-form>
  </v-card>
</template>

<script>
import VuePassword from 'vue-password'
import { authUser } from '../services/auth.js'
export default {
  name: "Login",

  components: {
    VuePassword,
  },

  data: () => ({
    email: '',
    password: '',
    strength: 0,

  }),
  methods: {
    login() {
       this.checkAuth()
    },

    validateStrongPassword() {
      let strong = 0
      const pwdLength = this.password.length
      if (pwdLength == 1) {
          strong = 0
      } 
      if (pwdLength > 1 && pwdLength < 3 ) {
        strong = 1
      }
      if (pwdLength == 3) {
        strong = 2
      }
      if (pwdLength > 3 && pwdLength <= 5) {
        strong = 3
      }
      if (pwdLength > 5) {
        strong = 4
      }
      console.log('--- > strong ' + strong)

      return strong
    },

    checkAuth() {
      authUser(this.email, this.password).then((response) => {
        const {status} = response

        if (status === 200) {
          // login validado com sucesso
          localStorage.user = JSON.stringify(response.data.user);
          localStorage.token = response.data.token
          console.log('----- login feito com sucesso!');
          this.$router.push("dashboard");
        } else {
          // erro na validação
          console.log('----- login não foi realizado');

        }
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