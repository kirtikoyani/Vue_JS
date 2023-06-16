<script setup>
import {ref} from 'vue';
// without ref
let fsName="kitty";
let lsName="patel";

//method
function flName() {
    return fsName+" "+lsName;
}
setTimeout(() => {
    console.log("settime call");
    fsName="dhrupal";
}, 2000);

// with ref
let fsName1=ref("kitty");
let lsName1=ref("patel");

//method
function flName1() {
    return fsName1.value+" "+lsName1.value;
}
setTimeout(() => {
    console.log("settime call");
    fsName1.value="dhrupal";
}, 2000);

</script>

<template>
{{flName1()}}
{{flName()}}
</template>

<style scoped>

</style>
