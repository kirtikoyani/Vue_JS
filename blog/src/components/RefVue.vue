<script setup>
import {
    ref,
    reactive
} from 'vue'

// without reactivity
let a = 10;
let b = 20
setTimeout(() => {
    console.log("settimeout Called");
    a = 30;
}, 2000);

// with reactivity
let c = ref(10);
let d = ref(20);
setTimeout(() => {
    console.log("settimeout Called");
    console.log("c", c);
    console.log("c-val", c.value);
    console.log("d", d);
    console.log("d-val", d.value);
    c.value = 30;
}, 2000);

//without reactivity
let count = 0;
setTimeout(() => {
    console.log("settimeout Called");
    count++;
    console.log("count:", count);
}, 2000);

//with reactivity
let count1 = ref(0);
setTimeout(() => {
    console.log("settimeout Called");
    console.log("before", count1.value);
    count1.value++;
    console.log("count1:", count1);
    console.log("count1:", count1.value);
}, 2000);

//object
let obj1 = ref({
    count2: 0
});
setTimeout(() => {
    console.log("obj1 settimeout Called");
    console.log("obj", obj1);
    console.log("obj.val", obj1.value);
    console.log("obj.val.count", obj1.value.count2);
    obj1.value.count2++;
}, 2000);

//obj with ref
let obj2 = {
    count3: ref(0)
};
//must node that here we write count3 only,not any other objname place
let {
    count3
} = obj2;
setTimeout(() => {
    console.log("obj2 settimeout Called");
    console.log("obj2", obj2);
    console.log("obj2.val", obj2.count3);
    console.log("obj2.val.count", obj2.count3.value);
    obj2.count3.value++;
}, 2000);

//ref ref
let obj3 = ref({
    count4: ref(0)
});
setTimeout(() => {
    console.log("obj3 settimeout Called");
    console.log("obj3", obj3);
    console.log("obj3.val", obj3.value);
    console.log("obj3.val.count", obj3.value.count4);
    obj3.value.count4++;
}, 2000);

//Array
const students = reactive([ref("Kirti"), ref("pisu")]);
setTimeout(() => {
    console.log("students settimeout Called");
    console.log("students", students);
    console.log("students[0].val", students[0].value);
    console.log("students[1].val", students[1].value);
    students.push(ref("dikru"));
}, 2000);
</script>

<template>
<h1>SUM: {{a+b}}</h1>
<h1>SUM: {{c+d}}</h1>
<!-- //without reactivity -->
<h1>without reactivity Count: {{count}}</h1>
<!-- //with reactivity -->
<h1>with reactivity Count: {{count1}}</h1>
<!-- // with obj  -->
<h1>obj reactivity Count: {{obj1.count2}}</h1>
<h1>obj with ref count: {{obj2.count3}}</h1>
<h1>obj with ref count: {{obj2.count3.value+1}}</h1>
<!-- <h1>obj with ref count: {{obj2.count3+1}}</h1> //dosen't worked -->
<h1>distructuring with ref count: {{count3+5}}</h1>
<h1>obj ref in ref count: {{obj3.count4}}</h1>
<h1>array students: {{students}}</h1>
</template>

<style scoped>

</style>
