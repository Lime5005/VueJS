<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" 
      :key="area" 
      :jobtype="area"
      :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachDetailLink">View details</base-button>
      <base-button link :to="contactCoachLink">Contact the coach</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseButton, BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachDetailLink() {
      return '/coaches/' + this.id;
      //return this.$route.path + '/' + this.id
    },
    contactCoachLink() {
      return '/coaches/' + this.id + '/contact';
      //return this.$route.path + '/' + this.id + '/contact';
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: end;
}
</style>