<template>
  <div class="container">
    <div class="block" :class="{animate: moveBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
    <p v-if="showPara">This is only visible sometimes...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      moveBlock: false,
      dialogIsVisible: false,
      showPara: false
      };
  },
  methods: {
    togglePara() {
      this.showPara = !this.showPara;
    },
    animateBlock() {
      this.moveBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */ /** name duration how throttled at the end*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
/*This class will be called if the condition: moveBlock is true*/ 
.animate {
  /* transform: translateX(-200px); */
  animation: slide-fade 0.3s ease-out forwards; 
 /*  forwards: keep the final state as the new look, the new state of the animated element. */
}

.v-enter-from {
/*   opacity: 0; /* initially invisible 
  transform: translateY(-30px) scale(0.9)  */  /* -20px : move above */
}
.para-enter-active {
  animation: slide-fade 0.3s ease-out/* watch all animation changes, set a duration, */
}

/* final state:  */
.v-enter-to {
/*   opacity: 1;
  transform: translateY(0) scale(1); */
}
.v-leave-from {
/*   opacity: 1;
  transform: translateY(0) scale(1); */
}
.para-leave-active {
  animation: slide-fade 0.3s ease-in;
}
.v-leave-to {
/*   opacity: 0;
  transform: translateY(30px) scale(0.9); */
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
/* at 20% of the animation time, move to left by 150px, and make 20% bigger */
  20% {
    transform: translateX(-150px) scale(1.2);
  }

/* 到100的时候，animation结束时，左靠200px，回到原来大小 */
  100% {
    transform: translateX(-200px) scale(1);
  }
}
</style>