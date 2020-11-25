<template>
  <h2>My course Goal</h2>

  <h3 v-if="goalAndYear.goalIsVisible">{{ goalAndYear.goal}}</h3>
  <h3>{{ goalAndYear.year }}</h3>

  <button @click="showGoal">Toggle Goal</button>
  <button @click="growYear">Year for next year</button>
  <h4>{{ userName }}</h4>
  <input type="text" v-model="firstName">
  <input type="text" v-model="lastName">

</template>

<script>
import { ref, reactive, computed, watch } from 'vue'
export default {
  setup() {
    //const goal = ref('Find a job in IT')
    const goalAndYear = reactive({
      goal: 'Find a job in IT',
      goalIsVisible: false,
      year: 2020
    })
    const firstName = ref('')
    const lastName = ref('')
    const userName = computed(function() {
      return firstName.value + ' ' + lastName.value
    })
/*     function showGoal(){
      if(goal.value !== '') {
        goal.value = ''
      } else {
        goal.value = 'Find a job in IT'
      }
    } */
  watch(firstName, function(oldVal, newVal) {
    console.log('old ' + newVal);
    console.log('new ' + oldVal);
  })
  watch(goalAndYear, function(val) {
    console.log(val.year)
  })
  function showGoal() {
    goalAndYear.goalIsVisible = !goalAndYear.goalIsVisible
/*     if(goalAndYear.goal !== '') {
      goalAndYear.goal = ''
    } else {
      goalAndYear.goal = 'Find a job in IT'
    } */
  }

  function growYear() {
    goalAndYear.year ++ 
  }

    return {
      goalAndYear, 
      showGoal, 
      growYear,
      firstName,
      lastName,
      userName
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
