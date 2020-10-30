<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">emVI$TA</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-app>
        <v-navigation-drawer app>
          <!-- -->
           <router-link to="/HelloWorld">Hello</router-link>
           <br>
           <router-link to="/Task">Task</router-link>
        </v-navigation-drawer>

        <v-app-bar app>
          <!-- -->
           <router-link to="/foo">Go to Foo</router-link>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
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
};
</script>
