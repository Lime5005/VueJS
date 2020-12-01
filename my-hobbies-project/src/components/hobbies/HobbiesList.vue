<template>
  <div>
    <base-card>
      <h1>Hobbies List</h1>
        <ul v-for="hobby in hobbies" :key="hobby.id">
          <li>{{hobby.categoryId}}</li>
          <li>{{hobby.title}}</li>
          <li>{{hobby.description}}</li>
          <li>{{hobby.rating}}</li>
        </ul>
    </base-card>
    <base-card>
      <post-new-hobby></post-new-hobby>
    </base-card>
  </div>
</template>

<script>
import PostNewHobby from './PostNewHobby.vue'
export default {
  props: ['id'],
  components: {
    PostNewHobby
  },
  created() {
    console.log(this.id);
    console.log(this.$store.getters.hobbies);
    const allHobbies = this.$store.getters.hobbies
    this.hobbies =  allHobbies.filter( hobby => hobby.categoryId === this.id)
/*     this.hobbies = this.$store.getters.hobbies.filter(hobby => hobby.categoryId === this.id)  */  
  },
  computed: {
    hobbies() {
      return this.$store.getters.hobbies
    }
  }
}
</script>

<style scoped>

li {
  list-style: none;
}

</style>