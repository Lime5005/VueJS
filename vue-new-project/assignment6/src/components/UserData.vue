<template>
  <form @submit.prevent="addName">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="text" v-model="age">
    </div>
    <button>Add Name</button>
  </form>
</template>

<script>
export default {
  emits: ['add-name'], //可加可不加（所有的emits都列在此处）
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    addName() {
      this.$emit('add-name', this.name, this.age);
    }
  }
}
</script>