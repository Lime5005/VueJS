<template>
  <!--<button @click="confirm">Go Back!</button>-->
  <router-link to="/teams">Back</router-link>
  <button @click="savedData">Confirm to leave</button>
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
  data() {
    return {
      savedInput: false
    }
  },
  methods: {
    confirm() {
      //this.$router.push('/teams');
      //this.$router.back() or forward()
    },
    savedData() {
      this.savedInput = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRoute....');
    console.log(to, from);
    next(
      //层层把关,指哪打哪{ name: 'team-members', params: { teamId: 't2' } }
      //alert('ok')
    );
  },
  // 可用于提醒用户保存输入数据：
  beforeRouteLeave(to, from, next) {
    if(this.savedInput) {
      next()
    } else {
      const saved = confirm('Are you sure? You got some unsaved changes!')
      // if(saved) {
      //   next()
      // } // next() will be executed if saved === true: 
      next(saved)
    }
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