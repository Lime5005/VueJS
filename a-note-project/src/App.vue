<template>
  <the-header title="Learning Resources"></the-header>
</template>

<script>

import theHeader from './components/layout/theHeader';
export default {
  components: {
    theHeader
  },
  data() {
    return {
      storedResources: [
        {id: '1',
        title: 'Official guide',
        description: 'Vue documentation.',
        link: 'https://vue.org'},
        {
          id: '2',
          title: 'Google',
          description: 'Google search',
          link: 'http://google.com'
        }
      ]
    }
  },

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