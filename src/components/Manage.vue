
<template>
<!-- Listar Ações  -->
  <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(asset,i) in assetsList"
        :key="i"
      >
        <v-expansion-panel-header><v-icon>equalizer</v-icon> {{asset.code}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <vcol cols="4">
              <v-row>
                <vcol cols="3"> <v-icon>request_quote</v-icon> Preço </vcol>
                <vcol cols="3">
                  <span>{{asset.purchasePrice}}</span>
                </vcol>
              </v-row>

              <v-row>
                <vcol cols="3"> <v-icon>today</v-icon> data da Compra</vcol>
                <vcol cols="3">
                  <span>{{asset.purchaseDate}}</span>
                </vcol>
              </v-row>

              <v-row>
                <vcol cols="3"> <v-icon>vertical_split</v-icon> Quantidade </vcol>
                <vcol cols="3">
                  <span>{{asset.amount}}</span>
                </vcol>
              </v-row>

              <v-row>
                <vcol cols="3"> <v-icon>request_quote</v-icon> </vcol>
                <vcol cols="3">
                  <span>{{asset.purchasePrice}}</span>
                </vcol>
              </v-row>

               <v-row>
                <vcol cols="3"> <v-icon>trending_up</v-icon> total Investido </vcol>
                <vcol cols="3">
                  <span>{{asset.amountInvested}}</span>
                </vcol>
              </v-row>
            </vcol>

            <vcol cols="4">
              Campo do meio 
            </vcol>
            
            <vcol cols="4">
              campo Final
            </vcol>

          </v-row>
          {{ asset | json }}



        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>

</template>


<script>
import axios from "axios/dist/axios";

export default {
  name: "Manage",
  extends: Bar,
  data: () => ({
    assetsList: []
  }),
  mounted() {
     axios.get("http://localhost:3333/financial-assets").then((response) => {
      this.assetsList = response.data;
    });
  },
  methods: {
    getAssets() {

    }
  },
};
</script>