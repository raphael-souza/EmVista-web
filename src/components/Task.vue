<template>
  <v-container>
    <v-row

      justify="space-between"
    >

    <h3> Criar tarefa </h3>
      <v-col cols="12" md="4">
        <v-form ref="form">
          <v-text-field
            v-model="title"
            :counter="max"
            :rules="rules"
            label="Título"
          ></v-text-field>
        </v-form>
      </v-col>

      <v-col cols="12" md="6">
         <v-text-field
          v-model="description"
          label="Descrição"
        ></v-text-field>
       
        <v-checkbox
          v-model="finished"
          label="Tarefa comcluída"
        ></v-checkbox>
      </v-col>

      <v-btn
        color="primary"
        fab
        large
        dark
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Task",
 
}
</script>