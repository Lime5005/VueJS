<template>
  <section>
    <coach-filter @change-filter="setNewFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as A Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
  <!--       <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li> -->
        <li>
          <coach-item v-for="coach in filteredCoaches" 
          :key="coach"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas">
          </coach-item>
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
import coachFilter from './coachFilter.vue';
import coachItem from './coachItem.vue';

export default {
  components: {
    coachItem,
    BaseButton,
    coachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches =  this.$store.getters['coaches/coaches']
      return coaches.filter(coach => {
        //array.filter returns a new array that matches the conditions, 只出现与选择的对应的coach: 同时满足选择，和有这个特长，（‘是非’选择）
        if(this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }
        if(this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }
        if(this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }
        return false
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  },
  methods: {
    setNewFilter(updatedFilters) {
      //console.log('>>>>>>>>>>>>>><<<<');
      this.activeFilters = updatedFilters;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>