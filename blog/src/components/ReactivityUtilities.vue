<script setup>
import {ref,reactive,isRef,isReactive,isProxy,toRef,toRefs} from 'vue'

let a = 10;
let b = ref(10);
let num = reactive({
    count: 1
});
let student = reactive({name:'kitti',roll:101,});

console.log("is a ref:", isRef(a));
console.log("is b ref:", isRef(b));
console.log("is num reactive:", isReactive(num));
console.log("is num return Proxy:", isProxy(num));
// console.log("is b unref:", unref(b));
console.log(isRef(num) ? num.value : num);
console.log("is student reactive:", isReactive(student));
console.log("student.name:", student.name);
console.log("is student.name reactive:", isReactive(student.name));
let nameRef=toRef(student,"name")
console.log("nameRef",nameRef);
console.log("is nameRef Ref",isRef(nameRef));
// toRefs convert obj's property's into ref
// toRef convert whole obj's into ref
let StudentAsRefs = toRefs(student);
console.log("after toRefs");
console.log("is StudentAsRefs reactive:", isRef(StudentAsRefs));// false=both reactive ref
console.log("StudentAsRefs.name:", StudentAsRefs.name.value);
console.log("is StudentAsRefs.name reactive:", isRef(StudentAsRefs.name));//false=reactive,true=ref
console.log("is StudentAsRefs.name.val reactive:", isRef(StudentAsRefs.name.value));//false=both reactive ref

</script>

<template>
<h1>SUM: {{a+b}}</h1>
</template>

<style scoped>

</style>
