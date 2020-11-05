<template>
  <the-header title="Learning Resources"></the-header>
  <the-resources></the-resources>
</template>

<script>
import theResources from './components/resources/theResources';
import theHeader from './components/layout/theHeader';
export default {
  components: {
    theHeader,
    theResources
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
}

body {
  margin: 0;
}
</style>