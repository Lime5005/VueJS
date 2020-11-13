<template>
  <div class="container">
    <div class="block" :class="{animate: moveBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition @before-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled">
    <p v-if="showPara">This is only visible sometimes...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="follow-btn" mode="out-in"> <!-- 二选一的情况下可以多个子元素 -->
      <button @click="follow" v-if="toFollow">Follow</button>
      <button @click="unfollow" v-else>Unfollow</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible" >
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal> <!-- 这里不能直接加transition，因为base-modal里面含两个子元素: div&dialog -->
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
      showPara: false,
      toFollow: true,
      enterInterval: null,
      leaveInterval: null
      };
  },
  methods: {
    enterCancelled(el) {
      console.log('CANCELLED ENTER');
      console.log(el);
      clearInterval(this.enterInterval)   
    },
    leaveCancelled(el) {
      console.log('CANCELLED LEAVE');
      console.log(el);
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let counter = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = counter * 0.01;
        counter ++;
        if (counter > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let counter = 1;
/*  arrow function makes using 'this' possible here */
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - counter * 0.01;
        counter ++;
        if (counter > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 60)
    },
    afterLeave(el){
      console.log('after leave');
      console.log(el);
    },
    follow() {
      this.toFollow = false;
    },
    unfollow() {
      this.toFollow = true;
    },
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


/* final state:  */
.v-enter-to {
/*   opacity: 1;
  transform: translateY(0) scale(1); */
}
.v-leave-from {
/*   opacity: 1;
  transform: translateY(0) scale(1); */
}

.v-leave-to {
/*   opacity: 0;
  transform: translateY(30px) scale(0.9); */
}

.follow-btn-enter-from,
.follow-btn-leave-to {
  opacity: 0;
}
.follow-btn-enter-active {
  transition: opacity 0.3s ease-out;
}
.follow-btn-leave-active {
  transition: opacity 0.3s ease-in;
}

.follow-btn-leave-from,
.follow-btn-enter-to {
  opacity: 1;
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