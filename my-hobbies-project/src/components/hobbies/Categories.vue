<template>
  <div>
    <base-card>
      <h2>Categories</h2>
      <ul v-for="category in categories" :key="category">
      <li>{{ category.icon }} {{ category.name }}</li>
      </ul>
    </base-card>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>