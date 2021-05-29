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
           <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">
              {{ user.name }}
            </v-card-title>
            <v-card-subtitle>
              email: {{user.email}}
              <br>
              id: {{user.id}}
            </v-card-subtitle>
           
            <br>
          </v-card>


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
    user: {
      name: localStorage.userName || '',
      id: localStorage.userId || '',
      email: localStorage.userEmail || ''
    } 
  }),

  created () {    
    if (this.checkAuth(localStorage.token)){
      console.log('DASHBOARD - econtrou o token')
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