<template>
<div id="search">
    <input type="text" v-model="value" />
    <button @click="emitSearchValue">search</button>
    <i class="fas fa-search" @click="emitSearchValue"></i>
</div>
</template>

<script>
import {
    EventBus
} from '../event-bus.js'
export default {
    data: () => {
        return {
            value: ''
        }
    },
    methods: {
        emitSearchValue() {
            EventBus.$emit('search-value', this.value);
        }
    }
}
</script>
