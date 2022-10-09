<template>
   <div class="bordered pa-1 d-flex justify-space-between mb-1">
               <div>
                <span class="todo-item" @click="changeStatus(todo.id)"> {{ todo.task }} </span>
                
                </div>
               <div>  <!--v-btn class="ma-2" color="red" dark --> 
                         <v-icon @click="deleteTodo(todo.id)"> {{mdiTrashCanOutline}}  </v-icon>
                         <!--/v-btn--> 
                </div>
        </div>
</template>

<script>
import { mdiTrashCanOutline } from '@mdi/js';
export default {
    props:{
        todo:{
            type: Object,
            require: true,
        }
    },
    data(){
       return {
        mdiTrashCanOutline
       } 
    },
    methods: {
         deleteTodo(id) {
         console.log("delete basıldı", id);
        },
        changeStatus(id) {
         console.log("status", id);
        },
    },
};
</script>

<style scoped>/* hertarafı etkilemesin diye scoped yazıldı*/
    .bordered { 
        border: 1px solid;
        border-radius: 5px;
    }
    .todo-item {
        cursor: pointer;
    }
</style>