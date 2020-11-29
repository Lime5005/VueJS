<template>
  <header>
    <nav>
      <h1><router-link to="/">MyHobbies</router-link></h1>
      <categories-list></categories-list>
    </nav>
  </header>
</template>

<script>
import CategoriesList from '../hobbies/CategoriesList'
export default {
  components: {
    CategoriesList
  }
}
</script>

<style scoped>

header {
  width: 100%;
  height: 5rem;
  background-color: #0b5761;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav h1 {
  margin: 0;
  color: white
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


header ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

header ul li {
  float: left;
}

h1 a {
  color: white;
  margin: 0;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid  #4cca25;
  border-radius: 0.5rem;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header a {
  text-decoration: none;
  color: #f0ebe7;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  margin: 0 1rem;
}

</style>