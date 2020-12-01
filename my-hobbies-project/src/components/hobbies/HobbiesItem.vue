<template>
  <div>
    <li>{{hobby.categoryId}}</li>
    <li>{{hobby.title}}</li>
    <li>{{hobby.description}}</li>
    <li>{{hobby.rating}}</li>
    <br>
  </div>
</template>

<script>
export default {
  props: ['hobby'],
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>