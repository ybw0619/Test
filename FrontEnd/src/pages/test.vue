<template>
  <div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" :key="todo">{{ todo.text }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>