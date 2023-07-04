<template>
  <div id="app">
    <learning-survey></learning-survey>
  <user-experiences></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue'
import UserExperiences from './components/survey/UserExperiences.vue'
export default {
  name: 'App',
  components: {
    LearningSurvey,
    UserExperiences
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
