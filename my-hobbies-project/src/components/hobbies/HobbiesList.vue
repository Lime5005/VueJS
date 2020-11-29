<template>
  <div>
    <base-card>
      <h1>Hobbies List</h1>
    </base-card>
    <base-card>
      <post-new-hobby></post-new-hobby>
    </base-card>
  </div>
</template>

<script>
import PostNewHobby from './PostNewHobby.vue'
export default {
  components: {
    PostNewHobby
  }
}
</script>