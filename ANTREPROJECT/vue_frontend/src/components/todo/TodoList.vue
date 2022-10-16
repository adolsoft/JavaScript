<template>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>ToDo List</v-card-title>
  
      <v-card-text>
        <div>
          <v-text-field
            v-model="todoText"
            class="todo-input"
            label="Add ToDo"
            @keyup.enter="create"
          ></v-text-field>
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <TodoItem
          v-for="(item, index) in todos"
          :key="index"
          :todo="item"
          @editTodo="handleEdit"
        />
      </v-card-text>
  
      <div v-if="editMode.mode">
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div>
            <v-text-field
              v-model="editMode.todoToBeEdited.task"
              class="todo-input"
              label="Edit ToDo"
              @keyup.enter="updateTodo"
            ></v-text-field>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </template>
  
  <script>
  import TodoItem from "./ToDoItem";
  export default {
    components: {
      TodoItem,
    },
    data() {
      return {
        todoText: "",
        editMode: {
          id: "",
          mode: false,
          todoToBeEdited: {},
        },
      };
    },
    computed: {
      todos() {
        return this.$store.state.todo.todos;
      },
    },
    methods: {
      create() {
        const data = {
          userId: this.$store.state.user.loggedInUser.id,
          task: this.todoText,
        };
        this.$store.dispatch("todo/createTodo", data);
        this.todoText = "";
      },
      handleEdit(id) {
        this.editMode.id = id;
        this.editMode.mode = true;
        this.editMode.todoToBeEdited = this.todos.find((item) => {
          if (item.id == id) {
            return JSON.parse(JSON.stringify(item));
          }
        });
      },
      updateTodo() {
        this.$store.dispatch("todo/updateTodo", {
          id: this.editMode.id,
          userId: this.editMode.todoToBeEdited.userId,
          task: {
            task: this.editMode.todoToBeEdited.task,
          },
        });
        this.editMode.mode = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-input {
    width: 100%;
  }
  .bordered {
    border: 1px solid;
    border-radius: 5px;
  }
  </style>