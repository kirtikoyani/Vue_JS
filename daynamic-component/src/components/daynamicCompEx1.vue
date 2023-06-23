<template>
    <div>
        <h1>Dynamic Components</h1>
    <p>App.vue switches between which component to show.</p>
    <button @click="toggleValue = !toggleValue">Switch component</button>
    <!-- <component :is="activeComp"></component> -->
    <KeepAlive include="CompTwo">
    <!--keepalive contain alos that two methods - exclude, max -->
    <component :is="activeComp"></component>
  </KeepAlive>
    </div>

  </template>

  <script>
    export default {
      data () {
        return {
          toggleValue: true
        }
      },
      computed: {
        activeComp() {
          if(this.toggleValue) {
            return 'comp-one'
          }
          else {
            return 'comp-two'
          }
        }
      }
    }
  </script>

  <style>

    #app > div {
      border: solid black 2px;
      padding: 10px;
      margin-top: 10px;
    }
  </style>