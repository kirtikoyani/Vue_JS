<template>
<div id="app">
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheResources
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
