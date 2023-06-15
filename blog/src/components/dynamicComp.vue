<template>
<h2>daynamic componunt</h2>
<button @click="tab='dJava'">Load Java</button>
<button @click="tab='dNode'">Load Node</button>
<!-- <DJava />
<DNode /> -->
<component :is="tab" />
</template>

<script>
import dJava from './dJava.vue';
import dNode from './dNode.vue';

export default {
    name: "dynamicComp",
    components: {
        dJava,
        dNode
    },
    data() {
        return {
            tab: 'dJava'
        }
    }
}
</script>

<style>
h1 {
    color: coral;
}
</style>
