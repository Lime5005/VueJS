<template>
  <h3>{{ counter }}</h3>
  <p>My favorite numbers....</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //return this.$store.state.counter * 2;
      //return this.$store.getters.normalizedCounter;
      return this.$store.getters['numbers/normalizedCounter']
    }
  },
}
</script>