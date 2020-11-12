<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div><!-- 这里也要加上v-if="open"，不然close的button也看不到, 因为这两个都在同一组件BaseModal内 -->
  <transition name="modal"> <!-- One transition can have only ONE direct child -->
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  //animation: modalAnim 0.5s ease-out forwards;
}

.modal-enter-active {
  animation: modalAnim 0.5s ease-out;
}

.modal-leave-active {
  animation: modalAnim 0.5s ease-in reverse;
}

@keyframes modalAnim {
  from {
    opacity: 0;
    transform: translateY(-80px) scale(0.8);
  }

  to {
    opacity: 1;
    trznsform: translateY(0) scale(1);
  }
}
</style>