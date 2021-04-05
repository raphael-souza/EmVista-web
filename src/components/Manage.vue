
<template>
  <!-- Listar Ações  -->
  <div id="manage">
    <v-row>
      <v-col cols="4">
        <!-- detalhamento dos ativos  -->
        <v-card  v-if="assetsList.length > 0"
          height="502px"
          align="center" 
          justify="center"
        >
          <v-card-title> Detalhamento de ativos</v-card-title>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(asset, i) in assetsList" :key="i">
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="2">
                    {{ asset.code }}
                  </v-col>
                  <v-col cols="2">
                    <v-icon v-if="i % 2 == 0" color="green darken-2"
                      >trending_up</v-icon
                    >
                    <v-icon v-if="i % 2 != 0" color="red lighten-2 darken-2"
                      >trending_down</v-icon
                    >
                  </v-col>

                  <v-col cols="4" style="font-size: small">
                    <span>Variação: </span>
                    <span v-if="i % 2 == 0"> +0,5% </span>
                    <span v-if="i % 2 != 0"> -0,9% </span>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="6" class="d-flex justify-space-between caption">
                    <v-icon color="warning">request_quote</v-icon> Preço
                  </v-col>
                  <v-col cols="6">
                    <span class="subtitle-2">{{ asset.purchasePrice }}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6" class="d-flex justify-space-between caption">
                    <v-icon color="info">today</v-icon> data da Compra</v-col
                  >
                  <v-col cols="6">
                    <span class="subtitle-2">{{
                      asset.purchaseDate.split("T")[0]
                    }}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6" class="d-flex justify-space-between caption">
                    <v-icon color="success">vertical_split</v-icon> Quantidade
                  </v-col>
                  <v-col cols="6">
                    <span class="subtitle-2">{{ asset.amount }}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6" class="d-flex justify-space-between caption">
                    <v-icon color="accent">request_quote</v-icon> Valor na
                    Compra</v-col
                  >
                  <v-col cols="6">
                    <span class="subtitle-2">{{ asset.purchasePrice }}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6" class="d-flex justify-space-between caption">
                    <v-icon color="primary">trending_up</v-icon> total Investido
                  </v-col>
                  <v-col cols="6">
                    <span class="subtitle-2" color="secondary">{{
                      asset.amountInvested
                    }}</span>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>

        <!-- detalhamento de ativos vazio -->
        <v-card 
          v-if="assetsList.length == 0" 
          height="502px"
          align="center" 
          justify="center"
        >
         <v-card-title> você ainda possui ativos cadastrados.</v-card-title>

          <v-icon size="50" color="gray">add_circle</v-icon>
        </v-card>

      </v-col>

      <v-col cols="4">
        <v-card  class="mx-auto">
          <v-card-title>Distribuição na carteira</v-card-title>
          <ChartDoughnut v-bind:assetList="assetsList"> </ChartDoughnut>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import ChartDoughnut from "./charts/Doughnut";
import { getFinAssetByUserId } from '../services/financialAsset.js'
export default {
  components: {
    ChartDoughnut,
  },
  name: "Manage",
  data: () => ({
    assetsList: [],
  }),
  beforeMount() {
    
  },
  mounted() {},
  created() {
    getFinAssetByUserId('8f331b9e-1333-4288-9c54-4c1e510392aa').then((response) => {
      this.assetsList = response.data;
    });
    console.log("criou aqui Manage - inserindo ativos - " +  this.assetsList);
  },
  methods: {
    getAssets() {},
  },
};
</script>

<style >
.subtitle-2 {
  padding: 2px 0px 0px 7px;
}
.caption {
  padding: 2px;
}
.v-icon {
  font-size: 17px;
  color: #909192;
  margin-right: 2px;
}
</style>