<template>
  <card-style>
    <form class="form-control" @submit.prevent="addNewResources">
      <div>
        <lable for="title">Title</lable>
        <input id="title" name="title" type="text" ref="titleInput">
      </div>
      <div>
        <lable for="description">Description</lable>
        <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
      </div>
      <div>
        <lable for="link">Link</lable>
        <input id="link" name="link" type="url" ref="linkInput">
      </div>
      <div>
        <button-style type="submit">Add New Resources</button-style>
      </div>
    </form>
  </card-style>
</template>

<script>
export default {
  inject: ['addResources'],
  methods: {
    addNewResources() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      this.addResources(enteredTitle, enteredDesc, enteredLink);
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem O;
}
</style>