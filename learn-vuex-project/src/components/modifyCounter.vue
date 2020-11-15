<template>
  <button @click="addTen({value:10})">Add 10</button>
  <button @click="increment">Add 1</button>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  methods: {
//     addTen() {
//       //this.$store.commit('addTen', {value: 10}); or:
// /*       this.$store.commit({
//         type: 'addTen',
//         value: 10
//       }) */
//       this.$store.dispatch({
//         type: 'addTen',
//         value: 10
//       })
//    }
    ...mapActions('numbers', ['increment', 'addTen'])
  }
}
</script>