<template>
  <li>
    <card-style>
        <header>
          <h3>{{title}}</h3>
          <!--不是直接加上@event，而是用provide, inject:-->
          <button-style mode="flat" @click="deleteResource(id)">Delete</button-style>
        </header>
      
      <p>{{description}}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </card-style>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource']
}
</script>

<style scoped>

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: orangered;
}

a:hover,
a:active {
  color: orange;
}


</style>