<template>
<div class="container">
  <h1>To-Do List</h1>
  <div id="app">
    <div>
      <TodoItem />
      <TodoList />
    </div>
  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    TodoList,
    TodoItem,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
  height: 100%;
  color: #333;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  margin-top: 0;
}

</style>
