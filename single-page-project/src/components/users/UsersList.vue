<template>
  <!--<button @click="confirm">Go Back!</button>-->
  <router-link to="/teams">Back</router-link>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirm() {
      //this.$router.push('/teams');
      //this.$router.back() or forward()
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRoute....');
    console.log(to, from);
    next(
      //层层把关,指哪打哪{ name: 'team-members', params: { teamId: 't2' } }
      //alert('ok')
    );
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>