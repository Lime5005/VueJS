<template>
  <button @click="login" v-if="!userIsAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['userIsAuth'])
  }
}
</script>