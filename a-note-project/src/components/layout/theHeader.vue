<template>
  <header>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
header {
  padding: 20px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 23px;
}

header h2 {
  margin: 0;
}
</style>