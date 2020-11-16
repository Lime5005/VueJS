<template>
<!-- this "mode" and "to" help us to pass any data in the individual components. -->
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    mode: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #0f308b;
  border: 1px solid #0f308b;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:active,
a:hover,
button:hover,
button:active {
  background-color: #b95dcf;
  border-color: #6d438a;
  border-radius: 30px;
  color: white;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #562f70;
  color: #562f70;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  border-color: #562f70;
}
</style>