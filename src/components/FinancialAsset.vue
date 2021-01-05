<template>
  <v-row>
    <!-- Tipo de Ativo
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
     
      <v-col cols="12">
        <v-autocomplete
          v-model="asset.code"
          :loading="loading"
          :items="items"
          item-text="name"
          item-value="code"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Selecione o código"
        ></v-autocomplete>
      </v-col>
      <v-col cols="6">
        <v-row>
          <span>Data da compra</span>
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

      <v-btn class="mx-2" fab dark color="indigo" @click="saveAsset()">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-col> -->

    <v-card class="card-new-asset" >
      <v-card-title> Novo Investimento </v-card-title>
      <v-list-item-subtitle>Escolha o novo investimento</v-list-item-subtitle>
      <v-row justify="space-around">
        <v-text-field
          label="Nome do Papel"
        ></v-text-field>

        <v-autocomplete
          v-model="asset.code"
          :loading="loading"
          :items="items"
          item-text="name"
          item-value="code"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Selecione o código"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-text-field
          label="Banco ou Corretora"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          label="Data da Operação"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          label="Cotação"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          label="Unidades"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          label="Custo Operacional"
        ></v-text-field>
      </v-row>

    params Request
    <v-sheet>{{ asset }} </v-sheet>

    </v-card>
  </v-row>


  

</template>
<script>
import axios from "axios/dist/axios";

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
      assetsListB3: [
        { name: "AMBEV S/A", code: "ABEV3" },
        { name: "AZUL", code: "AZUL4" },
        { name: "B2W DIGITAL", code: "BTOW3" },
        { name: "B3", code: "B3SA3" },
        { name: "BB SEGURIDADE", code: "BBSE3" },
        { name: "BR MALLS PAR", code: "VRML3" },
        { name: "BRADESCO", code: "BBDC4" },
        { name: "BRADESCO", code: "BBDC3" },
        { name: "BRADESPAR", code: "BRAP4" },
        { name: "BANCO DO BRASIL", code: "BBAS3" },
        { name: "BRASKEM", code: "BRKM5" },
        { name: "BRF S/A", code: "BRFS3" },
        { name: "CCR S/A", code: "CCRO3" },
        { name: "CEMIG", code: "CMIG4" },
        { name: "CIELO", code: "CIEL3" },
        { name: "COSAN", code: "CSAN3" },
        { name: "CVC BRASIL", code: "CVCB3" },
        { name: "CYRELA REALT", code: "CYRE3" },
        { name: "ECORODOVIAS", code: "ECOR3" },
        { name: "ELETROBRAS", code: "ELET3" },
        { name: "ELETROBRAS", code: "ELET6" },
        { name: "EMBRAER", code: "EMBR3" },
        { name: "ENERGIAS BR", code: "ENBR3" },
        { name: "ENGIE BRASIL", code: "ENGIE3" },
        { name: "EQUATORIAL", code: "EQTL3" },
        { name: "ESTACIO PART", code: "YDUQ3" },
        { name: "FLEURY", code: "FLRY3" },
        { name: "GERDAU", code: "GGBR4" },
        { name: "GERDAU MET", code: "GOAU4" },
        { name: "GOL", code: "GOLL4" },
        { name: "HYPERA", code: "HYPE3" },
        { name: "IGUATEMI", code: "IGTA3" },
        { name: "IRB BRASIL RE", code: "IRBR3" },
        { name: "ITAUSA", code: "ITSA4" },
        { name: "ITAU UNIBANCO", code: "ITUB4" },
        { name: "JBS", code: "JBSS3" },
        { name: "KLABIN S/A", code: "KLBN11" },
        { name: "KROTON", code: "KROT3" },
        { name: "LOCALIZA", code: "RENT3" },
        { name: "LOJAS AMERICANAS", code: "LAME4" },
        { name: "LOJAS RENNER", code: "LREN3" },
        { name: "MAGAZINE LUIZA", code: "MGLU3" },
        { name: "MARFRIG", code: "MRFG3" },
        { name: "MRV", code: "MRVE3" },
        { name: "MULTIPLAN", code: "MULT3" },
        { name: "NATURA", code: "NATU3" },
        { name: "PÃO DE AÇÚCAR - CBD", code: "PCAR4" },
        { name: "PETROBRAS", code: "PETR4" },
        { name: "PETROBRAS", code: "PETR3" },
        { name: "PETROBRAS BR", code: "BRDT3" },
        { name: "QUALICORP", code: "QUAL3" },
        { name: "RAIADROGASIL", code: "RADL3" },
        { name: "RUMO S/A", code: "RAIL3" },
        { name: "SABESP", code: "SBSP3" },
        { name: "SANTANDER BR", code: "SANB11" },
        { name: "SID NACIONAL", code: "CSNA3" },
        { name: "SMILES", code: "SMLS3" },
        { name: "SUZANO S/A", code: "SUZB5" },
        { name: "TAESA", code: "TAEE11" },
        { name: "TELEF BRASIL", code: "VIVT4" },
        { name: "TIM PART S/A", code: "TIMP3" },
        { name: "ULTRAPAR", code: "UGPA3" },
        { name: "USIMINAS", code: "USIM5" },
        { name: "VALE", code: "VALE3" },
        { name: "VIA VAREJO", code: "VVAR3" },
        { name: "WEG", code: "WEGE3" },
      ],
    };
  },
  created() {
    const valueResponse = [
      { id: "1", icon: "mdi-inbox", text: "Ações" },
      // { id: "2", icon: "mdi-inbox", text: "Opções" },
      // { id: "3", icon: "mdi-inbox", text: "Termo de Ações" },
      // { id: "4", icon: "mdi-inbox", text: "Criptomoedas" },
      // { id: "52", icon: "mdi-inbox", text: "Poupança" },
      // { id: "6", icon: "mdi-inbox", text: "Tesouro Direto" },
      // { id: "7", icon: "mdi-inbox", text: "CDB/LCI LCA/LC/LF" },
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
        this.items = this.assetsListB3.filter((e) => {
          return (e.name || "").toLowerCase().indexOf((v.name || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
    calculateInvestedValue() {
      this.asset.amountInvested = this.asset.amount * this.asset.purchasePrice;
      console.log('-------- > ' +  this.asset.amountInvested )
    },
    saveAsset() {
      // request this.asset
      console.log('save my assets')
      axios.post("http://localhost:3333/financial-asset", this.asset).then(
        (response) => {
          if (response) console.log('ok');
        },
        (error) => {
          console.log('error Save Financial Asset - ' + error );
        }
      );
    },
  },
};
</script>

<style >
  .card-new-asset {
    padding: 50px;
  }
</style>