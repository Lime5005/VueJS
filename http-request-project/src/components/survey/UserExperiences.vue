<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadAllResults">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMessage ">{{ errorMessage }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data yet, starting to add some!</p>     
      <ul v-else>
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
      results: [],
      isLoading: false,
      errorMessage: null
    }
  },
  methods: {
    loadAllResults() {
      this.isLoading = true;
      this.errorMessage = null;
      //if it's a GET request, it's a default method, so less code than POST:
      fetch('https://vue-http-project-960b4.firebaseio.com/serveys.json')
      .then(res => {
        if(res.ok) {
          return res.json();
        }
      })
      .then(data => {
        this.isLoading = false;
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
      .catch(err => {
        this.isLoading = false;
        //如果url有错，会报错:
        this.errorMessage = 'Failed to fetch data, please try it again later...'
        console.log(err);//这个必须的，否则报错
      })    
    }
  },
  mounted() {
    this.loadAllResults();
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