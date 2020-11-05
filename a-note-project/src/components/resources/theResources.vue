<template>
  <!--这个零件里放入其他两个零件-->
  <card-style>
    <button-style @click="setSelectedTab('stored-resources')" :mode="StoredMode">Stored Resources</button-style>
    <button-style @click="setSelectedTab('add-resources')" :mode="AddMode">Add Resource</button-style>
  </card-style>
  <component :is="selectedTab"></component>
</template>

<script>
import storedResources from './storedResources';
import addResources from './addResources';

export default {
  components: {
    storedResources,
    addResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {id: '1',
        title: 'Official guide',
        description: 'Vue documentation.',
        link: 'https://vue.org'},
        {
          id: '2',
          title: 'Google',
          description: 'Google search',
          link: 'http://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  computed: {
    StoredMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    AddMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>

<style scoped>

</style>