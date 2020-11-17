<template>
  <base-card>
    <h2>Find You Coach:</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter">
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter">
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter">
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    setFilter(event) {
      //console.log(event);//页面点击career，出现type: "change"，id: "career"，checked: false
      const inputId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        //copy all the filters object from data into this new obj updatedFilter:
        ...this.filters,
        //then overwrite one of the 3 properties:
        //by dynamically set the property name that will be overwritten into our input, it's a key, value is false or true
        [inputId]: isActive
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>