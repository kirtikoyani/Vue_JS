<template>
<div>
<parent-com/>
</div>
</template>

<script>
import ParentCom from './components/parentComp.vue'

export default {
  name: 'App',
  components: {
    ParentCom
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
// $attrs