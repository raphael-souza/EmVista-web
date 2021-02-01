<template>
  <v-row>   
    <v-card class="card-new-asset" >
      <v-card-title> Novo Investimento </v-card-title>

      <v-row>
        <v-select
          v-model="asset.type"
          :hint="asset.text"
          :items="assetOptions"
          item-text="text"
          item-value="id"
          label="Tipo de ativo"
          persistent-hint
          return-object
          single-line
          dense
          filled
          rounded
        ></v-select>
        <!-- <v-menu transition="scroll-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" class="ma-2" v-bind="attrs" v-on="on">
              Tipo de Ativo
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group v-model="asset.type" color="primary">
              <v-list-item
                v-for="(asset, index) in assetOptions"
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
        </v-menu> -->
      </v-row>

      <v-row >
        <v-autocomplete
          v-model="asset.code"
          :loading="loading"
          :items="items"
          item-text="fullName"
          item-value="code"
          :search-input.sync="search"
          cache-items
          dense
          filled
          rounded
          label="Código do Ativo"
        ></v-autocomplete>
      </v-row>

      <v-row>
        <v-text-field
          label="Banco ou Corretora"
          v-model="asset.broker"
          dense
          filled
          rounded
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          dense
          filled
          rounded
          prefix="R$"
          label="Cotação"
          type="decimal"
           v-model="asset.purchasePrice"
        ></v-text-field>
      </v-row>

      <v-row>
        <v-col cols="7">
          <v-text-field
            label="Data"
            v-model="asset.purchaseDate"
            dense
            filled
            rounded
            type="date"
          >
          </v-text-field>
        </v-col>

        <v-col cols="5">
          <v-text-field
            dense
            filled
            rounded
            label="Unidades"
            v-model="asset.amount"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-text-field
          dense
          filled
          rounded
          prefix="R$"
          type="decimal"
          label="Custo Operacional"
          v-model="asset.amountInvested"
        ></v-text-field>
      </v-row>
      <v-btn class="mx-2" dark color="primary" @click="saveAsset()">
        Finalizar 
      </v-btn>
    <br>
    <v-sheet style="font-size: 12px;     background: bisque;">{{ asset }} </v-sheet>
    <div class="text-center">
      <v-progress-circular
        v-if="inProgress"
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
      
      <div v-if="messageConfirmSavedAsset.show">
        <label color="light-green lighten-2">{{ messageConfirmSavedAsset.message }}</label>
      </div>

    </div>
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
        assetOptions: [
        { id: "1", icon: "mdi-inbox", text: "Ações" },
        { id: "2", icon: "mdi-inbox", text: "Opções" },
        { id: "3", icon: "mdi-inbox", text: "Termo de Ações" },
        { id: "4", icon: "mdi-inbox", text: "Criptomoedas" },
        { id: "52", icon: "mdi-inbox", text: "Poupança" },
        { id: "6", icon: "mdi-inbox", text: "Tesouro Direto" },
        { id: "7", icon: "mdi-inbox", text: "CDB/LCI LCA/LC/LF" },
      ],
      asset: {
        type: {type: 1, text: "Ações"},
        code: "",
        broker: "",
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
        { name: "AMBEV S/A", code: "ABEV3", fullName: "ABEV3 - AMBEV S/A" },
        { name: "AZUL", code: "AZUL4", fullName: "AZUL4 - AZUL" },
        { name: "B2W DIGITAL", code: "BTOW3", fullName: "BTOW3 - B2W DIGITAL" },
        { name: "B3", code: "B3SA3", fullName: "B3SA3 - B3" },
        { name: "BB SEGURIDADE", code: "BBSE3", fullName: "BBSE3 - BB SEGURIDADE" },
        { name: "BR MALLS PAR", code: "VRML3", fullName: "VRML3 - BR MALLS PAR" },
        { name: "BRADESCO", code: "BBDC4", fullName: "BBDC4 - BRADESCO" },
        { name: "BRADESCO", code: "BBDC3", fullName: "BBDC3 - BRADESCO" },
        { name: "BRADESPAR", code: "BRAP4", fullName: "BRAP4 - BRADESPAR" },
        { name: "BANCO DO BRASIL", code: "BBAS3", fullName: "BBAS3 - BANCO DO BRASIL" },
        { name: "BRASKEM", code: "BRKM5", fullName: "BRKM5 - BRASKEM" },
        { name: "BRF S/A", code: "BRFS3", fullName: "BRFS3 - BRF S/A" },
        { name: "CCR S/A", code: "CCRO3", fullName: "CCRO3 - CCR S/A" },
        { name: "CEMIG", code: "CMIG4", fullName: "CMIG4 - CEMIG" },
        { name: "CIELO", code: "CIEL3", fullName: "CIEL3 - CIELO" },
        { name: "COSAN", code: "CSAN3", fullName: "CSAN3 - COSAN" },
        { name: "CVC BRASIL", code: "CVCB3", fullName: "CVCB3 - CVC BRASIL" },
        { name: "CYRELA REALT", code: "CYRE3", fullName: "CYRE3 - CYRELA REALT" },
        { name: "ECORODOVIAS", code: "ECOR3", fullName: "ECOR3 - ECORODOVIAS" },
        { name: "ELETROBRAS", code: "ELET3", fullName: "ELET3 - ELETROBRAS" },
        { name: "ELETROBRAS", code: "ELET6", fullName: "ELET6 - ELETROBRAS" },
        { name: "EMBRAER", code: "EMBR3", fullName: "EMBR3 - EMBRAER" },
        { name: "ENERGIAS BR", code: "ENBR3", fullName: "ENBR3 - ENERGIAS BR" },
        { name: "ENGIE BRASIL", code: "ENGIE3", fullName: "ENGIE3 - ENGIE BRASIL" },
        { name: "EQUATORIAL", code: "EQTL3", fullName: "EQTL3 - EQUATORIAL" },
        { name: "ESTACIO PART", code: "YDUQ3", fullName: "YDUQ3 - ESTACIO PART" },
        { name: "FLEURY", code: "FLRY3", fullName: "FLRY3 - FLEURY" },
        { name: "GERDAU", code: "GGBR4", fullName: "GGBR4 - GERDAU" },
        { name: "GERDAU MET", code: "GOAU4", fullName: "GOAU4 - GERDAU MET" },
        { name: "GOL", code: "GOLL4", fullName: "GOLL4 - GOL" },
        { name: "HYPERA", code: "HYPE3", fullName: "HYPE3 - HYPERA" },
        { name: "IGUATEMI", code: "IGTA3", fullName: "IGTA3 - IGUATEMI" },
        { name: "IRB BRASIL RE", code: "IRBR3", fullName: "IRBR3 - IRB BRASIL RE" },
        { name: "ITAUSA", code: "ITSA4", fullName: "ITSA4 - ITAUSA" },
        { name: "ITAU UNIBANCO", code: "ITUB4", fullName: "ITUB4 - ITAU UNIBANCO" },
        { name: "JBS", code: "JBSS3", fullName: "JBSS3 - JBS" },
        { name: "KLABIN S/A", code: "KLBN11", fullName: "KLBN11 - KLABIN S/A" },
        { name: "KROTON", code: "KROT3", fullName: "KROT3 - KROTON" },
        { name: "LOCALIZA", code: "RENT3", fullName: "RENT3 - LOCALIZA" },
        { name: "LOJAS AMERICANAS", code: "LAME4", fullName: "LAME4 - LOJAS AMERICANAS" },
        { name: "LOJAS RENNER", code: "LREN3", fullName: "LREN3 - LOJAS RENNER" },
        { name: "MAGAZINE LUIZA", code: "MGLU3", fullName: "MGLU3 - MAGAZINE LUIZA" },
        { name: "MARFRIG", code: "MRFG3", fullName: "MRFG3 - MARFRIG" },
        { name: "MRV", code: "MRVE3", fullName: "MRVE3 - MRV" },
        { name: "MULTIPLAN", code: "MULT3", fullName: "MULT3 - MULTIPLAN" },
        { name: "NATURA", code: "NATU3", fullName: "NATU3 - NATURA" },
        { name: "PÃO DE AÇÚCAR - CBD", code: "PCAR4", fullName: "PCAR4 - PÃO DE AÇÚCAR - CBD" },
        { name: "PETROBRAS", code: "PETR4", fullName: "PETR4 - PETROBRAS" },
        { name: "PETROBRAS", code: "PETR3", fullName: "PETR3 - PETROBRAS" },
        { name: "PETROBRAS BR", code: "BRDT3", fullName: "BRDT3 - PETROBRAS BR" },
        { name: "QUALICORP", code: "QUAL3", fullName: "QUAL3 - QUALICORP" },
        { name: "RAIADROGASIL", code: "RADL3", fullName: "RADL3 - RAIADROGASIL" },
        { name: "RUMO S/A", code: "RAIL3", fullName: "RAIL3 - RUMO S/A" },
        { name: "SABESP", code: "SBSP3", fullName: "SBSP3 - SABESP" },
        { name: "SANTANDER BR", code: "SANB11", fullName: "SANB11 - SANTANDER BR" },
        { name: "SID NACIONAL", code: "CSNA3", fullName: "CSNA3 - SID NACIONAL" },
        { name: "SMILES", code: "SMLS3", fullName: "SMLS3 - SMILES" },
        { name: "SUZANO S/A", code: "SUZB5", fullName: "SUZB5 - SUZANO S/A" },
        { name: "TAESA", code: "TAEE11", fullName: "TAEE11 - TAESA" },
        { name: "TELEF BRASIL", code: "VIVT4", fullName: "VIVT4 - TELEF BRASIL" },
        { name: "TIM PART S/A", code: "TIMP3", fullName: "TIMP3 - TIM PART S/A" },
        { name: "ULTRAPAR", code: "UGPA3", fullName: "UGPA3 - ULTRAPAR" },
        { name: "USIMINAS", code: "USIM5", fullName: "USIM5 - USIMINAS" },
        { name: "VALE", code: "VALE3", fullName: "VALE3 - VALE" },
        { name: "VIA VAREJO", code: "VVAR3", fullName: "VVAR3 - VIA VAREJO" },
        { name: "WEG", code: "WEGE3", fullName: "WEGE3 - WEG" },
      ],
      inProgress: false,
      messageConfirmSavedAsset:{show: false, message: ''}
    };
  },
  created() {
   
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
      this.inProgress = true;
      axios.post( "http://localhost:3333/financial-asset", this.asset).then(
        (response) => {
          if (response) {
            this.inProgress = false;
            this.messageConfirmSavedAsset.show = true;
            this.messageConfirmSavedAsset.message = 'Ativo salvo com sucesso!';
          }
        },
        (error) => {
          this.messageConfirmSavedAsset.message = "Erro ao salvar, tente mais tarde. :(";
          console.log(error);
        }

      );

      this.resetForm();
      setTimeout(() => this.messageConfirmSavedAsset.show = false, 2000);

    },
    resetForm() {
       this.asset = {
        type: {type: 1, text: "Ações"},
        code: "",
        broker: "",
        purchaseDate: "",
        amount: 1,
        purchasePrice: "",
        amountInvested: 0,
      }
    },

  },
};
</script>

<style >
  .card-new-asset {
    padding: 50px;
    width: 440px;
    height: 700px;
  }
</style>