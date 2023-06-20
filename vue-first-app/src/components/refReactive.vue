<template>
    <div>{{ sum }}</div>
    <p>{{ obj.c }}</p>
    <p>{{ obj2.b }}</p>
    <button @click="chnage">chnage</button>
    <button @click="ref1 = 100">ref1 to 100</button>
    <button @click="ref2 = 200">ref2 to 200</button>
    <button @click="object.myNumber = 300">object.myNumber to 300</button>
  </template>

  <script>
  import { ref } from 'vue';
const obj={c:10,d:20}
console.log(obj)
  export default {
    data() {
      return {
        ref1: ref(0),
        ref2: ref(0),
        object: {
          myNumber: 0,
        },
        obj2:{
          a:10,
          b:20
        }
      };
    },
    computed: {
      sum() {
        return this.ref1 + this.ref2 + this.object.myNumber;
      },
    },
    created(){
      this.obj = obj
    },
    methods:{
      chnage(){
        this.obj2.b=30;
      this.obj.c=30;
      }

    }
  };
  </script>
