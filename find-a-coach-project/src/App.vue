<template>
  <navigation></navigation>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Navigation from './components/layout/Navigation'
export default {
  components: {
    Navigation
  },
  created() {
    this.$store.dispatch('stayLogin')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'IBM Plex Sans', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px); /* higher */
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-active {
  transition: all 0.2s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>