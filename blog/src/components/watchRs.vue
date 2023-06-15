<template>
<h2>watchers</h2>
<h1>{{count}}</h1>
<button v-on:click="count++">+</button>
<button v-on:click="count--">-</button>
</template>

<script>
export default {
    name: "watchRs",
    data() {
        return {
            count: 0
        }
    },
    watch:{
        count(val,prev){
            if(val>5 && val>prev){
                this.count=5
            }
            if(val<0 && val<prev){
                this.count=0
            }
        }
    }
}
</script>
