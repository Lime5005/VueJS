<template>
  <form @submit.prevent="submitAddContact">
    <div>
      <label>Name:</label>
      <input type="text" v-model="inputName">
    </div>
    <div>
      <label>PhoneNumber:</label>
      <input type="tel" v-model="inputPhone">
    </div>
    <div>
      <label>Email:</label>
      <input type="email" v-model="inputEmail">
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      inputName: '',
      inputPhone: '',
      inputEmail: ''
    }
  },
  methods: {
    submitAddContact() {
      this.$emit('add-contact', this.inputName, this.inputPhone, this.inputEmail);
    }
  }
}
</script>