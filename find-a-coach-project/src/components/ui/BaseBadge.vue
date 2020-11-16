<template>
  <span class="badge" :class="jobtype">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['jobtype', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: rgb(14, 87, 19);
  color: white;
}

.backend {
  background-color: rgb(15, 10, 168);
  color: white;
}

.career {
  background-color: rgb(58, 15, 85);
  color: white;
}
</style>