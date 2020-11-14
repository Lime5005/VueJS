<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="(user, index) in users" :key="user" @click="removeUser(index)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="newUser">
    <button @click="addUser">Add User</button>
  </div>
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

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* this is a vue class that VUE add for other elements which are not entering or leaving */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>