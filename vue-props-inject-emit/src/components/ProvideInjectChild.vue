<template>
<div class="subject-card">
    <h2>{{ subject.name }}</h2>
    <p>{{ subject.description }}</p>
    <ProvideInjectgrandChild v-for="student in students" :key="student.id" :student="student" />
</div>
</template>


<script>
import ProvideInjectgrandChild from '../components/ProvideInjectgrandChild.vue';

export default {
    props: ['subject'],
    components: {
        ProvideInjectgrandChild,
    },
    inject: ['students'],
    methods: {
        updateStudentName(updatedStudent) {
            this.$emit('update-student-name', updatedStudent);
        },
    },
};
</script>
