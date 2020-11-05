<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <!--用teleport封装起来, change the nested ErrorAlert component to the root body HTML element, it's more clear in this way.-->
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is Invalid!</h2>
        <p>Please enter at least a few character</p>
        <button @click="errorConfirm">OK</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
// Use ErrorAlert if inputIsInvalid is true
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    setGoal() {
      // this.$refs NOT $ref
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        //alert('Input should not be empty!');
        this.inputIsInvalid = true;
      }
    },
    errorConfirm() {
      this.inputIsInvalid = false;
    }
  }
}
</script>