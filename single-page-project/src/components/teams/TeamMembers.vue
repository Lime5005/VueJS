<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],//so this component is more re-usable, as well as it's provided in the props. This way is more efficient than searching by this.$route.params.
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(teamId) {
    const selectedTeam = this.teams.find(team => team.id === teamId);
    const members = selectedTeam.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find(user => user.id === member);
      selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
    }
  },
  // created是在所有数据到齐的时候启动：它只能在组件刚建成时使用，不可再做页面内的更改和跳转
  created() {
    //this.$route.path // this.$route gives access to some data,eg: teams/t1 
    //use teamId to find team members:
    // this.$route.path // /teams/t1
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query.sort);//asc
  },
  //This will only work if it's loaded and re-loaded through routing:
  // beforeRouteUpdate(to, from, next){
  //   console.log('beforeRouteUpdate!!!!');
  //   this.loadTeamMembers(to.params.teamId);
  //   next({ name: 'team-members', params: { teamId: 't2' } });//永远是t2
  // },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>