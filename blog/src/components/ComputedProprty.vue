<script setup>
import {ref,computed} from 'vue';
// without ref
let fsName="kitty";
let lsName="patel";

// computed properrty
const flName=computed(()=>{
return fsName+" "+lsName;
})
setTimeout(() => {
    console.log("settime call");
    fsName="dhrupal";
}, 2000);

// with ref
let fsName1=ref("kitty");
let lsName1=ref("patel");

// computed properrty
const flName1=computed(()=>{
return fsName1.value+" "+lsName1.value;
})
setTimeout(() => {
    console.log("settime call");
    fsName1.value="dhrupal";
}, 2000);

</script>

<template>
{{flName}}
{{flName1}}
</template>

<style scoped>

</style>
<!-- // computed property thi badha ne reactivity lagu nhi pde only jema ref hse ama j pdse -->