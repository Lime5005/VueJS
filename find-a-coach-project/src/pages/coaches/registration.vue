<template>
  <section>
    <base-card>
    <h2>Register as A Coach now!!!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>

</template>

<script>
import coachForm from './coachForm.vue'
export default {
  components: {
    coachForm
  }
}
</script>
