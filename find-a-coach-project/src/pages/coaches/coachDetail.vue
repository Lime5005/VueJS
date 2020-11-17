<template>
  <section>
    Details of the coach:
    <base-card>
      <h2>{{fullName}}</h2>
      <h3>${{rate}}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
    <!-- if there is a child route, you have to add the router-view on the parent -->
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :jobtype="area"  :title="area">
      </base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>


<script>
export default {
  //how to get the id ? from the router.js, set props: true, get from url
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
    },
    rate() {
      return this.selectedCoach.hourlyRate
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    areas() {
      return this.selectedCoach.areas
    },
    description() {
      return this.selectedCoach.description
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id)
  },
}
</script>

<style>

</style>