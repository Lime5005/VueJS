<template>
  <card-style>
    <form class="form-control">
      <div>
        <lable for="title">Title</lable>
        <input id="title" name="title" type="text">
      </div>
      <div>
        <lable for="description">Description</lable>
        <textarea name="description" id="description" rows="3"></textarea>
      </div>
      <div>
        <lable for="link">Link</lable>
        <input id="link" name="link" type="url">
      </div>
      <div>
        <button-style type="submit">Add New Resources</button-style>
      </div>
    </form>
  </card-style>
</template>

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