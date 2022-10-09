<template>
<TodoList />
  </template>

<script>
import TodoList from '../components/todo/TodoList'

export default {
    comments: {
        TodoList,
    },
    data() {
        return {};
    },
    components: { TodoList }
};
</script>


<style>
</style>