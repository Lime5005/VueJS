<template>
  <div>
    <base-card>
      <h1>Hobbies List</h1>   
      <hobbies-item  v-for="hobby in hobbies" :key="hobby.id"
      :hobby="hobby"></hobbies-item>
    </base-card>
    <base-card>
      <post-new-hobby></post-new-hobby>
    </base-card>
  </div>
</template>

<script>
import HobbiesItem from './HobbiesItem.vue';
import PostNewHobby from './PostNewHobby.vue'
export default {
  props: ['id'],
  components: {
    PostNewHobby,
    HobbiesItem
  },
  created() {
    console.log(this.id);
    console.log(this.$store.getters.hobbies[0]);
    //this.$store.dispatch('filteredHobbies', this.id)
  },
  computed: {
    hobbies() {
      return this.$store.getters.hobbies//.filter(hobby => hobby.categoryId === this.id)
    }
  },
  watch: {
    $route () {
     this.$store.dispatch('filteredHobbies', this.$route.params.id)
   }
}
}
</script>

<style scoped>

li {
  list-style: none;
}

</style>