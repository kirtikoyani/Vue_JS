<script setup>
 import {ref,reactive} from 'vue'
//  <!-- binding objects
    const cl = ref('red');
    const bg = ref('green');

    const styleobj=reactive({
        color:"yellow",
        backgroundColor:"blue",
    });
    const styleobj2=reactive({
fontSize:"22px",
padding:"5px",
    })
</script>

<template>
 <h3 style="color:red"> style with normal way</h3>
    <h3 v-bind:style="{color:'purple',backgroundColor:'yellow'}">v-bind:style="{color:'purple',backgroundColor:'black'}"</h3>
    <h3 :style="{color:'white','background-color':'silver'}">:style="{color:'white','background-color':'silver'}" ---- sorthend property</h3>
    <h3 :style="{color:cl,backgroundColor:bg}">:style="{color:cl,backgroundColor:bg}" ---- sorthend property</h3>
    // obj binding
    <h3 :style="styleobj">obj style</h3>
    // array binding
    <h3 :style="[styleobj,styleobj2]">array style</h3>

</template>

<style scoped>

</style>
