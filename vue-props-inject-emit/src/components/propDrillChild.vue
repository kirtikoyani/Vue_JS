<template>
<div>
    <h2>{{ subject.name }}</h2>
    <p>{{ subject.description }}</p>
    <!-- <Students v-for="student in students" :key="student.id" :student="student" /> -->
    <prop-drill-grandchild v-for="student in students" :key="student.id" :student="student" @name-updated="getmethod" />
</div>
</template>

<script>
import PropDrillGrandchild from './propDrillGrandchild.vue';

export default {
    props: ['subject', 'students'],
    components: {
        PropDrillGrandchild,
    },
    methods: {
        getmethod(saveName) {
            // console.log(saveName)
            this.$emit('name-updat', saveName)
            return saveName
        },
        getname() {
            this.$emit('name-update', this.getmethod());
        }
    },
};
</script>
