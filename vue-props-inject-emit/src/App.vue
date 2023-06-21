<template>
<div>
<parent-com/>
<ref-vs-normal/>
<prop-drill-parent/>
<search-comp/>
<event-bus/>
</div>
</template>

<script>
import ParentCom from './components/parentComp.vue'
import RefVsNormal from './components/RefVsNormal.vue'
import PropDrillParent from './components/PropDrillParent.vue'
import EventBus from './components/eventBus.vue'
import SearchComp from './components/searchComp.vue'

export default {
  name: 'App',
  components: {
    ParentCom,
    RefVsNormal,
    PropDrillParent,
    EventBus,
    SearchComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
// $attrs