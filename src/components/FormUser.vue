<template>
  <v-container>
    <v-card style="    width: 600px;padding: 50px;">
       <v-card-title> Insira seus dados </v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="15"
        label="Nome"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Insira sua senha"
        hint="Senha deve conter 8 caractes ou mais"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Insira sua senha novamente"
        counter
      ></v-text-field>

      <v-btn color="success" @click="submitFormuser()" class="mr-4">
        Cadastrar
      </v-btn>
        <router-link to="/home"> voltar</router-link>


    </v-form>
    </v-card>
   
  </v-container>
</template>

<script>
import {saveUser} from '../services/user.js';
export default {
  name: "FormUser",

 data: () => ({
    show1: false,
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),

  methods: {
    submitFormuser() {
      let user = {
        name: this.name,
        password: this.password,
        email: this.email
      }
     saveUser(user).then((response) => {
       console.log(`------> ${response}`)
     })
    }
  },
    
};
</script>
