<template>
  <div id="app">
    <!-- <slot-parent/> -->
    <fram-e><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68e02edZcBiq79YhQ9U29sU4Yf8oJVcopYQ&usqp=CAU"></fram-e>
    <fram-e><h1>getting it into slot</h1></fram-e>
    <fram-e>
      <template v-slot:header>
        <h2>This is the header</h2>
      </template>
      <p>This is the body content of the card.</p>
    </fram-e>
    <fram-e/>
    <parent-comp/>
    <scopedSlotParent/>
  </div>
</template>

<script>
import ParentComp from './components/parentComp.vue';
// import SlotParent from './components/slotParent.vue'
import FramE from './components/framE.vue';
import scopedSlotParent from './components/scopedSlotParent.vue';

export default {
  name: 'App',
  components: {
    // SlotParent,
    FramE,
    ParentComp,
    scopedSlotParent,
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
