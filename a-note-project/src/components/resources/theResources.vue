<template>
  <!--这个零件里放入其他两个零件-->
  <card-style>
    <button-style @click="setSelectedTab('stored-resources')" :mode="StoredMode">Stored Resources</button-style>
    <button-style @click="setSelectedTab('add-resources')" :mode="AddMode">Add Resource</button-style>
  </card-style>
  <!--用keep-alive封装，即使跳转页面，依然保存已经输入的数据-->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      //分别是给两个不同的components: a data property and a method
      resources: this.storedResources,
      addResources: this.addResources
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
    },
    addResources(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    }
  }
}
</script>

<style scoped>

</style>