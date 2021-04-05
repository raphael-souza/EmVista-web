<template>
  <v-app>
    <v-main>
      <v-app>

        <v-app-bar app>
         <strong>Total:</strong> R$ 196,06
         <strong>Variação:</strong> + R$ 6,06
         <strong> Variação:</strong> + 3,02%

        </v-app-bar>

        <v-navigation-drawer app>
          <v-container style="    
            border: solid 3px #afafaf;
            height: 180px;
            padding: 10px;
            background: #e5e4e4;"
          >
            Area do perfil
          </v-container>
          <!-- -->
          <div class="left-bar">
            <router-link to="/dashboard">Dashboard</router-link>
            <br>
             <router-link to="/dashboard/manage">Meus Ativos</router-link>
            <br>
            <router-link to="/dashboard/new-financial-asset"> Inserir Ativo </router-link>
          </div>

        </v-navigation-drawer>

        <!-- Sizes your content based upon application components -->
        <v-main id="main">
          <!-- Provides the application the proper gutter -->
          <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
            
          </v-container>
        </v-main>

        <v-footer app>
          <!-- -->
        </v-footer>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  
  },

  data: () => ({
    //
  }),

  created () { 
      console.log('criando dashboard')
    
    if (this.checkAuth(localStorage.token)){
      console.log('econtrou o token')
    } else {
      this.goBack();
    }
  },
  methods: {
    checkAuth(token) {
      return token != undefined ? true : false;
    },

    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    }


  }
};
</script>

<style >
.left-bar {
  margin-left: 20px;
  margin-top: 20px;
}
</style>