<template>
  <v-container>
    <v-card
      class="card-list-task"
      color="#ececec"
      v-for="(task, i) in allTasks"
      :key="i"
      cols="12"
    >
      <v-card-title class="headline"> {{ task.title }} </v-card-title>

      <v-card-subtitle>{{ task.description }}.</v-card-subtitle>

      <v-card-actions>
        <v-btn color="green" text v-if="task.finished"> Opened </v-btn>
        <v-btn text v-if="!task.finished"> Finished </v-btn>
      </v-card-actions>
    </v-card>

    <v-spacer></v-spacer>
    <v-card id="create-task">
        <v-row><h3>Criar tarefa</h3></v-row>  
      <v-row >
        <v-col cols="12" md="4">
          <v-form ref="form">
            <v-text-field v-model="task.title" label="Título"></v-text-field>
          </v-form>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="task.description"
            label="Descrição"
          ></v-text-field>

          <v-checkbox
            v-model="task.finished"
            label="Tarefa comcluída"
          ></v-checkbox>
        </v-col>

        <v-btn color="primary" fab large dark @click="savetask()">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-alert dense text type="success" v-if="createdTask">
          Task Criada com successo!
        </v-alert>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios/dist/axios";

export default {
  name: "Task",
  data() {
    return {
      info: "",
      task: {
        title: "",
        description: "",
        finished: false,
      },
      allTasks: null,
      createdTask: false,
    };
  },
  mounted() {
    axios.get("http://localhost:3333/tasks").then((response) => {
      this.allTasks = response.data;
    });
  },
  methods: {
    savetask() {
      axios.post("http://localhost:3333/task", this.task).then(
        (response) => {
          if (response.status == 200) {
            this.allTasks.push(this.task);

            this.resetForm();
            this.showMessageSucess();
          }
        },
        (error) => {
          console.log("Erro ao fazer requisição: " + error);
        }
      );
    },

    resetForm() {
      this.task.title = "";
      this.task.description = "";
      this.task.finished = false;
    },

    showMessageSucess() {
      this.createdTask = true;
      setTimeout(() => {
        this.createdTask = false;
      }, 2000);
    },
  },
};
</script>

<style>
.card-list-task {
  border-color: rgb(0 0 0);
  border-radius: 0 19px 0px 19px;
  padding: 9px;
  margin-bottom: 1%;
}

#create-task {
  padding: 27px;
}
</style>