<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadAllResults">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: []
    }
  },
  methods: {
    loadAllResults() {
      //if it's a GET request, it's a default method, so less code than POST:
      fetch('https://vue-http-project-960b4.firebaseio.com/serveys.json')
      .then(res => {
        if(res.ok) {
          return res.json();
        }
      })
      .then(data => {
        //console.log(data);
        //const serveysResults = [];
        for(const id in data) {
          this.results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          })
        }
        return this.results;
      })
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>