<template>
  <div>
    <!--<the-header></the-header>-->
    <TheHeader />

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!--<active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> 这两行components被下一行直接取代-->
    <!--Dynamic components! v-bind:is === v-if, 自动找到要显示的component-->
    <component :is="selectedComponent"></component>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import MyGoals from './components/MyGoals.vue';
 import ManageGoals from './components/ManageGoals';
 import ActiveGoals from './components/ActiveGoals';

export default {
  components: {
    TheHeader,
    /*BadgeList,
    UserInfo,
    MyGoals,*/
    ManageGoals,
    ActiveGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
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
