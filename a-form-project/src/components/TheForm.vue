<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity === 'Invalid'}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="checkInput"/>
      <p v-if="userNameValidity === 'Invalid'">Please enter your name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" v-model="interest" value="news"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" v-model="interest" value="tutorials"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" v-model="interest" value="nothing"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <!--这里的v-model="rating"是特定的，相当于既要听input又要绑定value， 绑定了props :model-value="" 还有@update:model-value=""
      把选择的值通过emit的方式反射到prop里，再反射到component对应的v-model=“值” 
-->
      <rating-control v-model="rating"></rating-control>
    </div>
    <div class="form-control">
      <input type="checkbox" id="confirm-term" name="confirm-term" v-model="confirm" />
      <label for="confirm-term">Do you agree our user terms?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import ratingControl from './ratingControl';

export default {
  components: {
    ratingControl
  },
  data() {
    return {
      userName: '',
      //v-model会自动识别type是number, 但是如果用了ref=""，则会出现bug:(this.$refs.inputAge.value) is a String, not a number
      userAge: null,
      //choose a default value "wom":
      referrer: 'wom',
      // Multiple checkbox should be an array; and it needs a value="" in the HTML elements: 多选题用array
      interest: [],
      // radio, 单选题不用array: (注意：checkbox, radio 都要带value，不然改选不了)
      how: null,
      // 如果是单独的是否选项，就用true or false定义，注意手动刷新页面观察改变：
      confirm: false,
      userNameValidity: 'pending...',
      rating: null
    }
  },
  methods: {
    submitForm() {
      console.log('name: ' + this.userName);
      this.userName = '';
      console.log(typeof(this.userAge)); //number
      console.log(this.userAge+5);
      console.log('age: ' + (this.userAge+5)); // age: 44 + 5 = 49
      //console.log(this.$refs.inputAge.value + 5);
      this.userAge = null;
      console.log('referrer: ' + this.referrer);
      this.referrer = 'wom';
      console.log(this.interest);
      this.interest = [];
      console.log(this.how);
      this.how = null;
      console.log(this.confirm);
      this.confirm = false;
      console.log(this.rating);
      this.rating = null;
    },
    checkInput() {
      if(this.userName === '') {
        this.userNameValidity = 'Invalid';
      } else {
        this.userNameValidity = 'Valid';
      }
    }
  }
}

</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>