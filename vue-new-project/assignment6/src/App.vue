<template>
  <section class="center-screen">
    <active-user
    :username="newName.name" :userage="newName.age"></active-user>
    <user-data @add-name="addName"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newName: {
        name: 'Max',
        age: 22
      }
    }
  },
  methods: {
    addName(name, age) {
      this.newName = {
        name: name,
        age: +age // age is String in UserData, but Number in ActiveUser, + convert it from string to number
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>