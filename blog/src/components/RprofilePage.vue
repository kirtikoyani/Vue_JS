<template>
<h1>{{profile}} profile</h1>
</template>

<script>
import {
    useRoute
} from 'vue-router'
export default {
    name: "RprofilePage",
    data() {
        return {
            profile: ''
        }
    },
    mounted() {
        const route = useRoute();
        console.warn(route.params.name);
        this.profile = route.params.name;
    }
}
</script>
