<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a coach</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches
          </router-link>
        </li>
        <li>
          <router-link to="/requests">Requests
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  height: 5rem;
  background-color: #0b1f61;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #aa1aec;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid  #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
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

header ul li a {
  display: block;
  text-align: center;
  padding: 5px;
  margin: 30px;
  text-decoration: none;
}

</style>