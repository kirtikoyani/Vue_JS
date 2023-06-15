<template>
<h1>learn to use ref</h1>
<input type="text" ref="input" />
<button v-on:click="getdata">click to higlight input field</button>
</template>

<script>
export default {
    name: "refPara",
    methods: {
        getdata() {
            // console.log(this.$refs)
            // this.$refs.input.value = 'abcd';
            this.$refs.input.focus()
            let val = this.$refs.input.value
            console.log(val)
            this.$refs.input.style.color = 'red'

        }
    }
}
</script>
