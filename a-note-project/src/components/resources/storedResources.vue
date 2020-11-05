<template>
  <ul v-for="resource in resources" :key="resource.id">
    <resource-list
    :title="resource.title"
    :description="resource.description"
    :link="resource.link"></resource-list>
  </ul>
</template>

<script>
import resourceList from './resourceList';
export default {
  props: ['resources'],
  components: {
    resourceList
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