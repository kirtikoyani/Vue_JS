<template>
    <h2>Form Modifiers</h2>
    <input type="text" v-model="data">
    <!-- lazy will show info after pointing out the mouse  -->
    <input type="text" v-model.lazy="info">
    <p>data is : <b>{{ data }}</b> </p>
    <p>info is : <b>{{ info }}</b> </p>
</template>
<script>
export default {
     name : "modFier",
      data(){
        return{
            data: '',
            info : ''
        }
      }
     }
</script>