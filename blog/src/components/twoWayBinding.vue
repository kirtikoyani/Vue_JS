<template>
<h1>Two way Binding Example</h1>
<input type="text" v-model="count">
<h2>{{count}}</h2>
</template>


<script>
export default {
    name: 'towWayBinding',
    data() {
        return {
            count: 0
        }
    },

}
</script>
