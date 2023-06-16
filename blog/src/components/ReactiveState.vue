<script setup>
import {
    reactive
} from 'vue';
//without reactivity
let num = {
    a: 10,
    b: 20
};
setTimeout(() => {
    console.log("settimeout Called");
    console.log("Num", num);
    num.a = 30;
    console.log("a:", num.a);
}, 2000);

//with reactivity
let numm = reactive({
    c: 10,
    d: 20
});
setTimeout(() => {
    console.log("settimeout Called");
    console.log("Num", numm);
    numm.c = 30;
    console.log("c:", numm.c);
}, 2000);

// //without reactivity
// let count = 0;
// // setTimeout(() => {
//     console.log("settimeout Called");
//     count++;
//     console.log("count:", count);
// // }, 2000);

// //with reactivity
// let num1 = reactive({
//     count: 0
// });
// setTimeout(() => {
//     console.log("settimeout Called");
//     console.log("Num1", num1);
//     num1.count++;
//     console.log("count:", num1.count);
// }, 2000);

//deep reactivity
// const obj = reactive({
//     num2: {
//         count1: 0
//     },
//     user: ["kirti", "pisu"],
// });
// setTimeout(() => {
//     console.log("settimeout Called");
//     console.log("obj", obj);
//     console.log("obj.num2", obj.num2);
//     console.log("obj.num2.count", obj.num2.count1);
//     console.log("obj.user", obj.user);
//     obj.num2.count1++;
//     obj.user.push("Dhrupal");
// }, 2000);
</script>

<template>
<!-- //without reactivity -->
<h1>without reactivity SUM: {{num.a+num.b}}</h1>
<!-- //with reactivity -->
<h1>with reactivity SUM: {{numm.c+numm.d}}</h1>
<!-- //without reactivity -->
<!-- <h1>without reactivity Count: {{count}}</h1> -->
<!-- //with reactivity -->
<!-- <h1>with reactivity Count: {{num1.count}}</h1> -->
<!-- deep reactivity  -->
<!-- <h1>deep reactivity count:{{obj.num2.count1}}</h1> -->
<!-- <h1>deep reactivity User:{{obj.user}}</h1> -->
</template>

<style scoped>

</style>
// reactivity's main aim is when change val that can change in all that val's operations
