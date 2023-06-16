<script setup>
import {ref,computed} from 'vue';
// without ref
let fsName = ref("guddi");
let lsName = ref("kumari");

// computed properrty
const flName = computed({
    // getter
    get(){
            console.log("getter called")
            return fsName.value + " " + lsName.value;
        },
        //setter
    set(newvalue) {
        console.log("setter called");
        //destructure returend array
        [fsName.value,lsName.value]=newvalue.split(" ");
    }
})
setTimeout(() => {
    console.log("settime call");
    flName.value = "guddo kumar";
}, 2000);

</script>

<template>
{{flName}}
</template>

<style scoped>

</style>
