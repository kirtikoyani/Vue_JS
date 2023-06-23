<template>
<div id="app">
    <daynamicCompEx1 />
    <FeatchData/>
</div>
</template>

<script>
import daynamicCompEx1 from './components/daynamicCompEx1.vue'
import FeatchData from './components/featchData.vue'

export default {
    name: 'App',
    components: {
        daynamicCompEx1,
        FeatchData
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
