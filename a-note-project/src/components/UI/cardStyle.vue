<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  border-radius: 12px;
  /*https://html-css-js.com/css/generator/box-shadow/*/
  box-shadow: 0px 6px 15px -5px #000000;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>