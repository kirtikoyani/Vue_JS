<template>
<h2>Alots in vue js 3</h2>
<sloT2>
    <template v-slot:header>
        <h1>torist plase</h1>
    </template>
    <template v-slot:main>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0f/2b/0a/caption.jpg?w=300&h=300&s=1" />
    </template>
    <template v-slot:footer>
        <br><button><a href="#">good place</a></button>
    </template>
</sloT2>
<sloT2>
    <template v-slot:header>
        <h1>torist plase</h1>
    </template>
    <template v-slot:main>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0f/2b/0a/caption.jpg?w=300&h=300&s=1" />
    </template>
    <template v-slot:footer>
    </template>
</sloT2>
<!-- <sloT2></sloT2>
<sloT2><h1>torist plase</h1></sloT2>
<sloT2><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/0f/2b/0a/caption.jpg?w=300&h=300&s=1" /> </sloT2>
<br><sloT2><a href="#">good place</a></sloT2> -->
</template>

<script>
import sloT2 from './sloT2.vue';
export default {
    name: "sloT",
    components: {
        sloT2
    }
}
</script>

<style>

</style>