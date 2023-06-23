<template>
<div>
    <h1>Local Component</h1>
    <p>App.vue controls how local data from the scoped slot is rendered.</p>
    <scopedSlotChild v-slot="dataFromSlot" >
        <h2>{{ dataFromSlot.lclData }}</h2>
        <h4>{{ dataFromSlot.foodName }}</h4>
        <h4>{{ dataFromSlot.foodDesc }}</h4>
        <h4>{{ dataFromSlot.foodUrl }}</h4>
    </scopedSlotChild>
</div>
</template>


<script>
import scopedSlotChild from './scopedSlotChild.vue';
export default {
    components: {
        scopedSlotChild
    }
}
</script>


<style scoped>

h2 {
    background-color: lightgreen;
    padding: 10px;
}
</style>
