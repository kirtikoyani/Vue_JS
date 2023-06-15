<template>
<h1>Home component {{'kiitu'.length}}</h1>
<h1>10+24= {{10+24}}</h1>
<p v-text="msg"></p>
<span v-html="rawHtml"></span>
<button v-on:click="getData('Button 1 clicked')">Click me</button>
<button v-on:dblclick="getData('Button dubble clicked')">Click me</button>
<!-- <h1>Email: {{email}}</h1> -->
<!-- <h1>Mobile: {{mobile=778586678}}</h1> -->
<!-- <h1>Name: {{getName()}}</h1> -->
  </template>

  <script>
  export default {
    name: 'homePage',
    data(){
      return{
        email:'kittu@yoo.com',
        getName:function(){
          return"urmii nalayak(mari bajuvadi)"
        },
        msg:'kitti',
        rawHtml:'<h1>😁😁😁<p>hii<h2>mam</h2></p></h1>'
      }
    },methods:{
      getData(data){
        alert(data)
      }
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

  <style scoped>
h1{
  color: rgb(0, 68, 255);
}
</style>
  <style >
h1{
  color: rgb(255, 8, 0);
}
</style>