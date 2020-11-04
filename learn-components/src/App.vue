<template>
  <div>
    <!--<the-header></the-header>-->
    <TheHeader />
    <!--<badge-list></badge-list>-->
    <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <my-goals>
      <!--This will not work : <h2>{{ goal }}</h2>, solution: scoped slot.-->
      <template v-slot="slotProps"> <!--slotProps represents all the key:value pairs passed by this slot in MyGoals.vue file-->
        <h2>
          {{ slotProps.goal }}
        </h2>
        <p>{{ slotProps['another-prop']}}</p>
      </template>
    </my-goals>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import MyGoals from './components/MyGoals.vue';
// import ManageGoals from './components/ManageGoals';
// import ActiveGoals from './components/ActiveGoals';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    MyGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
