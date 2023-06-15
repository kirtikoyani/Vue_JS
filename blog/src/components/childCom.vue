<!-- pass data parent component to child component -->

<template>
<!-- <h1>{{name}}</h1> -->
<h1>child componunt</h1>

<div class="user">
    <h1>{{child.name}}</h1>
    <h1>{{child.email}}</h1>
    <button v-on:click="getData(child.name,child.email)">Call Function</button>
</div>
</template>

<script>
export default {

    name: 'childCom',
    props: {
        name: String,
        child: Object,
        getData: Function
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
