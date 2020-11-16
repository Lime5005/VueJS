<template>
  <navigation></navigation>
  <router-view></router-view>
</template>

<script>
import Navigation from './components/layout/Navigation'
export default {
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