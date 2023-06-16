<script setup>
// binding method
const myid = 'kitti';
const mycls = 'kanha';
// dynamic binding
const obj = {
    id: 'kitti',
    class: 'kanha',
};
// dynamic arguments
const attributeName = 'class';
//boolean attributes true or "" --> its true
const isDisabled = false;
</script>

<template>
<div>
    <h1>{{myid}} | {{mycls}} <br> {{obj}}</h1>
    <h1 id='kitti' class='kanha'>keshav</h1>
    <!-- dynamic v-binding  -->
    <h1 v-bind:id="myid" v-bind:class="mycls">madhav</h1>
    <h1 :id="myid" :class="mycls">murlidhar</h1>
    <!-- dynamic multiple attributes binding  -->
    <h1 v-bind='obj'>govind</h1>
    <!-- dynamic arguments -->
    <h1 v-bind:[attributeName]='mycls'>mohan</h1>
    <h1 :[attributeName]='mycls'>dwarkadhis</h1>
    <!-- boolean attributes -->
    <button disabled>click1</button>
    <button :disabled='isDisabled'>click2</button>
</div>
</template>

<style scoped>
#kitti {
    color: blue;
}

.kanha {
    font-size: 20px;
    text-decoration: underline;
}
</style>
