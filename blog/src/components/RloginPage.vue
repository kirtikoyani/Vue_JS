<template>
<h1>Login id is {{id}}</h1>
</template>


<script>
import {
    useRoute
} from 'vue-router'
export default {
    name: "RloginPage",
    data() {
        return {
            id: ''
        }
    },
    mounted() {
        const route = useRoute();
        console.warn(route.params.id);
        this.id = route.params.id;
    }
}
</script>
