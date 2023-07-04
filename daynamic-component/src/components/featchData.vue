<!--<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
      <pre v-if="data">{{ data }}</pre>
    </div>
  </template>
-->
  // <script>
  // export default {
  //   data() {
  //     return {
  //       data: null,
  //     };
  //   },
  //   methods: {
  //     async fetchData() {
  //       const response = await fetch("../new.js");
  //       this.data = await response;
  //       console.log(this.data);
  //     }
  //   }
  // };
  // </script>

  <template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  methods: {
    async loadExperiences() {
      try {
        const response = await fetch("https://kirti-prac-default-rtdb.firebaseio.com/data.json");

        if (response.ok) {
          const data = await response.json();
          console.log(data, "data");
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      } catch (error) {
        console.log(error, "hehehe");
      }
    },
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>
// edit anything click : https://kirti-prac-default-rtdb.firebaseio.com/