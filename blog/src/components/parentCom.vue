<!-- pass data parent component to child component -->

<template>
<h1>parent component</h1>

<div class="user">
    <h1>{{parent.name}}</h1>
    <h1>{{parent.email}}</h1>
    <button v-on:click="getData(parent.name,parent.email)">Call Function</button>
    <button v-on:click="getUserName(pName)">parent data</button>
</div>
</template>

<script>
export default {
    name: 'childCom',
    data() {
        return {
            pName: 'kitti'
        }
    },
    props: {
        name: String,
        parent: Object,
        getData: Function,
        getUserName:Function
    }
}
</script>

<style>
.user {
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>
