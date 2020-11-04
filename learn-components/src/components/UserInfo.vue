<template>
  <section>
    <section-style>
    <header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </header>
    <p>{{ infoText }}</p>
    </section-style>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>


section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>