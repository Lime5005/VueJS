<template>
  <div>
    <section>
      <base-card>
      <h2>Register as A Coach now!!!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import coachForm from './coachForm.vue'
export default {
  components: {
    coachForm
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch('coaches/registerCoach', formData)
      this.$router.replace('/coaches')
    }
  }
}
</script>
