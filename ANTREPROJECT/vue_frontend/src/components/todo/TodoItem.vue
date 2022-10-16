<template>
    <div class="bordered pa-1 d-flex justify-space-between mb-1">
      <div>
        <span
          class="todo-item"
          :class="todo.completed ? 'text-decoration-line-through' : ''"
          @click="changeStatus(todo.id)"
          >{{ todo.task }}</span
        >
      </div>
      <div class="d-flex justify-space-between">
        <div>
          <v-icon @click="editTodo(todo.id)"> {{ mdiPencil }} </v-icon>
        </div>
        <div>
          <v-icon @click="deleteTodo(todo.id)"> {{ mdiTrashCanOutline }} </v-icon>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mdiTrashCanOutline, mdiPencil } from "@mdi/js";
  export default {
    props: {
      todo: {
        type: Object,
        require: true,
      },
    },
    data() {
      return {
        mdiTrashCanOutline,
        mdiPencil,
      };
    },
    methods: {
      deleteTodo(id) {
        this.$store.dispatch("todo/deleteTodo", { id, userId: this.todo.userId });
      },
      changeStatus(id) {
        // eslint-disable-next-line no-debugger
        //debugger;
        this.$store.dispatch("todo/updateTodo", {
          id,
          userId: this.todo.userId,
          completed: this.todo.completed,
        });
      },
      editTodo(id) {
        this.$emit("editTodo", id);
      },
    },
  };
  </script>
  
  <style scoped>
  .bordered {
    border: 1px solid;
    border-radius: 5px;
  }
  .todo-item {
    cursor: pointer;
  }
  </style>