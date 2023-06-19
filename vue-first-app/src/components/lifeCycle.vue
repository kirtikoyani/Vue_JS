<template>
<h1>before & after create {{name}}</h1>
<h1 ref="count">{{counter}}</h1>
<button v-on:click="counter++">Update count</button>
<br><br>
<button v-on:click="show=!show">Toggle</button>
<HelloWorld v-if="show" />
</template>


<script>
export default {
    name: "createMethod",
    //modifactions of other attributes will not be succsful hear bcz this is created frist
    // so nothig is there for this function to modification
    data() {
        console.warn("created data");
        // alert('😃😜😁😛')
        return {
            name: "kiti patel",
            counter: 0,
            show: true
        };
    },
    //it was create before script created
    beforeCreate() {
        // this was create first after that defines other property like name so this name was not display
        this.name = "dikru";
        // alert('run before create')
        console.warn("run before create");
    },
    created() {
        // this.name='chibii'
        // alert("created")
        console.warn("after created");
    },
    //it was create before template string created
    beforeMount() {
        // alert('before mount',this.$el)
        console.warn("before mount", this.$el);
    },
    mounted() {
        // alert('mounted',this.$el)
        console.warn("after mount", this.$el);
    },
    //it was create before updated data in ui
    beforeUpdate() {
        console.warn("before update", this.$refs["count"].textContent);
    },
    updated() {
        console.warn("after updated", this.$refs["count"].textContent);
    },
}
</script>


<style>
h1 {
    color: coral;
}
</style>
