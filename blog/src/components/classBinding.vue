<!-- reuse component -->
<template>
<h1>Css binding</h1>
<h2 :class="applyStyle">Css class</h2>
<div :style="{border:'2px solid',borderColor: colorfull ? 'red':'blue'}">hwlow</div>
<button v-on:click="colorfull=!colorfull">Apply & remove style</button>
</template>

<script>
export default {
    name: 'classBinding',
    data() {
        return {
            colorfull: false,
        }
    },
    computed: {
        applyStyle() {
            return {
                gr: this.colorfull,
                err: true,
                other:true
            }
        }
    }
}
</script>

<style>
h1 {
    color: orange;
}

.gr {
    background-color: gray;
    width: 200px;
    padding: 10px;
}

.err {
    color: red;
}
.other{
    font-size:50px
}
</style>
