<template>
  <ul v-for="resource in resources" :key="resource.id">
    <resource-list-item
    :title="resource.title"
    :description="resource.description"
    :link="resource.link"></resource-list-item>
  </ul>
</template>

<script>
import resourceListItem from './resourceListItem';
export default {
  inject: ['resources'],
  components: {
    resourceListItem
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>