<template>
<div id="app">
    <daynamicCompEx1 />
    <FeatchData/>
    <TheForm/>

</div>
</template>

<script>
import daynamicCompEx1 from './components/daynamicCompEx1.vue'
import FeatchData from './components/featchData.vue'
import TheForm from './components/TheForm.vue'


export default {
    name: 'App',
    components: {
        daynamicCompEx1,
        FeatchData,
        TheForm
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
