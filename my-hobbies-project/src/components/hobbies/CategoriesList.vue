<template>
  <div>
      <a v-for="category in categories" :key="category" :href="`/categories/${category.id}`">
      {{ category.icon }} {{ category.name }}
      </a>
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
a {
  margin-right: 10px;
  text-decoration: none;
}
</style>