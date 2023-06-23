<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
      <pre v-if="data">{{ data }}</pre>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {
        const response = await fetch("../new.js");
        this.data = await response;
        console.log(this.data);
      }
    }
  };
  </script>