<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      {{ error }}
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password">
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (at least 6 characters).</p>
        <base-button>{{ loginBtnCaption }}</base-button>
        <base-button type="button" mode="flat" @click="swithAuthMode">{{ switchBtnCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    loginBtnCaption() {
      if(this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchBtnCaption() {
      if(this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login'
      }
    }
  },
  methods: {
    async submitForm() {
      if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false
        return
      }

      this.isLoading = true
      //send http request

      try {
        if(this.mode === 'login') {
          //
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          })//The auth module is not namespaced.
        }
      } catch(err) {
        this.error = err.message || 'Failed to Sign-Up, try again later'
      }

      this.isLoading = false
    },
    swithAuthMode() {
      if(this.mode === 'login'){
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style scope>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>