<!-- pass data parent component to child component -->
<template>
<h1>Html binding</h1>
<div v-html="tag">

</div>
</template>


<script>
export default {
    name: 'htmlBinding',
    data() {
        return {
            name: 'kitu',
            tag: '<b><u>keep</u> silence please 🤫</b>'
        }
    }

}
</script>
