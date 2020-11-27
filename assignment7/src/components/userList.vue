<template>
  <div>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, 
inject, 
onBeforeMount,
onUpdated
} from 'vue'
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })
    onBeforeMount(() => {
      console.log('Before Mount');
    })

    onUpdated(() => {
      console.log('On updated');
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