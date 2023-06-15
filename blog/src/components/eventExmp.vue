<template>
<h1 v-on:mouseover="getConsole()">Event Example</h1>
<button v-on:click="getCount()">Click to extend count</button>
<button v-on:dblclick="getData('Button dubble clicked')">dbl Click me</button>
<h2>{{count}}</h2>
</template>


<script>
export default {
    name: 'eventExmp',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        getData(data) {
            alert(data)
        },
        getCount() {
            this.count++;
        },
        getConsole() {
            console.warn('function called')
        }
    }
}
</script>
