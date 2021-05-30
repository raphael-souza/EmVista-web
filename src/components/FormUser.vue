<template>
  
  <v-container>
    <v-card style="    width: 600px;padding: 50px;">
       <v-card-title> Insira seus dados </v-card-title>

    <v-form ref="form" @submit="submitFormuser()"  lazy-validation>
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPasword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPasword ? 'text' : 'password'"
        name="input-10-1"
        label="Insira sua senha"
        hint="Senha deve conter 8 caractes ou mais"
        counter
        :rules="pwdlRules"
        required
        @click:append="showPasword = !showPasword"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :type="showPasword ? 'text' : 'password'"
        label="Insira sua senha novamente"
        counter
        :rules="pwdlRules"
        required
      ></v-text-field>

      <v-btn color="success" :disabled="!formIsValid()" type="submit" class="mr-4">
        Cadastrar
      </v-btn>
        <router-link to="/home"> voltar</router-link>


    </v-form>
    </v-card>
   
  </v-container>
</template>

<script>
import {getToken, saveUser} from '../services/user.js';

export default {
  name: "FormUser",

 data: () => ({
    showPasword: false,
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    nameRules: [
      value => !!value || 'preencha com seu Nome!',
      v => v.length >= 3 || 'Deve conter pelo menos 3 caracteres!',
      
    ],
    emailRules: [
        v => !!v || 'campo email é obrigatório!',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido!',
    ],
    pwdlRules: [
       value => !!value || 'preencha com sua senha!',
       v => v.length >= 8 || 'Deve conter pelo menos 8 caracteres!',
    ],
  }),

  methods: {
    submitFormuser() {
      if (this.formIsValid()) {
        console.log("form inválido")
        return;
      }

      let user = {
        name: this.name,
        password: this.password,
        email: this.email
      }
      saveUser(user).then((response) => {
        const status =  JSON.stringify(response.status)

        if (status) {
          getToken(JSON.stringify(response.data.token));
          this.$router.push("/dashboard");
        } else {
        //  redirecionar para erro no cadastro
        }
      })
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

      return strong
    },
  formIsValid() {
    return this.name && this.password === this.confirmPassword && this.email
  }
  },
    
};
</script>
