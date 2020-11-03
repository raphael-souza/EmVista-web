<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Recents
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>

       <v-tab href="#tab-4">
        Recents
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-5">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-6">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 6"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text[i].title }}</v-card-text>
          <v-card-text>{{ text[i].description }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        text: [{title: '', description: ''}]
      }
    },
    created() {
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      this.text.push({title: 'Em que ativo você investiu?', description: 'Ações, opções, termo de Ações, Criptomoedas, Poupança, Tesouro Direto, CDB/LCI LCA/LC/LF'});
      
    }
  }
</script>