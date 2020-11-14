<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <modify-counter></modify-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import theCounter from './components/theCounter.vue';
import modifyCounter from './components/modifyCounter.vue';

export default {
  components: {
    BaseContainer,
    theCounter,
    modifyCounter
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>