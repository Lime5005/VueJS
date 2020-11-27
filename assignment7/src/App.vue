<template>
  <h2>My course Goal</h2>

  <h3 v-if="goalAndYear.goalIsVisible">{{ goalAndYear.goal}}</h3>
  <h3>{{ goalAndYear.year }}</h3>

  <button @click="showGoal">Toggle Goal</button>
  <br>
  <button @click="growYear">Year for next year</button>
  <user-list :first-name="firstName" :last-name="lastName" ></user-list>
  <h3>{{ nickName }}</h3>
  <input type="text" placeholder="First Name" v-model="firstName">
  <input type="text" placeholder="Last Name"
  v-model="lastName">
  <br>
  <input type="text" placeholder="Nick Name"
  ref="nicknameInput">
  <br>
  <button @click="changeNickname">Change</button>
</template>

<script>
import userList from './components/userList.vue'
import { ref, reactive, computed, provide, watch} from 'vue'
export default {
  components: {
    userList
  },
  setup() {
    //const goal = ref('Find a job in IT')
    const goalAndYear = reactive({
      goal: 'Find a job in IT',
      goalIsVisible: false,
      year: 2020
    })
    const firstName = ref('')
    const lastName = ref('')
    const nickName = ref('')
    const nicknameInput = ref(null)
    const userName = computed(function() {
      return firstName.value + ' ' + lastName.value
    })

    const uAge = ref(31)

    provide('userAge', uAge)
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

  function changeNickname() {
    nickName.value = nicknameInput.value.value
  }

    return {
      goalAndYear, 
      showGoal, 
      growYear,
      firstName,
      lastName,
      userName,
      nickName,
      nicknameInput,
      changeNickname
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

button {
  background-color: #0f0280; /* Green */
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  color: white;
  padding: 15px 20px;
  margin: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
