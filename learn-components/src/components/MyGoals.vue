<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!--<h2>{{ goal }}</h2>-->
      <slot :goal="goal" another-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
// MyGoals.vue is a component has nothing to do with the project, but how to customize it's own style in App.vue with its own data ? 
export default {
  data() {
    return {
      goals: ['Learn components', 'More details']
    }
  } 
}
</script>
