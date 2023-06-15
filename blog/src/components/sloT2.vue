<template>
<div class="cart">
<header><slot name="header"></slot></header>
<content><slot name="main"></slot></content>
<footer><slot name="footer"><br><button><a href="#">Me!!</a></button></slot></footer>
</div>
<!-- <slot>
    <h1>Default data</h1>
</slot> -->
</template>


<script>
export default {
    name: "sloT2",
    props: {
        data: String
    }

}
</script>
<style>
.cart{
    border: 1px solid;
    width: 300px;
    text-align: center;
    padding: 20px;
}
</style>