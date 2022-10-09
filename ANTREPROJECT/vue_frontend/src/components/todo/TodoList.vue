<template>
    <v-card
      class="mx-auto my-12"
      max-width="374"
    >
    <v-card-title>Todo List</v-card-title>
  
    <v-card-text>
       <div>
            <v-text-field class="todo-input" label="Add Todo"></v-text-field>
       </div>
    </v-card-text>
  
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
        <TodoItem v-for="item in todos" :key="item.id" :todo="item"/>
        
    </v-card-text>
  
      
    </v-card>
  </template>

<script>
import TodoItem from './TodoItem'
export default {
    comments: {
        TodoItem
    },
    data() {
        return {
            todos: [
              {
                 id: "63375acaf720485fb963993e1",
                 userId: "6336afc8a1ced2ccdfb02141",
                 task: "update task 1",
                 completed: true,
              },
              {
                 id: "63375acaf720485fb963993e2",
                 userId: "6336afc8a1ced2ccdfb02141",
                 task: "update task 2",
                 completed: true,
              },
            ]
        };
    },
    components: { TodoItem }
};
</script>

<style scoped>/* hertarafı etkilemesin diye scoped yazıldı*/
    .todo-input { width: 100%;}
    
</style>