<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid input" @close="confirmError">
    <template #default>
      <p>Error: at least one input value is invalid.</p>
      <p>Please fill in all the blancs.</p>
      <br>
      <p>(Click the button "OK" or any where outside to close the dialog.)</p>
    </template>
    <template #action>
      <button-style @click="confirmError">OK</button-style>
    </template>
  </base-dialog>
  <card-style>
    <!--只有在form上才能加@submit:-->
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
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    addNewResources() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '' ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResources(enteredTitle, enteredDesc, enteredLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
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