<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, watch, toRefs } from 'vue'
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search.js'
export default {
  components: {
    ProjectItem,
  },
  props: ['user'], //如果有多个props, 用toRefs转换一下
  setup(props) {
/*     const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('') */
    const { user } = toRefs(props) //user is a ref now

    //here we use computed 是因为setup只跑一次，用computed可以观察变化继续跑
    const projects = computed(() => {
      return user.value ? user.value.projects : []
    })

    const {
      enteredSearchTerm,
      availableItems,
      updateSearch
    } = useSearch(projects, 'title')

    const hasProjects = computed(() => {
      //这里可以直接用user也是因为user已经转换成了value在search.js里
      return user.value.projects && availableItems.value.length > 0;
    })

/*   const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects  
    })

     function updateSearch(val) {
      enteredSearchTerm.value = val
    }

    watch(enteredSearchTerm, (val) => {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val
        }
      }, 300)    
    }) */
    // watch (user), with const {user} = toRefs(props)
/*     watch(props, () => {
      enteredSearchTerm.value = ''
    }) */
    watch(user, () => {
      updateSearch('')
    })

    return {
      enteredSearchTerm,
      hasProjects,
      availableProjects: availableItems,
      updateSearch
    }
  }
/*   data() {
    return {
      enteredSearchTerm: '',
      activeSearchTerm: '',
    };
  },
  computed: {
    hasProjects() {
      return this.user.projects && this.availableProjects.length > 0;
    },
    availableProjects() {
      if (this.activeSearchTerm) {
        return this.user.projects.filter((prj) =>
          prj.title.includes(this.activeSearchTerm)
        );
      }
      return this.user.projects;
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
    user() {
      this.enteredSearchTerm = '';
    },
  }, */
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>