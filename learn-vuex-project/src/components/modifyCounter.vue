<template>
  <button @click="addTen">Add 10</button>
</template>

<script>
export default {
  methods: {
    addTen() {
      //this.$store.commit('addTen', {value: 10}); or:
      this.$store.commit({
        type: 'addTen',
        value: 10
      })
    }
  }
}
</script>