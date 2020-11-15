<template>
  <base-container title="Vuex" v-if="userIsAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <modify-counter></modify-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import theCounter from './components/theCounter.vue';
import modifyCounter from './components/modifyCounter.vue';
import favoriteValue from './components/favoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    theCounter,
    modifyCounter,
    favoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      this.$store.dispatch('numbers/increment');
    }
  },
  computed: {
    ...mapGetters(['userIsAuth'])
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