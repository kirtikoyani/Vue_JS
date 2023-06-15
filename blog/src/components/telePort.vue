<template>
<h2>teleport componunt</h2>
<teleport to="#footer">
    <div class="footer">
        <h1>Footer</h1>
        <p>Copy Right @ kritikkoyani</p>
    </div>
    <!-- <tFooter /> -->
</teleport>

</template>

<script>
// import tFooter from './tFooter.vue';

export default {
    name: "telePort",
    components: {
        // tFooter,
    },
}

</script>


<style>
h1 {
    color: coral;
}
.footer{
    color: skyblue;
    position: absolute;
    bottom: 0;
    background-color: antiquewhite;
    width: 90%;
    left: 0;
    padding-left: 10%;
}
</style>
