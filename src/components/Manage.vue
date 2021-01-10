
<template>
  <!-- Listar Ações  -->
  <div id="manage">
    <v-row justify="left">
      <v-col cols="4">
        <v-expansion-panels popout>
          <v-expansion-panel v-for="(asset, i) in assetsList" :key="i">
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="2">
                  {{ asset.code }}
                </v-col>
                <v-col cols="2">
                  <v-icon v-if="i % 2 == 0" color="green darken-2"
                    >trending_down</v-icon
                  >
                  <v-icon v-if="i % 2 != 0" color="red lighten-2 darken-2"
                    >trending_up</v-icon
                  >
                </v-col>

                <v-col cols="4">
                  <span>Variação: </span>
                  <span v-if="i % 2 == 0"> + 0,5 % </span>
                  <span v-if="i % 2 != 0"> - 0,9 % </span>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <vcol cols="4">
                  <v-row>
                    <vcol cols="3" class="d-flex justify-space-between caption">
                      <v-icon color="warning">request_quote</v-icon> Preço
                    </vcol>
                    <vcol cols="3">
                      <span class="subtitle-2">{{ asset.purchasePrice }}</span>
                    </vcol>
                  </v-row>

                  <v-row>
                    <vcol cols="3" class="d-flex justify-space-between caption">
                      <v-icon color="info">today</v-icon> data da Compra</vcol
                    >
                    <vcol cols="3">
                      <span class="subtitle-2">{{
                        asset.purchaseDate.split("T")[0]
                      }}</span>
                    </vcol>
                  </v-row>

                  <v-row>
                    <vcol cols="3" class="d-flex justify-space-between caption">
                      <v-icon color="success">vertical_split</v-icon> Quantidade
                    </vcol>
                    <vcol cols="3">
                      <span class="subtitle-2">{{ asset.amount }}</span>
                    </vcol>
                  </v-row>

                  <v-row>
                    <vcol cols="3" class="d-flex justify-space-between caption">
                      <v-icon color="accent">request_quote</v-icon> Valor na
                      Compra</vcol
                    >
                    <vcol cols="3">
                      <span class="subtitle-2">{{ asset.purchasePrice }}</span>
                    </vcol>
                  </v-row>

                  <v-row>
                    <vcol cols="3" class="d-flex justify-space-between caption">
                      <v-icon color="primary">trending_up</v-icon> total
                      Investido
                    </vcol>
                    <vcol cols="3">
                      <span class="subtitle-2" color="secondary">{{
                        asset.amountInvested
                      }}</span>
                    </vcol>
                  </v-row>
                </vcol>
                <vcol cols="8"> </vcol>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="4">
        <v-card max-width="400" class="mx-auto">
          <ChartDoughnut> </ChartDoughnut>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>


<script>
import axios from "axios/dist/axios";
import ChartDoughnut from "./charts/Bar";

export default {
  components: {
    ChartDoughnut,
  },
  name: "Manage",
  data: () => ({
    assetsList: [],
  }),
  mounted() {
    axios.get("http://localhost:3333/financial-assets").then((response) => {
      this.assetsList = response.data;
    });
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