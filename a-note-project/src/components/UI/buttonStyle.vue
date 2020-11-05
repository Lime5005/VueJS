<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>

  <!--<button-style mode="flat">要么是默认，要么带class='flat'</button-style>-->
</template>

<script>
export default {
  props: ['type', 'mode']
}
</script>
<style scoped>
button {
  background-color: #3a0061;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover,
button:active {
  background-color: blueviolet;
  border-color: blueviolet;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>