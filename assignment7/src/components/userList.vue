<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })
    console.log(context);//attrs, emit,...if need emit:
    //context.emit('save-data', 1) === this.$emit('save-data', 1)
    const age = inject('userAge')
    return {
      userName,
      age
    }
  }
}
</script>