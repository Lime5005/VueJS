<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError"> <!-- if error is truthy, it's converted a String into a real Boolean -->
    <p>{{ error }}</p>
  </base-dialog>
  <section>
      <base-card>
        <header>
          <h2>Requests received:</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequest && !isLoading">
          <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
        </ul>
        <h3 v-else>You haven't received any request yet!</h3>
    </base-card>
  </section>
</template>

<script>
import requestItem from './requestItem.vue'
export default {
  components: {
    requestItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequest() {
      return this.$store.getters['requests/hasRequest']
    }
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch('requests/fetchRequests')
      } catch(error) {
        this.error = error.message || 'Something wrong...'
      }
      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>