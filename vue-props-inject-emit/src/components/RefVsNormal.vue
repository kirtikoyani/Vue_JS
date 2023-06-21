<template>
<div>
    <h1>ref vs normal</h1>
    <p>here ans is true but in vue 3 it's getting false because this.obj is behave like reactive so it getting proxy object so that comparision is false </p>
</div>
</template>

<script>
export default {
    name: 'RefVsNormal',
    data() {
        return {
            someObject: {}
        }
    },
    mounted() {
        const newObject = {}
        this.someObject = newObject
        console.log(newObject, this.someObject)
        console.log(newObject === this.someObject, 'kirti') // true but same thing in vue 3 is change its getting false
    }
}
</script>
