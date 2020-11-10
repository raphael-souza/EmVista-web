<template>
  <v-row>
    <!-- Tipo de Ativo -->
    <v-col cols="12">
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" class="ma-2" v-bind="attrs" v-on="on">
            Tipo de Ativo
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group v-model="asset.type" color="primary">
            <v-list-item
              v-for="(asset, index) in assetOptions[0]"
              :key="index"
              :value="asset.id"
            >
              <v-list-item-icon>
                <v-icon v-text="asset.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="asset.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-col>

    <v-col cols="10" v-if="asset.type == '1'">
      <!-- Codigo -->
      <v-col cols="12">
        <v-autocomplete
          v-model="asset.code"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Selecione o código"
        ></v-autocomplete>
      </v-col>
      <!-- Data da compra  -->
      <v-col cols="6">
        <v-row>
          <v-date-picker v-model="asset.purchaseDate"></v-date-picker>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-slider
        v-model="asset.amount"
          label="quantidade"
          thumb-label="always"
        ></v-slider>

        <v-row>
          <v-col cols="4">
            <v-subheader>Preço</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              value="00.00"
              prefix="R$"
              v-model="asset.purchasePrice"
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="4">
            <v-subheader>Total Investido</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              prefix="R$"
              v-model="asset.amountInvested"
            ></v-text-field>
          </v-col>
        </v-row>

        
      </v-col>

      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="saveAsset()"
      >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    </v-col>
    

    <v-sheet>{{ asset }} </v-sheet>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      selectedItem: "",
      assetOptions: [],
      asset: {
        type: "",
        code: "",
        purchaseDate: "",
        amount: 1,
        purchasePrice: "",
        amountInvested: 0,
      },

      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
  },
  created() {
    const valueResponse = [
      { id: "1", icon: "mdi-inbox", text: "Ações" },
      { id: "2", icon: "mdi-inbox", text: "Opções" },
      { id: "3", icon: "mdi-inbox", text: "Termo de Ações" },
      { id: "4", icon: "mdi-inbox", text: "Criptomoedas" },
      { id: "52", icon: "mdi-inbox", text: "Poupança" },
      { id: "6", icon: "mdi-inbox", text: "Tesouro Direto" },
      { id: "7", icon: "mdi-inbox", text: "CDB/LCI LCA/LC/LF" },
    ];
    this.assetOptions.push(valueResponse);
    this.assetOptions.push(valueResponse);
    this.assetOptions.push(valueResponse);
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    calculateInvestedValue() {
      this.asset.amountInvested =  this.asset.amount * this.asset.purchasePrice;
    },
    saveAsset() {
      // request this.asset
    }
  },
};
</script>