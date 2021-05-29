<template>
  <v-app>
    <v-main>
      <v-app>

        <v-app-bar app>
         <strong>Total:</strong> R$ 196,06
         <strong>Variação:</strong> + R$ 6,06
         <strong> Variação:</strong> + 3,02%

        </v-app-bar>

        <v-navigation-drawer app class="side-bar" dark>
           <v-card class="side-bar" >
            <v-card-title class=" headline">
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
          <div class="item-menu">
            
            <v-row class="item-row"> <router-link to="/dashboard"><span> Dashboard </span> </router-link> </v-row>
            <v-row class="item-row"><router-link to="/dashboard/manage"><span>Meus Ativos</span></router-link> </v-row>
            <v-row class="item-row"><router-link to="/dashboard/new-financial-asset"><span> Inserir Ativo </span></router-link> </v-row>
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
span {
    border-left-style: inset;
    border-left-color: #f6f3f2;
    border-left-width: 3px;
    padding: 2px 9px;
    color: #ececec;
    font-size: larger;
    cursor: pointer;
    font-style: initial;
    
  }

  .item-row:hover {
    background: rgba(177, 177, 180, 0.103);
  }
  a { 
    color: inherit;
    text-decoration: none;
  }

.item-menu {
  margin-left: 20px;
  margin-top: 20px;
  
}
#main {
  background-color: rgba(229,231,235)
}
.side-bar {
  background-color: rgba(17,24,39) !important;
  color: #ececec;
}
</style>