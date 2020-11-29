<template>
  <navigation></navigation>
  <router-view></router-view>
</template>

<script>
import Navigation from './components/ui/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
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
</style>
