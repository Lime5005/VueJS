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
@import url('https://fonts.googleapis.com/css2?family=Sura&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Sura', serif;
}

body {
  margin: 0;
}
</style>