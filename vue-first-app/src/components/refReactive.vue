<template>
    <div>{{ sum }}</div>
    <button @click="ref1 = 100">ref1 to 100</button>
    <button @click="ref2 = 200">ref2 to 200</button>
    <button @click="object.myNumber = 300">object.myNumber to 300</button>
  </template>

  <script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        ref1: ref(0),
        ref2: ref(0),
        object: {
          myNumber: 0,
        },
      };
    },
    computed: {
      sum() {
        return this.ref1 + this.ref2 + this.object.myNumber;
      },
    },
  };
  </script>
