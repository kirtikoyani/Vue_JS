<template>
<div>
    <h1>Child</h1>
    <h3>Name: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>
    <h3>Std: {{ std }}</h3>
    {{ avail ? '(you are available)' : ''}}
    <button @click="toggleage">Toggle</button>
    <button @click="$emit('add', Math.random()+1)">
    Add Math.random()
  </button>
    <button @click="$emit('multiply', 6,3)">
    multiply 2 & 3
  </button>
  <GrandChild />
</div>
</template>

<script>
import GrandChild from './grandChild.vue';
export default {
    name: "ChildComp",
    emits: ["toggle-age"],
    props: {
        id: {
            type: String,
            requred: true
        },
        name: {
            type: String,
            requred: true
        },
        std: {
            type: Number,
            requred: true
        },
        email: {
            type: String,
            requred: true
        },
        avail: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        some() {
            console.log("jdjfiji");
        },
        toggleage() {
            this.$emit("toggle-age", this.id, this.some());
        },
    },
    components: { GrandChild }
}
</script>
