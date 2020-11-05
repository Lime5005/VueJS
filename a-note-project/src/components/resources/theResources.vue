<template>
  <!--这个零件里放入其他两个零件-->
  <card-style>
    <button-style @click="setSelectedTab('stored-resources')">Stored Resources</button-style>
    <button-style @click="setSelectedTab('add-resources')">Add Resource</button-style>
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
      selectedTab: 'stored-resources'
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