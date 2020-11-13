<template>
  <ul>
    <li v-for="(user, index) in users" :key="user" @click="removeUser(index)">{{ user }}</li>
  </ul>
  <input type="text" ref="newUser">
  <button @click="addUser">Add User</button>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Joe', 'Trump', 'Lili', 'James']
    }
  },
  methods: {
    removeUser(index) {
      return this.users.splice(index, 1)
    },
    addUser() {
      const newUser = this.$refs.newUser.value;
      this.users.unshift(newUser);
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li,
input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
}
</style>