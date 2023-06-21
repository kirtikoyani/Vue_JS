<template>
<div>
    <h1>grandChild</h1>
    <h2>name: {{ naam }}</h2>
    <ul v-for="it in items" :key="it.id">
        <li>{{ it.id }}</li>
        <li>{{ it.name }}</li>
    </ul>
</div>
</template>

<script>
import {
    inject
} from 'vue';

export default {
    name: "GrandChildComp",
    setup() {
        const naam = inject('name1');
        console.log(naam);
        // const items = inject('items');
        // console.log(items)
        return {
            naam
        };
    },
    inject: ['items']
}
</script>
